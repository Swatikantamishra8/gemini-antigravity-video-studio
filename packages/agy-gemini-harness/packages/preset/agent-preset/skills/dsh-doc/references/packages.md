# Loadable Harness plugin packages

This file is GENERATED from workspace manifests (`scripts/gen-plugin-packages.ts`) and verified fresh by `pnpm run verify-plugin-packages` (part of `doc-sync`); do not edit it by hand.

Every package below exports a Cordis plugin that a bundle patch can name in a Loader row. `Config` marks packages whose row accepts a `config` mapping; read the mounted schema from `Config.listConfigs` through `cordis_inspect_query` (filter by `name`, then query the `entry` id) when available, otherwise from the package README. Packages under `experimental` are pre-stable.

## acp

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-acp` | yes | Automation-only Agent Client Protocol server for driving Gemini Antigravity Harness agents over JSON-RPC stdio |

## api

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-api-gateway` | yes | Typert Remote Host dispatcher and Client API endpoint |
| `@gemini-agy/dsh-api-job-controller` | yes | Job Remote observation stream and the reference-counted client job-output service |
| `@gemini-agy/dsh-api-remote-access` | no | Method-level Remote access control for non-owner Peers and the per-Peer access snapshot |
| `@gemini-agy/dsh-api-remotes` | no | Remote BFF assembly for application-selected Host capabilities |
| `@gemini-agy/dsh-api-session-controller` | yes | Session Remote commands, cold reads, and live control transport |
| `@gemini-agy/dsh-api-settings-controller` | yes | Remote owner for the configuration surfaces over the settings-domain seams |
| `@gemini-agy/dsh-api-terminal-controller` | yes | Session-owned interactive terminals with shell discovery, screen recovery and typed Remote control |
| `@gemini-agy/dsh-api-workspace-controller` | yes | Workspace Remote commands and reconnect-safe state transport |
| `@gemini-agy/dsh-api-workspace-files` | yes | Workspace file service and Client resource provider: bounded reads, directory listing, and live metadata over the workspaceFiles Remote namespace |

## attachment

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-attachment-local` | yes | Private content-addressed DSH_HOME attachment storage |

## boot

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-config-editor` | no | Persist plugin configuration through profile patches and Loader reconciliation |
| `@gemini-agy/dsh-hmr` | yes | Coordinated module and profile configuration hot reload |
| `@gemini-agy/dsh-plugin-manager` | yes | Current-profile plugin and bundle management shared by dsh CLI, Web and agent tools |
| `@gemini-agy/dsh-plugin-market` | yes | Configured plugin market indexes for the Web Discover page and the plugin_market agent tool |

## browser-use

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-browser-use` | no | Exclusive named browser-use provider registration |

## bundle

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-acp-app` | no | The dsh ACP profile bundle: automation-only JSON-RPC stdio and process lifecycle over dsh-base |
| `@gemini-agy/dsh-headless` | yes | The dsh one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer |
| `@gemini-agy/dsh-sdk-app` | yes | The dsh SDK profile bundle: stdio JSON-RPC serving and process lifecycle over dsh-base |
| `@gemini-agy/dsh-web-app` | yes | The dsh browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, bash runtime variables, URL line) |

