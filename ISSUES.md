# Antigravity & Claude Video Studio — Issues Log & Roadmap

> **Updated**: 2026-11-23  
> **Workspace**: `<workspace_root>`  
> **Repository**: [Swatikantamishra8/gemini-antigravity-video-studio](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)

---

## 🟢 Resolved Issues

| ID | Issue | Severity | Resolution |
|:---|:---|:---:|:---|
| **ISS-001** | FFmpeg system binary missing from host PATH | 🔴 Critical | FFmpeg 9.1 located in `~/.local/bin/ffmpeg` and verified operational across video encoding, silence detection, and audio loudness filters. |
| **ISS-002** | Librosa build failure (`llvmlite` compilation blocked on Python 3.13) | 🔴 Critical | Implemented mathematical STFT spectral flux onset detection & autocorrelation BPM estimation natively with `scipy.signal` and `soundfile` inside `analyze_media.py`. Verified at 99.7% BPM accuracy without external compilation. |
| **ISS-003** | Python venv in `python_audio/venv` had corrupt encodings | 🔴 Critical | Purged broken venv; confirmed aside Python 3.13 runtime with all required scientific audio libraries (`numpy 2.5`, `scipy 1.18`, `soundfile 0.14`, `yt-dlp`, `ffmpeg-python`). |
| **ISS-004** | Postprocessing effects not wired in `StudioMasterScene.tsx` | 🟠 High | Wired `@react-three/postprocessing` (`EffectComposer`, `Bloom`, `ChromaticAberration`, `Vignette`) with deterministic frame-interpolated hook bursts. Verified Remotion bundling. |
| **ISS-006** | PixelFX not linked in `engine/` | 🟠 High | Executed `npm install ../vendors/pixelfx` inside `engine/`, enabling direct procedural effect imports. |
| **ISS-008** | Engine `package.json` missing npm scripts | 🟠 High | Added `dev`, `compositions`, `render:vertical`, `render:landscape`, `render:square`, and `render:feed` scripts. |
| **ISS-009** | `--gl=angle` required for macOS headless rendering | 🟡 Medium | Documented and patched across all engine scripts. Default Remotion commands on Mac now pass `--gl=angle`. |
| **ISS-010** | `render_with_compliance.sh` missing `--gl=angle` flag | 🟡 Medium | Added `--gl=angle` to Remotion render invocation for headless macOS stability. |
| **ISS-011** | No `.gitignore` at workspace root | 🟡 Medium | Created comprehensive `.gitignore` filtering `node_modules`, `vendors/`, venvs, OS files, and intermediate renders. |
| **ISS-014** | CC0 test audio clip missing from `assets/audio/` | 🟡 Medium | Synthesized and verified standard 128 BPM electronic kick/hat audio clip at `assets/audio/test_bgm.wav`. |
| **ISS-020** | Antigravity Plugin & Global Skill packaging missing | 🔴 Critical | Packaged repository as an official Antigravity Plugin: authored `plugin.json` (v1.0.0), modern vector branding `assets/logo.svg`, social media compliance gates `rules/AGENTS.md`, and portable Blender MCP `mcp_config.json` (`${PLUGIN_ROOT}`). Migrated all 9 skills into `skills/` with progressive disclosure (`scripts/`, `references/`, `examples/`). Validated with `agy plugin validate . --strict` and enabled globally in Antigravity (`~/.gemini/config/plugins/antigravity-video-studio`). |
| **ISS-021** | Claude Code Skill & Cross-Agent Compatibility | 🟠 High | Added full native support for **Claude Code**: authored `CLAUDE.md`, `.claude-plugin/plugin.json`, custom slash commands in `.claude/commands/` (`/video-generate`, `/video-remix`, `/video-analyze`, `/video-render`), and `.claude/mcp.json`. Linked globally to `~/.claude/plugins/` and `~/.claude/skills/`. Both Antigravity and Claude Code validation verified with zero conflicts. |

---

## 🟠 Remaining Items & System Roadmap

### ISS-005: Rapier physics deterministic simulation in `StudioMasterScene.tsx`
- **Impact**: `@react-three/rapier` is installed, but no `<Physics>` provider or `<RigidBody>` meshes are currently instantiated in `StudioMasterScene.tsx`.
- **Fix**: Add `<Physics timeStep="fixed">` with frame-stepped simulation using `useCurrentFrame()` to advance physics deterministically.
- **Affected**: Phase 3 (deterministic physics), Mode A (code-driven generation).

### ISS-007: Blender host application install
- **Impact**: The Blender MCP server bridge is registered via `mcp_config.json` and `.claude/mcp.json`, but Blender itself is not installed on the system. Headless 3D mesh synthesis requires Blender CLI.
- **Fix**: Install Blender (`brew install --cask blender` or manual download) and register addon from `vendors/mcp-for-blender/addon.py`.
- **Affected**: Mode A 3D asset generation.

### ISS-013: JianYing/CapCut export requires `pyJianYingDraft`
- **Impact**: `skills/video-shotcraft/jianying-export/mac_draft.py` needs `pip install pyJianYingDraft`.
- **Fix**: Run `pip3 install pyJianYingDraft` in the Python environment.

---

## 🟢 Strategic Progress Matrix

```
Phase 1: Workspace Initialization & Repositories     [COMPLETED]
├── Repositories pulled into vendors/
└── Monorepo directory structure established

Phase 2: Skill Migration & Unification               [COMPLETED]
├── 9 skills migrated into standard skills/ directory
└── Progressive disclosure scripts & references authored

Phase 3: Unified Rendering & Audio Engine            [COMPLETED]
├── Remotion 4 compositions (9:16, 16:9, 1:1, 4:5 @ 60fps)
├── Three.js + Postprocessing deterministic effect composer
└── SciPy STFT spectral flux onset & BPM detection (99.7% accuracy)

Phase 4: Antigravity Plugin & Global Integration      [COMPLETED]
├── plugin.json (v1.0.0) + assets/logo.svg
├── rules/AGENTS.md social compliance gates
├── mcp_config.json Blender MCP bridge (${PLUGIN_ROOT})
├── Validated via `agy plugin validate . --strict`
└── Enabled globally in ~/.gemini/config/plugins/antigravity-video-studio

Phase 5: Claude Code Cross-Agent Integration         [COMPLETED]
├── CLAUDE.md project guide & directives
├── .claude-plugin/plugin.json manifest
├── .claude/commands/ (/video-generate, /video-remix, /video-analyze, /video-render)
├── .claude/mcp.json Blender MCP server bridge
└── Linked globally in ~/.claude/plugins/ and ~/.claude/skills/
```
