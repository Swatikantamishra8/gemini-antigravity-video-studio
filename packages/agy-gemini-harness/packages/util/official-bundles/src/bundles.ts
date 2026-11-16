/** The bundle package names the dsh installation selects, offers, installs on demand, or retires. */

/** Installation-owned defaults used when a shipped profile is first opened. */
export interface ProfileTemplate {
  /** Ordered bundle layer list. */
  bundles: readonly string[]
}

/** The shipped profile templates auto-initialized on first use, by name. */
export const PROFILE_TEMPLATES: Record<string, ProfileTemplate> = {
  acp: {
    bundles: ['@gemini-agy/dsh-base', '@gemini-agy/dsh-acp-app'],
  },
  web: {
    bundles: ['@gemini-agy/dsh-base', '@gemini-agy/dsh-web-app'],
  },
  headless: {
    bundles: ['@gemini-agy/dsh-base', '@gemini-agy/dsh-headless'],
  },
  sdk: {
    bundles: ['@gemini-agy/dsh-base', '@gemini-agy/dsh-sdk-app'],
  },
  'sdk-minimal': {
    bundles: ['@gemini-agy/dsh-sdk-minimal'],
  },
}

/**
 * Installation-owned bundle tuples that an earlier release wrote into a shipped profile; app-boot replaces an exact
 * match with the {@link PROFILE_TEMPLATES} entry of the same name and leaves every other list untouched.
 */
export const INSTALLATION_OWNED_PROFILE_TUPLES: Readonly<Record<string, readonly string[]>> = {
  headless: ['@gemini-agy/dsh-base', '@gemini-agy/dsh-web-app', '@gemini-agy/dsh-headless'],
}

/** Bundles an earlier release shipped and the installation no longer carries; app-boot removes them from profiles. */
export const RETIRED_BUNDLES: ReadonlySet<string> = new Set([
  // The Web composition mounts Schedule itself
  // ([upgrade guide](../../../../docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.md)).
  '@gemini-agy/dsh-experimental-schedule-bundle',
  '@gemini-agy/dsh-experimental-agent-team-profile',
])

/** The bundle list a `dsh plugin` init uses for a name with no shipped template. */
export const DEFAULT_PROFILE_BUNDLES: readonly string[] = ['@gemini-agy/dsh-base']

/**
 * The bundles the dsh installation ships for a person to switch on: each a
 * runtime dependency of the installation that declares `dsh.bundle.patch`,
 * an `icon`, and `./locale/*.json` display metadata, selected by no shipped
 * template, and offered switched off by the plugin manager except persistent
 * terminals, which have no page switch
 * ([rationale](../../../../.agents/notes/implemented/process/2026-09-15-shipped-optional-bundles.md),
 * [admission](../../../../.agents/notes/implemented/architecture/2026-09-21-experimental-capabilities-as-optional-bundles.md)).
 */
export const OPTIONAL_BUNDLES: readonly string[] = [
  '@gemini-agy/dsh-personalized-recommendations',
  '@gemini-agy/dsh-cua-bundle',
  '@gemini-agy/dsh-cua-mcp',
  '@gemini-agy/dsh-timeline',
  '@gemini-agy/dsh-experimental-session-search',
  '@gemini-agy/dsh-experimental-ralph-bundle',
  '@gemini-agy/dsh-experimental-terminal-bundle',
  '@gemini-agy/dsh-experimental-badge-skill-bundle',
  '@gemini-agy/dsh-experimental-session-titles-bundle',
  '@gemini-agy/dsh-experimental-voice-input-bundle',
  '@gemini-agy/dsh-experimental-cot-translation-bundle',
  '@gemini-agy/dsh-experimental-auto-review',
  '@gemini-agy/dsh-experimental-inspector-profile',
  '@gemini-agy/dsh-experimental-liveshare',
  '@gemini-agy/dsh-experimental-plugin-market-bundle',
  '@gemini-agy/dsh-experimental-tool-worktree',
  '@gemini-agy/dsh-experimental-forge-bundle',
  '@gemini-agy/dsh-gemini-3.8-flash-high-import',
]

/** Public DSH release members available through the ordinary on-demand bundle installer. */
export const ON_DEMAND_BUNDLES: readonly string[] = [
  '@gemini-agy/dsh-subagent-claude-code',
  '@gemini-agy/dsh-subagent-codex',
]