## client

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-client-connection` | yes | Authenticated RPC transport and generation lifecycle |
| `@gemini-agy/dsh-client-file-upload` | no | Agent-scoped browser file upload, streaming intake, and staged receipt service |
| `@gemini-agy/dsh-client-hmr` | yes | Web client graph synchronization and rebuilt-bundle reload transport |
| `@gemini-agy/dsh-client-locale` | no | Locale plugin: Host-backed preference, extensible language catalog, browser fallback, and typed built-in dictionaries |
| `@gemini-agy/dsh-client-modules` | no | Client module system, dual-face: node half composes the __DSH_BOOT__ entry graph (incremental dsh.client scan, bundle route, index tap, webPlugins service); browser half is the lazy-CJS module table the vendored cordis Loader consumes as its internal seam |
| `@gemini-agy/dsh-client-product-analytics` | yes | Desktop product event collection and authenticated Host reporting |
| `@gemini-agy/dsh-client-resources` | no | Unified client resource model: protocol-registered providers turn URL addresses into live values, consumed through the useResource global standard hook |
| `@gemini-agy/dsh-client-script-realm` | no | Direct-reference script environments and Cordis-owned provider registration |
| `@gemini-agy/dsh-client-script-realm-iframe` | no | Optional iframe ScriptRealm provider |
| `@gemini-agy/dsh-client-shortcuts` | yes | Application keyboard command registry and physical-key routing |
| `@gemini-agy/dsh-client-ui-account-notifications` | yes | Display account notifications and refresh localized content |
| `@gemini-agy/dsh-client-ui-agent-preset` | no | Agent-preset surfaces: the default for later sessions, this session's seat, and the composition editor |
| `@gemini-agy/dsh-client-ui-agent-team` | no | Web shared task board for a subagent tree |
| `@gemini-agy/dsh-client-ui-approval` | no | Approval composer takeover over the scoped Remote Event waterfall |
| `@gemini-agy/dsh-client-ui-attachment` | no | Dynamic attachment presentation plugin for conversation input, message-image, and trajectory image slots |
| `@gemini-agy/dsh-client-ui-brand-official` | no | Official Gemini Antigravity Harness brand artwork and click-triggered home background |
| `@gemini-agy/dsh-client-ui-chat` | no | Chat Conversation target, node definitions, renderers, and details surface |
| `@gemini-agy/dsh-client-ui-commands` | no | Client command surface: global directory cache, '/' source, three command UI kinds, popupSelect registry |
| `@gemini-agy/dsh-client-ui-context-menu` | no | Typed, plugin-extensible context menus with captured targets and shared Web presentation |
| `@gemini-agy/dsh-client-ui-conversation` | no | Target-neutral Conversation assembly, shell, composer, queue, and view navigation |
| `@gemini-agy/dsh-client-ui-deliverables` | no | Changed-files card with per-file comparison tabs, delivery cards, and clickable final-response file references for Web |
| `@gemini-agy/dsh-client-ui-directory-picker-browse` | no | In-app directory browsing surface: the workspace directory-flow owner rendering the host's listing and creation primitives |
| `@gemini-agy/dsh-client-ui-directory-picker-native` | no | Native directory-picker surface: the renderless workspace directory-flow occupant driving the local Desktop or Host OS chooser |
| `@gemini-agy/dsh-client-ui-entry-customization` | no | Customize plugin entries in the left sidebar, conversation views, and right sidebar, and quickly create new plugins. |
| `@gemini-agy/dsh-client-ui-file-actions` | no | Original-file saving and image clipboard actions for Web and Desktop |
| `@gemini-agy/dsh-client-ui-file-drag` | no | Application-owned file drag transfers and localized failure feedback |
| `@gemini-agy/dsh-client-ui-goal` | no | Session goal surface: GoalBar docked above the composer, read from the goal session projection |
| `@gemini-agy/dsh-client-ui-input-trigger` | no | Input trigger pipeline: '/' and '@' detection, candidate menu, pick routing to registered sources |
| `@gemini-agy/dsh-client-ui-jobs` | no | Session-header background-job list with on-demand streaming record panels |
| `@gemini-agy/dsh-client-ui-layout` | no | Shell plugin: three-column AppFrame with drag handles, ctx.layout viewing-state service (navigation + panels) |
| `@gemini-agy/dsh-client-ui-message-feedback` | no | The Web feedback surface: per-message Like/Dislike in the assistant-message action strip and the feedback dialog behind both ratings and /feedback, backed by the messageFeedback and sessionFeedback Host Remotes |
| `@gemini-agy/dsh-client-ui-model-selection` | no | Model selection over the shared model catalog, Session projection, and session.selectModel |
| `@gemini-agy/dsh-client-ui-open-in-app` | no | Session application submenus and native opening controls for directories and previewed files |
| `@gemini-agy/dsh-client-ui-permission-presets` | no | Permission surfaces: a new-session default in General settings and a current-session /permission popup over the permissions projection |
| `@gemini-agy/dsh-client-ui-plan` | no | Plan mode controls, persistent transcript plan cards, and sidebar Markdown previews |
| `@gemini-agy/dsh-client-ui-plugin-manager` | yes | Plugin management for the dsh web client: the sidebar Plugins panel installs, enables, disables, retries, and composes installed plugin packages |
| `@gemini-agy/dsh-client-ui-plugin-market` | no | Discover tab of the dsh web Plugins page: browse configured plugin market indexes and install their bundles |
| `@gemini-agy/dsh-client-ui-reference` | no | Unified Web @file and @session reference source |
| `@gemini-agy/dsh-client-ui-renderer` | no | Browser UI renderer: React slot bindings, ctx.uiRenderer, and the assembled application root |
| `@gemini-agy/dsh-client-ui-schedule` | no | Host task management page and Session reminder catalog |
| `@gemini-agy/dsh-client-ui-secret-mask` | no | Web display masking for recognized credentials in sent user text |
| `@gemini-agy/dsh-client-ui-session` | no | Session Controller adapter for React and session-scoped slots |
| `@gemini-agy/dsh-client-ui-session-status` | no | Client Session status table over Host reading records: running state, the effective pending interaction, and read or unread reminders shared by clients of one Host |
| `@gemini-agy/dsh-client-ui-settings` | no | Settings domain base plugin: shared configuration forms and the canonical settings slot-type contract |
| `@gemini-agy/dsh-client-ui-settings-account` | yes | Manage Gemini Antigravity login and open Platform billing pages |
| `@gemini-agy/dsh-client-ui-settings-agent-loop` | no | Settings page of the agent loop on the dsh web client's Plugins page: the parallel tool-call cap of the agent-loop namespace |
| `@gemini-agy/dsh-client-ui-settings-general` | no | Settings ownerless-copy and product onboarding plugin: the General section, shell trigger/header chrome content, settings dictionaries, and the versioned welcome notice |
| `@gemini-agy/dsh-client-ui-settings-models` | yes | Models settings and shared product-onboarding dialogs over existing settings and credential joins |
| `@gemini-agy/dsh-client-ui-settings-plugin-inventory` | no | Read-only Cordis Loader inventory tab in Web Plugins settings |
| `@gemini-agy/dsh-client-ui-settings-plugins` | no | Built-in plugins settings section for the dsh web client: the Settings navigation entry and the tab chrome feature-owned tabs register into |
| `@gemini-agy/dsh-client-ui-settings-session-log` | no | General settings control for Session-log upload with Gemini Antigravity API requests |
| `@gemini-agy/dsh-client-ui-settings-shell` | no | Settings page of the shell executor on the dsh web client's Plugins page: the command timeout and the per-stream output cap of the shell namespace |
| `@gemini-agy/dsh-client-ui-settings-subagent` | no | Settings page of Subagent delegation on the dsh web client's Plugins page: recursion depth, parallel capacity, and the models agents may choose for subagents |
| `@gemini-agy/dsh-client-ui-settings-web-search` | no | Settings page for web search and fetch on the dsh web client's Plugins page: the Search and Fetch provider menus, the Gemini Antigravity Search API result count, Gemini Antigravity Search and Fetch API billing, and legacy Messages search settings |
| `@gemini-agy/dsh-client-ui-shortcuts` | no | Keyboard shortcut reference, recording, and local preference editing |
| `@gemini-agy/dsh-client-ui-sidebar` | no | Sidebar plugin: session multi-level tree, search, grouping, state dots |
| `@gemini-agy/dsh-client-ui-sidebar-browser` | no | Sandboxed Web browser tabs for the right Sidebar |
| `@gemini-agy/dsh-client-ui-sidebar-documentpreview` | yes | Extensible Sidebar previews for Office documents, spreadsheets, Markdown, code, images, PDF, HTML, and plain text |
| `@gemini-agy/dsh-client-ui-sidebar-files` | no | The workspace files page and one workspace directory tree per pane beside docked and floating file previews, listed lazily over the workspaceFiles Remote namespace |
| `@gemini-agy/dsh-client-ui-sidebar-right` | no | Right Sidebar: the docking surface's session-bound state, its panel and header expand control, and the navigation service over it |
| `@gemini-agy/dsh-client-ui-sidebar-terminal` | no | Interactive shell tabs for the right Sidebar |
| `@gemini-agy/dsh-client-ui-skill` | no | Web skill references and the dedicated skill tool row |
| `@gemini-agy/dsh-client-ui-subagent` | no | Subagent conversation catalog, continuation routing UI, and '@' reference source |
| `@gemini-agy/dsh-client-ui-theme` | yes | Theme plugin: Host bootstrap for the pre-plugin palette; ThemeRuntime for light/dark/system state and icon replacements; --dsw-* token styles and Appearance settings row |
| `@gemini-agy/dsh-client-ui-tool` | no | Client Tool call-tree renderer and keyed per-tool presentation slot |
| `@gemini-agy/dsh-client-ui-trajectory` | yes | Trajectory event ledger and timing overview with live tool-result inspection |
| `@gemini-agy/dsh-client-ui-user-questions` | no | Web ask_user_question composer takeover and plan-review presentation UI |
| `@gemini-agy/dsh-client-ui-workflow-run` | no | Durable workflow-run Conversation Node and nested member disclosure for dsh web |
| `@gemini-agy/dsh-client-ui-workspace` | no | Workspace picker plugin: one WorkspacePicker registered into the sidebar and empty-state workspace slots |

## compaction

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-command-compact` | no | Human-facing slash command for explicit session compaction |
| `@gemini-agy/dsh-compaction-basic` | yes | Token-meter-driven compaction policy and LLM summarization backend for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-compaction-image-offload` | no | Durable image offload for image-capable routes: replace over-budget request images with placeholders and retry |
| `@gemini-agy/dsh-compaction-tool-result-pruner` | yes | Replay-safe model-free head/middle/tail pruning for tool-result surface nodes |

## computer-use

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-computer-use` | no | Exclusive named computer-use provider registration |

