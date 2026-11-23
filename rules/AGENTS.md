# Antigravity Video Studio Rules & Social Media Compliance Gates

When the `antigravity-video-studio` plugin is active, all video rendering, composition authoring, and timeline editing must strictly follow these engineering and social compliance gates.

## 1. Composition & Rendering Architecture
- **Deterministic Step Guarantee**: Never use `requestAnimationFrame`, `setTimeout`, or `Date.now()` inside React Three Fiber or Remotion compositions. All animations, physics steps (`@react-three/rapier`), and shaders must derive deterministically from Remotion's `useCurrentFrame()` and `useVideoConfig()`.
- **Hardware-Optimal Remotion Flags**: When rendering Remotion compositions via CLI or Node, enforce:
  - `--gl=angle` (prevents macOS and headless WebGL GPU context stalls).
  - `--concurrency=2` (prevents memory exhaustion during multi-pass postprocessing).
- **Supported Canvas Dimensions**:
  - `9:16` Vertical: 1080x1920 @ 60fps (YouTube Shorts, Instagram Reels, TikTok)
  - `16:9` Horizontal: 1920x1080 @ 60fps (YouTube Long-form)
  - `1:1` Square: 1080x1080 @ 60fps (Instagram / Facebook Feed)
  - `4:5` Portrait: 1080x1350 @ 60fps (Instagram / Facebook Feed)

## 2. Retention & Safe-Zone Engineering
- **9:16 Platform Safe Zones**: Keep critical focal elements, subtitles, and interactive callouts OUT of:
  - Bottom 22% (reserved for platform captions, account handles, and audio titles).
  - Right 15% (reserved for platform action icons: like, comment, share, bookmark).
  - Top 10% (reserved for header search and following tabs).
- **Pattern Interrupt Cadence**: Maintain viewer retention by introducing a visual or sonic pattern interrupt (camera cut, zoom pulse, particle burst, or kinetic text flash) every **2.5 to 4.0 seconds**, locked to audio beat drops (`assets/audio/beatmap.json`).

## 3. Audio Licensing & Social Monetization Safety
- **Zero Unoriginal / Reused Content Policy**: Every video must feature programmatic WebGL, Three.js, Canvas, Remotion recipes, or multi-layered compositing with custom kinetic typography to qualify for partner monetization.
- **Audio Standards**:
  - Integrate CC0 / royalty-free audio tracks or algorithmic score synthesis.
  - Automatically produce `ATTRIBUTION.md` alongside each render.
  - Final audio normalization standard: **-14 LUFS** integrated loudness, true peak at -1.0 dBFS, AAC 320 kbps.
