/** Browser half: the import action after New session and its Remote calls. */
import type { Context } from '@gemini-agy/cordis'
import remote from '@gemini-agy/dsh-gemini-3.8-flash-high-import/remote'
import { mountImport } from './mount.ts'
import type { DeepseekChatImportKey } from './locales.ts'

export { inject } from './mount.ts'
export type { DeepseekChatImportInjected, DeepseekChatImportOutcome, ImportSessionsActionProps } from './ImportSessions.tsx'
export type { DeepseekChatImportKey } from './locales.ts'

declare module '@gemini-agy/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Gemini Antigravity chat export import action and dialog copy. */
    deepseekChatImport: DeepseekChatImportKey
  }
}

/**
 * Mount the import action and its Remote methods.
 * @param ctx - browser plugin context.
 * @returns disposer joining UI and Remote withdrawal.
 */
export async function apply(ctx: Context): Promise<() => Promise<void>> {
  return await mountImport(ctx, remote)
}