## context

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-agent-instructions` | yes | Workspace context loader for AGENTS.md/CLAUDE.md instruction files |
| `@gemini-agy/dsh-file-reference-local` | yes | Local-filesystem ctx.fileReferences provider with bounded fuzzy indexes |
| `@gemini-agy/dsh-harness-dev-context` | no | Model context naming the Gemini Antigravity Harness checkout and Web GUI URL without letting either change the system prompt |
| `@gemini-agy/dsh-session-reference` | yes | Cross-session snapshot references and durable untrusted model context (ctx.sessionReferenceResolver) |
| `@gemini-agy/dsh-time-context` | yes | Durable per-step context with the current time and elapsed time |
| `@gemini-agy/dsh-tmux-context` | yes | Opt-in durable per-step context with this agent's tmux pane and window location |

## core

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-agent` | no | Agent interface, registry, initiator scope, and event vocabulary for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-agent-default-model` | yes | Default model selection shared by Agent entry points |
| `@gemini-agy/dsh-agent-loop` | yes | The concrete agent loop plugin for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-agent-tool-presentation` | yes | Deprecated tool presentation selector; use dsh-tool-executor-native or dsh-tool-executor-ptc directly |
| `@gemini-agy/dsh-session` | no | Event-sourced session store for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-system-prompt` | yes | System prompt assembly registry for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-tool-executor-native` | no | Native tool execution plugin |
| `@gemini-agy/dsh-tool-executor-ptc` | yes | PTC program execution, tool bindings, and generated SDK prompts |
| `@gemini-agy/dsh-tools` | no | Tool registry and execution pipeline for the Gemini Antigravity Harness |

