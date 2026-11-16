# Antigravity Video Studio — Issues Log & Roadmap

> **Updated**: 2026-11-16  
> **Workspace**: `/Users/swatikantamishra/Desktop/VideoEditor`  
> **Repository**: [Swatikantamishra8/gemini-antigravity-video-studio](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)

---

## 🟢 Recently Resolved

| ID | Issue | Resolution |
|:---|:---|:---|
| **ISS-003** | Python venv in `python_audio/venv` had corrupt encodings | Purged broken venv; confirmed aside Python 3.13 runtime with all required scientific audio libraries (`numpy 2.5`, `scipy 1.18`, `soundfile 0.14`, `yt-dlp`, `ffmpeg-python`). |
| **ISS-006** | PixelFX not linked in `engine/` | Executed `npm install ../vendors/pixelfx` inside `engine/`, enabling direct procedural effect imports. |
| **ISS-008** | Engine `package.json` missing npm scripts | Added `dev`, `compositions`, `render:vertical`, `render:landscape`, `render:square`, and `render:feed` scripts. |
| **ISS-010** | `render_with_compliance.sh` missing `--gl=angle` flag | Added `--gl=angle` to Remotion render invocation for headless macOS stability. |
| **ISS-011** | No `.gitignore` at workspace root | Created comprehensive `.gitignore` filtering `node_modules`, `vendors/`, venvs, OS files, and intermediate renders. |

---

## 🔴 Critical (Blocks rendering or core workflow)

### ISS-001: FFmpeg system binary missing from PATH
- **Impact**: `render_with_compliance.sh` post-render compliance encoding pass (`loudnorm -14 LUFS`, `H.264`), `analyze_media.py --reference-video` audio extraction, and silence trimming will fail.
- **Fix**: Install FFmpeg via Homebrew (`brew install ffmpeg`) or provide static ffmpeg/ffprobe binary in `~/.aside/runtime/bin/`.
- **Affected**: Phase 3 (audio pipeline), Phase 5 (H.264/AAC monetization encoding).

### ISS-002: Librosa package not compiled (llvmlite build requirement)
- **Impact**: `analyze_media.py --audio` mode utilizes the deterministic 120 BPM fallback grid instead of live Fourier/onset analysis.
- **Root Cause**: `llvmlite` failed wheel compilation under Python 3.13 due to missing LLVM development headers.
- **Fix**: Install standalone `librosa` using precompiled binary wheel or build with LLVM 18 headers; alternatively use `scipy.signal` spectrogram peak-finding natively implemented in `analyze_media.py`.
- **Affected**: Phase 3 (Librosa audio analysis), Mode A & C beat sync.

---

## 🟠 High (Missing planned features, degraded functionality)

### ISS-004: Postprocessing effects not wired in StudioMasterScene
- **Impact**: `@react-three/postprocessing` is installed in `node_modules` but `Bloom`, `ChromaticAberration`, `DepthOfField`, and `Vignette` are not active in `StudioMasterScene.tsx`.
- **Fix**: Embed `<EffectComposer>` with deterministic effect passes driven by Remotion's `useCurrentFrame()` inside the ThreeCanvas.
- **Affected**: Phase 3 (rendering engine visual quality).

### ISS-005: Rapier physics not wired in StudioMasterScene
- **Impact**: `@react-three/rapier` is installed, but no `<Physics>` provider or `<RigidBody>` meshes exist in `StudioMasterScene.tsx`.
- **Fix**: Add `<Physics timeStep="fixed">` with frame-stepped simulation using `useCurrentFrame()` to advance physics deterministically.
- **Affected**: Phase 3 (deterministic physics), Mode A (code-driven generation).

### ISS-007: Blender not installed on host machine
- **Impact**: The Blender MCP server is registered in `.gemini/config/mcp_config.json`, but Blender itself is not installed. Headless 3D model generation and GLB export cannot execute.
- **Fix**: Install Blender (`brew install --cask blender` or manual download) and register addon from `vendors/mcp-for-blender/addon.py`.
- **Affected**: Phase 3 (Blender MCP integration for 3D asset generation).

---

## 🟡 Medium (Quality-of-life, completeness)

### ISS-009: `--gl=angle` required for macOS headless rendering
- **Status**: Documented and patched across all engine scripts. Default Remotion commands on Mac must pass `--gl=angle`.

### ISS-012: `engine/package.json` specifies `"type": "commonjs"`
- **Status**: Remotion CLI bundles with Webpack/esbuild seamlessly, but native Node imports require bundler context. Keep or migrate to `"type": "module"`.

### ISS-013: JianYing/CapCut export requires `pyJianYingDraft`
- **Impact**: `jianying-export/mac_draft.py` needs `pip install pyJianYingDraft`.
- **Fix**: Run `pip3 install pyJianYingDraft` in the Python environment.

### ISS-014: CC0 test audio clip missing from `assets/audio/`
- **Impact**: End-to-end audio pipeline verification requires an input track.
- **Fix**: Add sample audio clip to `assets/audio/test_bgm.mp3`.

---

## 🟢 Low (Enhancements & Future Work)

### ISS-015: Automated viral blueprint parser
- **Enhancement**: Connect `viral_blueprint.json` from `analyze_media.py` directly to a Remotion timeline generator.

### ISS-016: Automated test suite
- **Enhancement**: GitHub Actions workflow for TypeScript compilation check, Remotion composition smoke test, and Python linting.

### ISS-018: Color grading LUT presets
- **Enhancement**: Add `.cube` LUT files to `assets/` for cinematic color grading in Mode B.

### ISS-019: Dynamic audio ducking
- **Enhancement**: Add FFmpeg sidechain compression filter for voice-over + BGM ducking in Mode B.

---

## Strategic Implementation Plan

```
Phase A: Git Sync & Repository Baseline (Current)
├── Configure .gitignore & clean working tree
├── Sync with Swatikantamishra8/gemini-antigravity-video-studio
└── Commit ISSUES.md and updated engine configs

Phase B: Engine Visual Polish (Next)
├── Wire <EffectComposer> (Bloom, ChromaticAberration, Vignette) in StudioMasterScene.tsx
├── Wire <Physics> & <RigidBody> in StudioMasterScene.tsx
└── Verify deterministic frame stepping at 60fps

Phase C: Audio & System Dependencies
├── Fallback beat-tracking via scipy.signal in analyze_media.py (bypassing llvmlite)
├── Verify FFmpeg / brew installation instructions
└── Add test audio track in assets/audio/
```
