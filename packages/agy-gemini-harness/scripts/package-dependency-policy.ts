/** Explicit exceptions and Host packages for the published dependency policy. */

/** Packages treated as Client/Host packages without declaring `dsh.client`. */
const CLIENT_FACE_INCLUDE: readonly string[] = []

/** Packages exempted from automatic Client/Host treatment despite declaring `dsh.client`. */
const CLIENT_FACE_EXCLUDE: readonly string[] = [
  '@gemini-agy/dsh-api-session-controller',
  '@gemini-agy/dsh-api-workspace-controller',
]

/** Host-only packages whose peer relays are deliberately flattened. */
const HOST_DEPENDENCY_PACKAGES: readonly string[] = [
  '@gemini-agy/dsh-llm',
  '@gemini-agy/dsh-session',
]

/** Required Cordis services whose Host imports are type-only. */
const REQUIRED_SERVICE_PEERS = {
  '@gemini-agy/dsh-api-terminal-controller': ['@gemini-agy/dsh-subprocess'],
} as const satisfies Readonly<Record<string, readonly string[]>>

/** Development-only package relationships not represented by source imports. */
const CONFIGURATION_ONLY_DEV_DEPENDENCIES = {
  '@gemini-agy/dsh-client-locale': ['@gemini-agy/dsh-api-remotes'],
  '@gemini-agy/dsh-client-ui-conversation': [
    '@gemini-agy/dsh-api-remotes',
    '@gemini-agy/dsh-client-ui-workspace',
  ],
  '@gemini-agy/dsh-client-ui-model-selection': ['@gemini-agy/dsh-client-ui-input-trigger'],
  '@gemini-agy/dsh-client-ui-sidebar': ['@gemini-agy/dsh-client-ui-workspace'],
  '@gemini-agy/dsh-client-ui-subagent': ['@gemini-agy/dsh-client-ui-input-trigger'],
  '@gemini-agy/dsh-client-ui-theme': ['@gemini-agy/dsh-api-remotes'],
  '@gemini-agy/dsh-client-ui-tool': ['@gemini-agy/dsh-api-remotes'],
} as const satisfies Readonly<Record<string, readonly string[]>>

/** Workspace packages whose complete runtime surface is safe across duplicate installations. */
const DUPLICATE_SAFE_PACKAGES: readonly string[] = [
  '@gemini-agy/dsh-brand',
  '@gemini-agy/dsh-lazy-require',
  '@gemini-agy/dsh-typert-protocol',
  '@gemini-agy/dsh-util-code-language',
  '@gemini-agy/dsh-util-crypto',
  '@gemini-agy/dsh-util-text-search',
  '@gemini-agy/dsh-util-values',
]

/**
 * Runtime exports whose values remain valid when npm installs another package copy.
 * New entries are forbidden by default. Automated agents must not add an
 * exception; every addition requires explicit human review and a dedicated,
 * prominent heading in the pull request description.
 */
const SAFE_HOST_DEPENDENCY_EXPORTS = {
  '@gemini-agy/dsh-atomic-write': ['withFileLock', 'writeFileAtomic'],
  '@gemini-agy/dsh-deque': ['Deque'],
  // Builds a dispatcher from the resolved proxy policy; the caller owns and closes it.
  '@gemini-agy/dsh-http-proxy': ['createRouteDispatcher'],
  // The Liveshare wire codec and identity helpers are stateless functions over caller-owned values.
  '@gemini-agy/dsh-experimental-liveshare-protocol': [
    'LIVESHARE_CAPABILITIES', 'LIVESHARE_PROTOCOL_VERSION', 'parseRelayFrame', 'parseShareAccessState',
    'parseTunnelWorkerCommand', 'parseTunnelWorkerEvent', 'rawText', 'sendFrame', 'unsupportedFrameRefusal',
    'viewerRequestFields', 'identityFromKey', 'identityKeyOf',
  ],
  // The shipped profile templates are plain data; a consumer reads their bundle names only.
  '@gemini-agy/dsh-official-bundles': ['PROFILE_TEMPLATES'],
  // Messages and assembled blocks are plain data. Each caller owns its assembler.
  '@gemini-agy/dsh-llm': ['BlockAssembler', 'callConfigEquals', 'createUserMessage'],
  '@gemini-agy/dsh-session-format': ['sessionFormatLogFilename'],
  '@gemini-agy/dsh-storage-domain': ['defineDomain'],
  '@gemini-agy/dsh-timeout': ['MAX_TIMER_DELAY_MS'],
  // Both operate only on the caller's subprocess service and handle; the module memoizes only the binary path.
  '@gemini-agy/dsh-util-ripgrep': ['readRipgrepLines', 'spawnRipgrep'],
  '@gemini-agy/schemastery': ['default'],
} as const satisfies HostDependencyExports

