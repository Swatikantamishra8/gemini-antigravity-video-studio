---
name: lemo-opuscar
description: Direct and produce a short film made entirely in code, in one of the 99 styles of the Lemo-Opuscar library (e.g. Impasto Oil Painting, Watercolor Brush, Ukiyo-e, Satellite Briefing, Exploded Teardown). Optimized for Antigravity & Gemini.
---

# Lemo-Opuscar (Antigravity & Gemini Edition)

The styles, guides and procedural tools live in `.agents/skills/lemo-opuscar/styles` and `vendors/lemo-opuscar`.

## 1. Directory Structure & Style Access
- **Library Root**: `vendors/lemo-opuscar`
- **Style Guides**: `.agents/skills/lemo-opuscar/styles/*/STYLE.md` (99 procedural styles)
- **Core Scripts**: `vendors/lemo-opuscar/core/render/still.mjs`, `vendors/lemo-opuscar/tools/`

## 2. Antigravity & Gemini Execution Conventions
- Use Antigravity command execution tools (`run_command`) rather than Claude-specific plugins.
- When generating a film composition, create project directory under `renders/<film-name>/` or `engine/src/compositions/<film-name>/`.
- Render headless frames using Puppeteer/Chrome or Remotion CLI:
  ```bash
  cd vendors/lemo-opuscar && node core/render/still.mjs "<project_path>" 1.5 3
  ```
- All WebGL, Three.js shaders, and canvas procedural animations are executed directly in browser-rendered canvases or Remotion compositions.

## 3. Style Guides Available
Access all 99 procedural styles under `.agents/skills/lemo-opuscar/styles/`:
- `ink-wash`, `impasto-oil`, `ukiyo-e`, `cyberpunk-hologram`, `satellite-briefing`, `exploded-teardown`, `blueprint-cad`, `isometric-voxel`, `claymation-stopmotion`, etc.
Refer to each style's `STYLE.md` for exact palette hexes, shader uniforms, camera trajectories, and typography rules.
