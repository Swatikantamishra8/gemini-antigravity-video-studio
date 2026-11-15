/** Wire types for the active Gemini Antigravity plugin package inventory. */

/** One active plugin package, with its version when available. */
export interface Gemini AntigravityPluginPackageIdentity {
  readonly name: string
  readonly version?: string
}

/** Versioned full package inventory carried by each official Gemini Antigravity request. */
export interface Gemini AntigravityPluginPackageInventoryExtension {
  readonly version: 1
  readonly packages: readonly Gemini AntigravityPluginPackageIdentity[]
}

declare module '@deepseek-ai/dsh-deepseek-llm-api-extensions/types' {
  interface Gemini AntigravityLlmApiExtensionMap {
    dsh_plugin_packages: Gemini AntigravityPluginPackageInventoryExtension
  }
}