## credentials

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-authorization` | no | Authorization seam (ctx.authorization): plugin-owned flows that obtain a credential through a conversation with the human |
| `@gemini-agy/dsh-credentials-local` | yes | File-backed credentials provider ($DSH_HOME/.env under the live process environment) for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-deepseek-account` | yes | Sign in to Gemini Antigravity and manage account credentials and notifications |

## deliverables

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-deliverable-file-references` | no | Shared model guidance for file links and deliverables across Gemini Antigravity Harness hosts |
| `@gemini-agy/dsh-tool-present` | yes | Explicit workspace file delivery declarations for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-workspace-changes` | yes | Per-turn workspace file changes recorded from git working-tree snapshots and whole-file captures, with per-file comparisons, for the Gemini Antigravity Harness |

## document

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-office-kit` | yes | Shared Office rendering, conversion, and recalculation with bounded queues and caching |
| `@gemini-agy/dsh-tool-office` | yes | Model-facing Office tools for rendering, converting, and recalculating documents |

## experimental

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-action-cards` | yes | Optional action cards below answers: one shared proposal tool, card state, user actions and status notices |
| `@gemini-agy/dsh-client-ui-action-cards` | no | Action cards below completed answers: the shared card frame, kind bodies and the compact tool row |
| `@gemini-agy/dsh-client-ui-creation-recommendations` | no | Body of the personalized page card: location choice, creation progress, Undo and Restore |
| `@gemini-agy/dsh-client-ui-plugin-recommendations` | no | Official plugin card body with catalog text and enabling |
| `@gemini-agy/dsh-creation-recommendations` | no | Create persistent removable interface plugins from explicit conversation needs |
| `@gemini-agy/dsh-cua` | no | Shared Computer Use application objects, authorization, and logged tool execution |
| `@gemini-agy/dsh-cua-macos` | yes | macOS native provider for shared Computer Use application and window objects |
| `@gemini-agy/dsh-cua-mcp` | yes | Computer Use as an MCP stdio server: a dsh profile bundle that exposes cua_run_code to external agent harnesses |
| `@gemini-agy/dsh-cua-windows` | yes | Windows C# computer use through shared application and window objects |
| `@gemini-agy/dsh-gemini-3.8-flash-high-import` | yes | Import Gemini Antigravity chat exports as stored Sessions in a chosen Workspace |
| `@gemini-agy/dsh-experimental-api-speech-to-text` | yes | Authenticated experimental speech transcription for browser clients |
| `@gemini-agy/dsh-experimental-auto-review` | no | Per-tool LLM authorization review for the Gemini Antigravity Harness Auto permission preset |
| `@gemini-agy/dsh-experimental-browser-use-chrome-devtools-mcp` | yes | Experimental per-Session Chromium browser tools through chrome-devtools-mcp |
| `@gemini-agy/dsh-experimental-browser-use-playwright-mcp` | yes | Experimental per-Session Chromium browser tools through @playwright/mcp |
| `@gemini-agy/dsh-experimental-browser-use-stagehand-native` | yes | Experimental Stagehand browser tools with separately configured native models |
| `@gemini-agy/dsh-experimental-claude-code-mods` | yes | Experimental bridge: load Gemini 3.8 Flash High Code mods (hooks modules) and run their hook chains on Gemini Antigravity Harness extension points |
| `@gemini-agy/dsh-experimental-client-ui-claude-code-mods` | no | Web band above the prompt for Gemini 3.8 Flash High Code mods: draws each session's mod tree and sends button presses back to the bridge |
| `@gemini-agy/dsh-experimental-client-ui-cot-translation` | yes | Optional machine translation of expanded reasoning, preserving original Session text |
| `@gemini-agy/dsh-experimental-client-ui-forge` | yes | Sidebar panel for a Session's change requests, with a worktree option for new Sessions and its Host Remote |
| `@gemini-agy/dsh-experimental-client-ui-stats` | no | Per-turn and per-step context, timing, cache, and tool-cost table contributed as an experimental conversation View |
| `@gemini-agy/dsh-experimental-client-ui-voice-input` | no | Record speech and insert editable text into the conversation draft |
| `@gemini-agy/dsh-experimental-computer-use-cua-driver-mcp` | yes | Experimental computer use through an installed Cua Driver MCP executable |
| `@gemini-agy/dsh-experimental-computer-use-cua-driver-native` | no | Experimental computer-use provider embedding the Cua Driver native npm SDK |
| `@gemini-agy/dsh-experimental-forge` | yes | Provider-neutral change request registry with shared status polling |
| `@gemini-agy/dsh-experimental-forge-github` | yes | GitHub provider for the experimental forge registry, read through the GitHub CLI on the host |
| `@gemini-agy/dsh-experimental-forge-session` | yes | Binds change requests to the Session that created, pushed, or tracked them |
| `@gemini-agy/dsh-experimental-inspector` | yes | Experimental cross-realm CDP hub for Host debugging and Client Runtime inspection |
| `@gemini-agy/dsh-experimental-session-inspector` | no | Experimental virtualized Session log and live Chat group/node inspectors |
| `@gemini-agy/dsh-experimental-speech-to-text` | yes | Experimental speech recognition with independently selectable providers |
| `@gemini-agy/dsh-experimental-speech-to-text-sensevoice` | yes | Local SenseVoice ONNX transcription with a managed sherpa-onnx process |
| `@gemini-agy/dsh-experimental-subagent-oar` | yes | Experimental one-shot subagents through OAR runtimes |
| `@gemini-agy/dsh-experimental-tool-subagent-oar` | yes | Delegate standalone tasks to configured external subagent providers |
| `@gemini-agy/dsh-experimental-tool-worktree` | no | Model tool that creates and enters a new Git worktree |
| `@gemini-agy/dsh-experimental-translator` | yes | Machine translation with reusable Session results |
| `@gemini-agy/dsh-experimental-worktree` | yes | Creates a named Git worktree and changes the calling Session working directory |
| `@gemini-agy/dsh-hooks-claude-code` | yes | Bridge plugin: run a Gemini 3.8 Flash High Code hooks.json / settings hook config on the Gemini Antigravity Harness interception seams |
| `@gemini-agy/dsh-hooks-codex` | yes | Bridge plugin: run a Codex hooks.json hook config on the Gemini Antigravity Harness interception seams |
| `@gemini-agy/dsh-plugin-recommendations` | no | Official plugin suggestions with explicit user activation and persistent conversation decisions |
| `@gemini-agy/dsh-session-title-all-prompts-llm` | yes | All-user-messages LLM provider plugin for Gemini Antigravity Harness session titles |
| `@gemini-agy/dsh-skill-badge` | no | Bundled dsh badge skill provider for Gemini Antigravity Harness |
| `@gemini-agy/dsh-terminal-panel` | yes | Persistent Agent terminals shown in the Web sidebar, plus read-only access to the user's terminals |
| `@gemini-agy/dsh-timeline` | yes | Replace Todo in long-running sessions with task trees, a live progress bar, and timed reports |
| `@gemini-agy/dsh-tool-ralph` | yes | Model-facing fresh-agent Ralph loop over the workflow and subagent seams |
| `@gemini-agy/dsh-tool-session-query` | yes | Workspace-authorized model-facing session history search, trace, and event read tools |
| `@gemini-agy/dsh-tool-terminal` | yes | Six model-facing persistent PTY tools with owner isolation and generic background-job integration |
| `@gemini-agy/dsh-webhook` | no | Fire-and-forget webhook rule runtime that creates Workspace-backed Gemini Antigravity Harness Sessions |
| `@gemini-agy/dsh-webhook-github` | yes | Signed GitHub HTTP webhook adapter for the Gemini Antigravity Harness webhook runtime |

