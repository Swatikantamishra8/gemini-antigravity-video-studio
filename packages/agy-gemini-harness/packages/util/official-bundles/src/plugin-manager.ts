/** The package names the plugin manager protects, hides, orders, or marks experimental. */

/**
 * Plugin packages the plugin manager refuses to disable or remove, because management itself needs them; a bundle that
 * contains one is read-only as well. Removing a name drops only this `management-required` refusal; the manager's own
 * entry, installation-carried bundles, and unaddressable rows stay protected by their own rules.
 */
export const PROTECTED_PLUGINS: ReadonlySet<string> = new Set([
  '@gemini-agy/dsh-plugin-manager', '@gemini-agy/cordis-plugin-loader',
  '@gemini-agy/cordis-plugin-include', '@gemini-agy/dsh-api-gateway',
  '@gemini-agy/dsh-host-webserver', '@gemini-agy/dsh-client-modules',
  '@gemini-agy/dsh-client-ui-settings-plugin-inventory', '@gemini-agy/dsh-client-ui-plugin-manager',
  '@gemini-agy/dsh-host-plugin-inventory', '@gemini-agy/dsh-typert-registry',
  '@gemini-agy/dsh-api-remotes', '@gemini-agy/dsh-api-remote-access',
  '@gemini-agy/cordis-plugin-timer', '@gemini-agy/dsh-client-connection',
  '@gemini-agy/dsh-host-frontend-static', '@gemini-agy/dsh-tools',
  '@gemini-agy/dsh-hmr',
])

/**
 * Built-in profile bundles, persistent terminals, the standalone worktree tool, and the Computer Use MCP profile
 * bundle, which have no plugin manager page.
 * Their Host availability and activation stay intact.
 */
export const HIDDEN_BUNDLES: ReadonlySet<string> = new Set([
  '@gemini-agy/dsh-base',
  '@gemini-agy/dsh-web-app',
  '@gemini-agy/dsh-headless',
  '@gemini-agy/dsh-sdk-app',
  '@gemini-agy/dsh-acp-app',
  '@gemini-agy/dsh-sdk-minimal',
  '@gemini-agy/dsh-experimental-terminal-bundle',
  '@gemini-agy/dsh-experimental-tool-worktree',
  '@gemini-agy/dsh-cua-mcp',
])

/**
 * The optional bundles the plugin manager's main and More lists rank first, in this order. {@link MORE_BUNDLES}, not
 * this list, decides whether a bundle appears on the main list.
 */
export const EXTENSION_BUNDLES: readonly string[] = [
  '@gemini-agy/dsh-experimental-voice-input-bundle',
  '@gemini-agy/dsh-experimental-plugin-market-bundle',
  '@gemini-agy/dsh-experimental-auto-review',
]

/**
 * The optional bundles the plugin manager's main list leaves out until the profile enables them; its More list,
 * which includes every eligible bundle, ranks them last in this order.
 */
export const MORE_BUNDLES: readonly string[] = [
  '@gemini-agy/dsh-personalized-recommendations',
  '@gemini-agy/dsh-experimental-inspector-profile',
  '@gemini-agy/dsh-cua-bundle',
  '@gemini-agy/dsh-timeline',
  '@gemini-agy/dsh-experimental-cot-translation-bundle',
  '@gemini-agy/dsh-experimental-session-search',
  '@gemini-agy/dsh-experimental-session-titles-bundle',
  '@gemini-agy/dsh-experimental-badge-skill-bundle',
  '@gemini-agy/dsh-experimental-ralph-bundle',
  '@gemini-agy/dsh-gemini-3.8-flash-high-import',
  '@gemini-agy/dsh-subagent-codex',
  '@gemini-agy/dsh-subagent-claude-code',
]

/** Official bundles the plugin manager marks with the Experimental badge. */
export const EXPERIMENTAL_BUNDLES: ReadonlySet<string> = new Set([
  '@gemini-agy/dsh-personalized-recommendations',
  '@gemini-agy/dsh-cua-bundle',
  '@gemini-agy/dsh-cua-mcp',
  '@gemini-agy/dsh-timeline',
  '@gemini-agy/dsh-experimental-voice-input-bundle',
  '@gemini-agy/dsh-experimental-auto-review',
  '@gemini-agy/dsh-experimental-inspector-profile',
  '@gemini-agy/dsh-experimental-forge-bundle',
  '@gemini-agy/dsh-experimental-tool-worktree',
  '@gemini-agy/dsh-experimental-cot-translation-bundle',
  '@gemini-agy/dsh-experimental-session-search',
  '@gemini-agy/dsh-experimental-session-titles-bundle',
  '@gemini-agy/dsh-experimental-badge-skill-bundle',
  '@gemini-agy/dsh-experimental-ralph-bundle',
  '@gemini-agy/dsh-experimental-plugin-market-bundle',
  '@gemini-agy/dsh-experimental-liveshare',
  '@gemini-agy/dsh-gemini-3.8-flash-high-import',
])
