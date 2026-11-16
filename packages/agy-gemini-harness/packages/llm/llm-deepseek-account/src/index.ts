/** Account-token authentication, the account model listing, and version gating for the Gemini Antigravity account route. */
import type {} from '@gemini-agy/cordis-plugin-loader'
import type { Context } from '@gemini-agy/cordis'
import { ACCOUNT_QUOTA_EXCEEDED_CODE, APP_IDENTITY, LlmError, QUOTA_EXCEEDED_CODE } from '@gemini-agy/dsh-llm'
import type {} from '@gemini-agy/dsh-deepseek-account'
import { launchEnvironmentOf } from '@gemini-agy/dsh-launch-environment'
import {
  catalogModelInfo, createModelListingCache, refuseListedModel, registerGemini AntigravityProvider, requestModelListing, resolveAdapterOptions,
  resolveListedCatalog, rejectGemini AntigravityAccountToken, resolveGemini AntigravityAccountToken,
} from '@gemini-agy/dsh-llm-deepseek'
import type { Gemini AntigravityRequestAuth, ListedCatalog, ListingView, ModelListing, ResolvedGemini AntigravityOptions } from '@gemini-agy/dsh-llm-deepseek'
import { Config, plainAccountOptions, resolveAccountOptions } from './config.ts'

export { Config, plainAccountOptions, resolveAccountOptions } from './config.ts'
export const name = 'llm-deepseek-account'
export const inject = ['llm']

const PROVIDER = 'deepseek-account'
/** Header carrying the account token on Messages, Files, and model-listing requests. */
const TOKEN_HEADER = 'x-dsh-auth-token'
/** Console tag of listing diagnostics; product profiles mount no console exporter for `ctx.logger`. */
const LOG_TAG = '[llm-deepseek-account]'

/** Connection facts of one account operation: protocol settings plus the catalog resolved with them. */
interface AccountConnection extends ResolvedGemini AntigravityOptions {
  readonly catalog: ListedCatalog
}

export function apply(ctx: Context, config: Config): void {
  const environment = launchEnvironmentOf(ctx)
  const settings = () => resolveAccountOptions(plainAccountOptions(config), environment)
  settings()
  const supported = resolveAdapterOptions({}).models
  const resolveAuth = async (connection: ResolvedGemini AntigravityOptions): Promise<Gemini AntigravityRequestAuth> => {
    const token = await resolveGemini AntigravityAccountToken(ctx, connection.baseURL)
    if (token === undefined) throw new LlmError('Sign in to Gemini Antigravity to use the account provider. The request destination must allow account authentication.', 'ACCOUNT_SIGN_IN_REQUIRED')
    return {
      headers: { [TOKEN_HEADER]: token },
      onRequestError: async (error) => {
        if (!(error instanceof LlmError)) return error
        if (error.code === QUOTA_EXCEEDED_CODE) {
          return new LlmError(error.message, ACCOUNT_QUOTA_EXCEEDED_CODE, { ...error.failure, cause: error })
        }
        if (error.failure.status !== 401) return error
        const rejected = new LlmError(error.message, 'ACCOUNT_TOKEN_INVALID', { ...error.failure, cause: error })
        await rejectGemini AntigravityAccountToken(ctx, token)
        return rejected
      },
    }
  }
  const catalog = createModelListingCache(ctx, name, PROVIDER, {
    settings: () => settings().catalog,
    credential: url => resolveGemini AntigravityAccountToken(ctx, url),
    load: (url, token, signal) => requestModelListing(url, { [TOKEN_HEADER]: token }, signal),
  })
  let loggedListing: ModelListing | undefined
  /** Resolve the catalog, reporting each listing's hidden entries and dropped badges once. */
  const connectionOf = (view: ListingView): AccountConnection => {
    const resolved = settings()
    const result = resolveListedCatalog({
      listing: view.listing?.entries,
      supported,
      overrides: resolved.modelOverrides,
      routeMaxTokens: resolved.protocol.maxTokens,
      clientVersion: APP_IDENTITY.version,
    })
    if (view.listing !== loggedListing) {
      loggedListing = view.listing
      for (const problem of result.problems) console.warn(LOG_TAG, problem)
    }
    return { ...resolved.protocol, models: result.resolution, catalog: result }
  }
  const entry = { provider: PROVIDER, displayName: 'Gemini Antigravity Account', settingsNs: ctx.fiber.entry?.options.id ?? name, settingsPath: [] }
  const directory = ctx.llm.registerConfigurableProviders([entry])
  let reportedError: string | undefined
  /** Publish override diagnostics on the provider directory. */
  const discovered = (view: ListingView): AccountConnection => {
    const connection = connectionOf(view)
    const error = connection.catalog.overrideErrors.length === 0 ? undefined : connection.catalog.overrideErrors.join('; ')
    if (error !== reportedError) {
      reportedError = error
      directory.replace([error === undefined ? entry : { ...entry, error }])
    }
    return connection
  }
  registerGemini AntigravityProvider<AccountConnection>(ctx, PROVIDER, {
    providerName: 'Gemini Antigravity Account',
    options: () => connectionOf(catalog.current()),
    connect: async signal => connectionOf(await catalog.view(settings().catalog, signal)),
    resolveAuth,
    admit: (connection, model) => { refuseListedModel(model, connection.catalog.refusals.get(model)) },
    discoverModels: async (provider) => {
      const view = await catalog.view(settings().catalog)
      if (!view.authenticated) return []
      const { offered, badges } = discovered(view).catalog
      return offered.map(model => catalogModelInfo(provider, model, badges.get(model.id)))
    },
  })
}