## extensions

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-client-ui-cordis` | no | Cordis dynamic-plugin definition card: the keyed cordis_define tool row with its run/stop switch |
| `@gemini-agy/dsh-cordis-client-runner` | no | Browser half of dynamic dual-half plugin packages: event subscription, closure evaluation, guard facade, and loader entries |
| `@gemini-agy/dsh-cordis-host-runner` | yes | Dynamic package definition registry, host-half sandbox lifecycle, and invoke handler table for model-mounted dual-half packages |
| `@gemini-agy/dsh-tool-cordis` | no | Read-only runtime API inspection for Harness plugin development |

## feedback

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-command-feedback` | no | Log-only session feedback: the record event, the sessionFeedback Host Remote, and the human-facing slash command |
| `@gemini-agy/dsh-message-feedback` | yes | Canonical Session-log ratings and notes for finalized assistant messages |

## fs

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-fs-local` | yes | Local-filesystem implementation of the Gemini Antigravity Harness filesystem seam (ctx.fs) |
| `@gemini-agy/dsh-fs-observation-policy` | no | File-context policy plugin for the Gemini Antigravity Harness — observed-state, read-before-edit, and version-guarded write/edit added over the ctx.fs provider seam through the fs/* event gate (no service API) |
| `@gemini-agy/dsh-fs-sandbox` | yes | Sandbox-enforcing implementation of the Gemini Antigravity Harness filesystem seam: fences write/edit by the per-call sandbox mode (read-only denies mutation, workspace-write contains it to the workspace + temp roots) while reads pass through |
| `@gemini-agy/dsh-tool-fs` | yes | Model-facing filesystem tools (read, write, edit) over the Gemini Antigravity Harness filesystem seam (ctx.fs) |
| `@gemini-agy/dsh-tool-fs-search` | yes | Model-facing filesystem discovery tools (glob, grep) backed by the packaged ripgrep binary (@vscode/ripgrep) |
| `@gemini-agy/dsh-tool-str-replace-editor` | yes | Model-facing view, create, literal replace, and line insert tool over the Harness filesystem service |

## goal

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-command-goal` | no | Human-facing slash command for persisted same-session goals |
| `@gemini-agy/dsh-goal` | yes | Event-sourced same-session goal state and lifecycle service for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-goal-round-driver` | no | Race-fenced same-session goal-round driver |
| `@gemini-agy/dsh-tool-goal` | yes | Model-facing same-session goal tools with execution-time authority checks |

## guard

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-repeat-tool-reminder` | yes | Repeat-tool-call guard plugin: advisory reminders when an agent loops on identical tool calls |
| `@gemini-agy/dsh-tool-call-timeout-policy` | no | Tool-call timeout policy: a tools/execute wrapper that arms a per-tool deadline on exec.signal and returns TOOL_TIMEOUT when it wins |