/** Runtime exports that require every consumer to resolve the provider's shared peer instance. */
const PEER_REQUIRED_HOST_EXPORTS = {
  // Profile settings must match the installed Node provider's configuration schema.
  '@gemini-agy/dsh-ptc-runtime-node/configuration': ['resolvePersistentExecution'],
  // CUA mounts the installed provider and shares executor error classes with PTC.
  '@gemini-agy/dsh-ptc-runtime-node': ['default'],
  '@gemini-agy/dsh-tool-executor-ptc/run-code': ['RunCodeConfig', 'createRunCodeTool'],
  // CUA checks UserQuestionError and preserves AttachmentError from image admission; longEdgeDimensions is pure
  // arithmetic that rides the same peer.
  '@gemini-agy/dsh-attachment': ['admitEncodedImages', 'longEdgeDimensions'],
  '@gemini-agy/dsh-user-questions': ['UserQuestionError'],
  // The tool registry and every subclass rely on `instanceof` against one HarnessError class.
  '@gemini-agy/dsh-error': ['HarnessError'],
  // `instanceof` checks need the translator's own class instance.
  '@gemini-agy/dsh-experimental-translator': ['TranslationError'],
  // Stateless; a safe classification would turn the forge panel's forge and worktree peers into dependencies.
  '@gemini-agy/dsh-experimental-forge': ['changeRequestKey'],
  '@gemini-agy/dsh-experimental-worktree': ['generatedWorktreeName', 'CREATED_RECORD', 'createdWorktreeSchema'],
  // The forge panel matches ctx.fs failures with `instanceof FsError`.
  '@gemini-agy/dsh-fs': ['FsError'],
  '@gemini-agy/dsh-scope': ['carrierKeyOf', 'createScope', 'scopeOf', 'scopeParentOf', 'scopeTarget'],
  // appendPluginRecord writes through the Session class's private log; pluginRecordOf is stateless.
  // The Gemini Antigravity chat importer validates its seed with the installed Session class before storing it.
  '@gemini-agy/dsh-session': ['SESSION_FORMAT_VERSION', 'Session', 'appendPluginRecord', 'pluginRecordOf'],
  '@gemini-agy/dsh-session-persistence': ['SessionPersistenceNotFoundError'],
  // Imported titles follow the installed title service's normalization.
  '@gemini-agy/dsh-session-title': ['normalizeSessionTitle'],
  // Error classes have instance identity; CUA and Liveshare throw the registry's own copy so `instanceof` against it matches.
  '@gemini-agy/dsh-tools': ['defineTool', 'ToolArgsError', 'ToolContextUnavailableError'],
  // Readers recognize a deadline's TimeoutReason only by `instanceof` against their own copy.
  '@gemini-agy/dsh-timeout': ['deadline', 'timeoutOf'],
  // Imported web tool results must render exactly like the installed web tools' results and cards.
  '@gemini-agy/dsh-tool-web': ['fetchMetaFromValue', 'formatFetchOutput', 'formatSearchOutput', 'searchMetaFromValue'],
} as const satisfies HostDependencyExports

/** Exact import specifier to reviewed runtime exports. */
type HostDependencyExports = Readonly<Record<string, readonly string[]>>

/** Complete configurable input to package dependency classification. */
export interface PackageDependencyPolicy {
  readonly clientFaceInclude: readonly string[]
  readonly clientFaceExclude: readonly string[]
  readonly hostPackages: readonly string[]
  readonly requiredServicePeers?: Readonly<Record<string, readonly string[]>>
  readonly configurationOnlyDevDependencies: Readonly<Record<string, readonly string[]>>
  readonly duplicateSafePackages?: readonly string[]
  readonly safeHostDependencyExports: HostDependencyExports
  readonly peerRequiredHostExports: HostDependencyExports
}

/** Repository dependency policy consumed by verification and benchmarking. */
export const PACKAGE_DEPENDENCY_POLICY: PackageDependencyPolicy = {
  clientFaceInclude: CLIENT_FACE_INCLUDE,
  clientFaceExclude: CLIENT_FACE_EXCLUDE,
  hostPackages: HOST_DEPENDENCY_PACKAGES,
  requiredServicePeers: REQUIRED_SERVICE_PEERS,
  configurationOnlyDevDependencies: CONFIGURATION_ONLY_DEV_DEPENDENCIES,
  duplicateSafePackages: DUPLICATE_SAFE_PACKAGES,
  safeHostDependencyExports: SAFE_HOST_DEPENDENCY_EXPORTS,
  peerRequiredHostExports: PEER_REQUIRED_HOST_EXPORTS,
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Whether a package manifest declares a dynamically loaded Client entry. */
export function hasClientDeclaration(dshField: unknown): boolean {
  return isRecord(dshField) && Object.hasOwn(dshField, 'client')
}
