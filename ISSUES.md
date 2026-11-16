# Antigravity Video Studio — Issues Log & Roadmap

> **Updated**: 2026-11-16  
> **Workspace**: `<workspace_root>`  
> **Repository**: [Swatikantamishra8/gemini-antigravity-video-studio](https://github.com/Swatikantamishra8/gemini-antigravity-video-studio)

---

## 🟢 Resolved Issues

| ID | Issue | Severity | Resolution |
|:---|:---|:---:|:---|
| **ISS-002** | Librosa build failure (`llvmlite` compilation blocked on Python 3.13) | 🔴 Critical | Implemented mathematical STFT spectral flux onset detection & autocorrelation BPM estimation natively with `scipy.signal` and `soundfile` inside `analyze_media.py`. Verified at 99.7% BPM accuracy without external compilation. |
| **ISS-003** | Python venv in `python_audio/venv` had corrupt encodings | 🔴 Critical | Purged broken venv; confirmed aside Python 3.13 runtime with all required scientific audio libraries (`numpy 2.5`, `scipy 1.18`, `soundfile 0.14`, `yt-dlp`, `ffmpeg-python`). |
| **ISS-004** | Postprocessing effects not wired in `StudioMasterScene.tsx` | 🟠 High | Wired `@react-three/postprocessing` (`EffectComposer`, `Bloom`, `ChromaticAberration`, `Vignette`) with deterministic frame-interpolated hook bursts. Verified Remotion bundling. |
| **ISS-006** | PixelFX not linked in `engine/` | 🟠 High | Executed `npm install ../vendors/pixelfx` inside `engine/`, enabling direct procedural effect imports. |
| **ISS-008** | Engine `package.json` missing npm scripts | 🟠 High | Added `dev`, `compositions`, `render:vertical`, `render:landscape`, `render:square`, and `render:feed` scripts. |
| **ISS-009** | `--gl=angle` required for macOS headless rendering | 🟡 Medium | Documented and patched across all engine scripts. Default Remotion commands on Mac now pass `--gl=angle`. |
| **ISS-010** | `render_with_compliance.sh` missing `--gl=angle` flag | 🟡 Medium | Added `--gl=angle` to Remotion render invocation for headless macOS stability. |
| **ISS-011** | No `.gitignore` at workspace root | 🟡 Medium | Created comprehensive `.gitignore` filtering `node_modules`, `vendors/`, venvs, OS files, and intermediate renders. |
| **ISS-014** | CC0 test audio clip missing from `assets/audio/` | 🟡 Medium | Synthesized and verified standard 128 BPM electronic kick/hat audio clip at `assets/audio/test_bgm.wav`. |

---

## 🔴 Remaining Critical & System Items

### ISS-001: FFmpeg system binary missing from host PATH
- **Impact**: `render_with_compliance.sh` post-render compliance encoding pass (`loudnorm -14 LUFS`, `H.264`), `analyze_media.py --reference-video` audio extraction, and silence trimming will fail until FFmpeg is available on the machine PATH.
- **Fix**: Install FFmpeg via Homebrew (`brew install ffmpeg`) or provide static ffmpeg/ffprobe binary in `~/.aside/runtime/bin/`.
- **Affected**: Phase 3 (audio pipeline), Phase 5 (H.264/AAC monetization encoding).

---

## 🟠 Remaining High & Medium Items

### ISS-005: Rapier physics not wired in `StudioMasterScene.tsx`
- **Impact**: `@react-three/rapier` is installed, but no `<Physics>` provider or `<RigidBody>` meshes exist in `StudioMasterScene.tsx`.
- **Fix**: Add `<Physics timeStep="fixed">` with frame-stepped simulation using `useCurrentFrame()` to advance physics deterministically.
- **Affected**: Phase 3 (deterministic physics), Mode A (code-driven generation).

### ISS-007: Blender not installed on host machine
- **Impact**: The Blender MCP server is registered in `.gemini/config/mcp_config.json`, but Blender itself is not installed. Headless 3D model generation and GLB export cannot execute.
- **Fix**: Install Blender (`brew install --cask blender` or manual download) and register addon from `vendors/mcp-for-blender/addon.py`.
- **Affected**: Phase 3 (Blender MCP integration for 3D asset generation).

### ISS-013: JianYing/CapCut export requires `pyJianYingDraft`
- **Impact**: `jianying-export/mac_draft.py` needs `pip install pyJianYingDraft`.
- **Fix**: Run `pip3 install pyJianYingDraft` in the Python environment.

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

## Strategic Progress Matrix

```
Phase A: Git Sync & Repository Baseline  [DONE]
├── .gitignore, remotes, and branch rebase synced with origin/main
└── Clean commit & push to Swatikantamishra8/gemini-antigravity-video-studio

Phase B: Engine Visual Polish            [ACTIVE - 80% Completed]
├── [DONE] Wire <EffectComposer> (Bloom, ChromaticAberration, Vignette) in StudioMasterScene.tsx
├── [DONE] Hook burst dynamic easing (frames 0 to 25)
└── [NEXT] Wire <Physics> & <RigidBody> in StudioMasterScene.tsx

Phase C: Audio & Beat Tracking          [DONE]
├── [DONE] Fast FFT spectral flux onset detector (scipy.signal)
├── [DONE] Autocorrelation BPM estimation (tested at 127.6 BPM on 128 BPM synthetic audio)
└── [DONE] Synthesized test audio and validated beatmap.json generation

Phase D: Social Compliance & Export     [READY FOR FFMPEG]
├── [DONE] 9:16 / 16:9 / 1:1 / 4:5 compositions verified
├── [DONE] Safe-zone padding calculations active in React layout
└── [PENDING] Host machine FFmpeg binary for -14 LUFS loudness normalization
```