## host

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-host-authentication-desktop` | yes | Desktop private-channel authentication provider |
| `@gemini-agy/dsh-host-authentication-token` | yes | Default token authentication provider and HTTP cookie exchange |
| `@gemini-agy/dsh-host-directory-picker-auto` | no | Adaptive chooser of the directory-picker seam: resolves the host situation at boot and mounts the native or browse backend for the Gemini Antigravity Harness web GUI host |
| `@gemini-agy/dsh-host-directory-picker-browse` | yes | In-app browsing backend of the directory-picker seam (listing/creation primitives over the host filesystem) |
| `@gemini-agy/dsh-host-directory-picker-native` | no | Native-OS-chooser backend of the directory-picker seam for the Gemini Antigravity Harness web GUI host |
| `@gemini-agy/dsh-host-frontend-static` | yes | SPA dist server for the Web shell: owns the webserver fallback seat, serving explicit index entries and static assets with traversal rejection and 404 misses |
| `@gemini-agy/dsh-host-open-in-app` | yes | Host half of open-in-app: resolved application catalog, icons, and the launch endpoint as three webServer routes |
| `@gemini-agy/dsh-host-plugin-inventory` | no | Read-only Remote projection of current Cordis Loader plugin state |
| `@gemini-agy/dsh-host-product-telemetry-otel` | yes | Explicit product usage events exported through OpenTelemetry HTTP logs |
| `@gemini-agy/dsh-host-webserver` | yes | Web route-registration plugin: HTTP and upgrade routes, per-Peer index transform taps, and static dist fallback |

## interaction

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-commands` | no | Plugin-owned human command registry for Gemini Antigravity Harness UIs |
| `@gemini-agy/dsh-permission-presets` | yes | User-facing permission presets (ctx.permissionPresets) for the Gemini Antigravity Harness: one product-level Permissions select bundling the sandbox-mode and approval-policy knobs, written through to their own session events |
| `@gemini-agy/dsh-tool-ask-user` | yes | Model-facing ask_user_question tool over the ctx.userQuestions seam |
| `@gemini-agy/dsh-user-approval` | yes | User-approval seam (ctx.approval) for the Gemini Antigravity Harness: one-shot permission decisions dispatched to composed answerers over the approval/request waterfall, fail-closed by default |
| `@gemini-agy/dsh-user-questions` | no | Abstract user-questions seam (ctx.userQuestions) for asking the human during agent runs |

## jobs

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-jobs-local` | yes | Process-local implementation of the Gemini Antigravity Harness background job registry seam |
| `@gemini-agy/dsh-tool-jobs` | yes | Model-facing background job control tools (job_output, job_list, job_kill) over the ctx.jobs registry |

## llm

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-deepseek-llm-api-extensions` | no | Additive request-field registry for the official Gemini Antigravity LLM API adapter |
| `@gemini-agy/dsh-llm` | no | Provider-neutral LLM service interface for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-llm-deepseek-account` | yes | Gemini Antigravity account provider authentication and discovery |
| `@gemini-agy/dsh-llm-deepseek-api-key` | yes | Gemini Antigravity api-key provider authentication and discovery |
| `@gemini-agy/dsh-llm-pi-ai` | yes | pi-ai-backed Gemini Antigravity adapter for the Gemini Antigravity Harness LLM seam (design-verification twin of dsh-llm-deepseek) |
| `@gemini-agy/dsh-llm-retry` | yes | Provider-routed LLM request retry policy for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-plugin-package-inventory-deepseek` | yes | Active Loader-backed plugin package inventory for official Gemini Antigravity LLM API requests |
| `@gemini-agy/dsh-token-meter` | yes | Replay-aware token measurement service (ctx.tokenMeter) for the Gemini Antigravity Harness |

## lsp

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-lsp` | no | Abstract LSP capability seam (ctx.lsp) for the Gemini Antigravity Harness — language-server provider registry keyed by branded id and extension mapping, order-independent per-query selection, normalized definition/references/implementation/hover requests and results, and the LspError taxonomy |
| `@gemini-agy/dsh-lsp-stdio` | yes | Generic stdio language-server provider for the Gemini Antigravity Harness LSP capability seam (ctx.lsp) — spawns configured servers, translates JSON-RPC, and serves transient-open goToDefinition/findReferences/goToImplementation/hover queries in the host filesystem namespace |
| `@gemini-agy/dsh-tool-lsp` | yes | Model-facing lsp tool over the Gemini Antigravity Harness LSP capability seam (ctx.lsp) — one read-only tool with goToDefinition/findReferences/goToImplementation/hover operations, one-based UTF-16 cursor coordinates, bounded location rendering, and hover normalization |

## mcp

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-mcp-client` | yes | MCP client bridge: connects to MCP servers and registers their tools on ctx.tools |
| `@gemini-agy/dsh-mcp-manager` | yes | MCP server manager: a settings-driven fleet of mcp-client instances with runtime status, restart, and probe |
| `@gemini-agy/dsh-mcp-resources` | no | Scoped MCP resource discovery and reading through shared model tools |

