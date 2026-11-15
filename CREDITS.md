# Credits & Upstream Open-Source Attribution

The **Gemini Antigravity Video Studio** suite is built on top of the incredible open-source work of developers, research teams, and artists across the global ecosystem. We gratefully acknowledge and credit all original upstream authors:

## Upstream Credits Table

| Upstream Project | Original Author / Organization | License | Preserved License Location | Primary Upstream Contributions | Upgrades & Gemini 3.8 Flash High Refactorings |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **deepseek-harness** | **DeepSeek AI** | MIT | `packages/agy-gemini-harness/LICENSE.original` | Core multi-agent harness & plugin infrastructure | Refactored into Antigravity multi-agent orchestration runner; eliminated vendor-locked CLI flags. |
| **lemo-opuscar** | **Lemomo AI** | MIT | `packages/gemini-cinecode-99/LICENSE.original` | 99 procedural code-driven film animations in Remotion | Upgraded with dynamic responsive canvas containers (9:16 Shorts/Reels, 16:9 YouTube, 1:1 Feed); deterministic loops. |
| **three.js** | **Ricardo Cabello (Mr.doob) & Contributors** | MIT | `packages/gemini-3d-physics-stage/LICENSE.original` | JavaScript 3D library | Physics and shader time uniforms locked strictly to frame/fps for deterministic offline video rendering. |
| **pixelfx** | **Patch.gg** | MIT | `packages/gemini-pixelfx-vfx/LICENSE.original` | 244+ procedural 2D particle and canvas visual effects | Converted into drop-in Remotion `<PixelFXOverlay />` components with deterministic seed management. |
| **mcp-for-blender** | **Siddharth Ahuja** | MIT | `packages/gemini-blender-mcp-bridge/LICENSE.original` | Blender Model Context Protocol server | Tuned FastMCP schemas for structured JSON output models on Gemini 3.8 Flash High. |
| **awesome-opus5-5-videos** | **Yihui Dev** | MIT | `packages/gemini-viral-blueprints/LICENSE.original` | Video prompt templates and showcase examples | Distilled into structured retention and monetization blueprints (retention hooks, pattern interrupts). |
| **react-three-rapier** & **react-postprocessing** | **Poimandres (pmndrs)** | MIT | Preserved in `packages/gemini-3d-physics-stage/` | React Three Fiber Rapier physics & post-processing effects | Fixed-timestep physics simulation (`1/fps`) and cinematic post-processing (Bloom, Chromatic Aberration). |
| **librosa** | **Brian McFee & Librosa Development Team** | BSD-3-Clause | `packages/gemini-audio-beatlock/LICENSE.original` | Python audio and music analysis library | Packaged into zero-overhead CLI analyzer (`analyze_media.py`) for spectral onset, BPM locking, and vocal pause detection. |
| **video-shotcraft** | **Vincent Wei** | MIT | `packages/gemini-shotcraft-studio/LICENSE.original` | 124 Remotion recipe cards, Motion Workbench editor & CapCut exporter | Enhanced with automated social safe-zone overlays, viral typography, and multi-threaded FFmpeg acceleration. |