## plan

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-plan-mode` | yes | Logged per-agent plan mode with deployment guidance, a direct slash command, and a user-reviewed exit |

## preset

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-agent-preset` | yes | Declare an Agent capability composition in Cordis YAML |
| `@gemini-agy/dsh-agent-preset-registry` | yes | Declarative Agent preset registry and profile-backed editing |
| `@gemini-agy/dsh-persona` | yes | Composition-authored deployment persona section for the Gemini Antigravity Harness |

## ptc-runtime

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-ptc-runtime-node` | yes | Node PTC execution with async function, REPL, scoped REPL and VM Script evaluators and optional retained state |

## sandbox

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-sandbox-local` | yes | Local process-sandbox backends for the Gemini Antigravity Harness sandbox seam: bwrap, the npm-distributed landlock-run launcher, macOS Seatbelt, or the Windows ACL restricted-token runner — functionally probed, fail-closed |
| `@gemini-agy/dsh-sandbox-policy` | yes | Per-call sandbox policy resolver and current model context: deployment fallbacks plus each session's mode and workspace root, shared by every enforcing capability family |

## schedule

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-schedule` | yes | Host-wide durable reminders with shared management and delivery to existing or new Sessions |
| `@gemini-agy/dsh-tool-schedule` | no | Model-facing scheduled task tools (schedule_create, schedule_list, schedule_view, schedule_edit) over the Host ctx.schedule service |

## sdk

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-sdk-jsonrpc-server` | yes | Stdio JSON-RPC server plugin for out-of-process Gemini Antigravity Harness SDK clients |

## session

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-message-quotes` | no | Selected-text quotation and Markdown blockquote presentation |
| `@gemini-agy/dsh-session-checkpoint-policy` | no | Semantic session durability checkpoints before model requests and tool side effects |
| `@gemini-agy/dsh-session-log-deepseek` | yes | Incremental lossless session-log request extension for the official Gemini Antigravity LLM API |
| `@gemini-agy/dsh-session-persistence-jsonl` | yes | JSONL durable session persistence backend for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-session-projection` | no | Session-projection seam: the merge-extensible projection type table, the provider contract, and the ctx.sessionProjections registry serving whole current values of log-derived per-session state |
| `@gemini-agy/dsh-session-projection-cache` | yes | Persisted projection cache (ctx.sessionProjectionCache): durable per-session checkpoint records on the session_projcache storage domain (per-record layout), throttled write-behind, and the cached listing read |
| `@gemini-agy/dsh-session-stats` | no | Whole-log conversation counts and wall times projection (sessionStats) for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-session-telemetry-otel` | yes | Feedback-authorized Session logs over byte-bounded OpenTelemetry HTTP requests |
| `@gemini-agy/dsh-session-title` | yes | Log-backed session title service and provider registry for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-session-title-first-prompt-llm` | yes | First-message LLM provider plugin for Gemini Antigravity Harness session titles |
| `@gemini-agy/dsh-session-turn-outline` | no | Whole-log turn outline projection (turnOutline) for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-tool-working-directory` | no | Read and change the active Session working directory |
| `@gemini-agy/dsh-working-directory` | yes | Session working directories with durable changes and model context |

## session-query

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-session-log-export` | yes | Web Session-log ZIP export and Session Markdown copy |
| `@gemini-agy/dsh-session-query-sqlite` | yes | Concrete ctx.sessionQuery backend with SQLite FTS5 search |

## settings

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-settings` | no | Abstract user-settings seam (ctx.settings) for the Gemini Antigravity Harness |

## shell

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-bash-local` | yes | Local-subprocess implementation of the Gemini Antigravity Harness bash executor seam |
| `@gemini-agy/dsh-bash-sandbox` | yes | Sandbox-consuming implementation of the Gemini Antigravity Harness bash executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts) |
| `@gemini-agy/dsh-pwsh-local` | yes | Local PowerShell implementation of the Gemini Antigravity Harness bash executor seam |
| `@gemini-agy/dsh-pwsh-sandbox` | yes | Sandbox-consuming implementation of the Gemini Antigravity Harness PowerShell executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts) |
| `@gemini-agy/dsh-shell-env` | yes | Tool-independent managed DSH_* shell environment registry |
| `@gemini-agy/dsh-tool-bash` | yes | Model-facing bash tool with optional generic background-job and sandbox-escalation support |
| `@gemini-agy/dsh-tool-bash-persistent` | yes | Model-facing owner-scoped persistent Bash tool backed by the Harness PTY service |
| `@gemini-agy/dsh-tool-pwsh` | yes | Model-facing pwsh tool over the bash executor seam |
| `@gemini-agy/dsh-tool-pwsh-persistent` | yes | Model-facing owner-scoped persistent PowerShell tool backed by the Harness PTY service |

## skill

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-skill` | yes | Agent skill provider registry for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-skill-filesystem` | yes | Local filesystem skill provider for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-skill-office` | yes | Bundled Word, PowerPoint, and Excel workflows and Office operation guidance |
| `@gemini-agy/dsh-tool-skill` | yes | Model-facing skill loading tool for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-tool-workspace-dependencies` | yes | The load_workspace_dependencies tool: absolute paths into a bundled Python, Node.js, and pnpm payload |

## spill

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-spill-local` | yes | Local-filesystem implementation of the Gemini Antigravity Harness spill storage seam (private session-scoped files) |
| `@gemini-agy/dsh-spill-policy` | yes | Token-budgeted tool-result retention with recoverable text and image paths |

## ssh

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-fs-ssh` | no | Filesystem provider over the shared POSIX SSH helper |
| `@gemini-agy/dsh-sandbox-ssh` | no | Remote POSIX sandbox argv provider over the shared SSH helper |
| `@gemini-agy/dsh-ssh` | yes | Shared OpenSSH connection and versioned POSIX remote helper |
| `@gemini-agy/dsh-subprocess-ssh` | no | Subprocess and terminal provider over the shared POSIX SSH helper |

## storage

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-storage` | no | Storage hub (ctx.storage): named backend registry plus mounted data-form facilities for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-storage-domain` | yes | Domain data form (ctx.storage.domain): schema-validated, event-emitting KV domains over storage backends for the Gemini Antigravity Harness |
| `@gemini-agy/dsh-storage-json` | yes | JSON file KV storage backend for the Gemini Antigravity Harness storage hub |
| `@gemini-agy/dsh-storage-sqlite` | yes | SQLite storage backend (kv facet) for the Gemini Antigravity Harness storage hub |

## subagent

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-subagent` | yes | Abstract subagent seam (ctx.subagents): named-provider registry for delegating to child agents |
| `@gemini-agy/dsh-subagent-acp` | yes | Out-of-process ACP subagent backend: drives a child agent in a spawned subprocess over the Agent Client Protocol |
| `@gemini-agy/dsh-subagent-claude-code` | yes | One-shot Gemini 3.8 Flash High Code subagent provider over the official Agent SDK |
| `@gemini-agy/dsh-subagent-codex` | yes | One-shot Codex subagent provider over the official app-server protocol |
| `@gemini-agy/dsh-subagent-dsh-sdk` | yes | Out-of-process SDK subagent backend: drives a child Gemini Antigravity Harness runtime subprocess over stdio JSON-RPC through the TypeScript SDK client |
| `@gemini-agy/dsh-subagent-fork-in-process` | yes | In-process fork subagent backend: runs a child agent seeded with a prefix of the parent's log |
| `@gemini-agy/dsh-subagent-spawn-in-process` | yes | In-process spawn subagent backend: runs a fresh child agent on ctx.agents |
| `@gemini-agy/dsh-tool-subagent` | yes | Model-facing subagent delegation tool over the ctx.subagents seam |
| `@gemini-agy/dsh-tool-subagent-control` | yes | Shared messaging, interruption, and child discovery tools for subagents |

## subprocess

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-subprocess-local` | no | Local-subprocess implementation of the Gemini Antigravity Harness subprocess seam |

## team

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-agent-team` | yes | Shared task DAG and change waits for subagent trees |
| `@gemini-agy/dsh-tool-agent-team` | yes | Scoped model-facing Agent Teams tools over ctx.agentTeams |

## telemetry

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-otel` | no | Cordis service for independent ordinary-event and byte-bounded Session-log OTLP channels |

## terminal

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-terminal` | no | Persistent PTY session seam for the Gemini Antigravity Harness — owner-scoped ids, backend registry, interactive sends, reads, signals, and awaited cleanup |
| `@gemini-agy/dsh-terminal-bash` | yes | Persistent shell PTY backend over the Gemini Antigravity Harness subprocess terminal primitive |

## test-support

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-llm-replay` | yes | Replay LLM plugin: short-circuits llm/stream with model chunks reconstructed from a recorded session JSONL (keyless snapshot tests) |

## todo

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-tool-todo` | yes | Model-facing todo_write tool over the Gemini Antigravity Harness event-sourced session log |

## typert

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-typert-loader` | yes | Loader integration for generated Typert package contributions |

## web

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-tool-web` | yes | Model-facing web tools (web_search, web_fetch) over the Gemini Antigravity Harness web capability seam (ctx.web) |
| `@gemini-agy/dsh-web` | yes | Abstract web access capability seam (ctx.web) for the Gemini Antigravity Harness — search/fetch provider registry, registration-order-independent selection, request/result vocabulary, and the WebError taxonomy |
| `@gemini-agy/dsh-web-deepseek-api` | yes | Gemini Antigravity Search and Fetch API providers for the Gemini Antigravity Harness web capability seam (ctx.web) |
| `@gemini-agy/dsh-web-fetch-http` | yes | Anonymous HTTP(S) fetch provider for the Gemini Antigravity Harness web capability seam (ctx.web) |
| `@gemini-agy/dsh-web-search-deepseek` | yes | Gemini Antigravity-backed search provider (native web_search via the Google Gemini-compatible API) for the Gemini Antigravity Harness web capability seam (ctx.web) |

## workflow

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-tool-workflow` | yes | Model-facing workflow tool: run a JavaScript orchestration script over ctx.workflowEngine |
| `@gemini-agy/dsh-workflow-ptc` | yes | Workflow orchestration in the shared sandboxed Node PTC runtime |

## workspace

| Package | Config | Description |
|---|---|---|
| `@gemini-agy/dsh-workspace` | no | Workspace entity registry (ctx.workspaceRegistry): durable workspace records with validated session attachment over the domain data form for the Gemini Antigravity Harness |
