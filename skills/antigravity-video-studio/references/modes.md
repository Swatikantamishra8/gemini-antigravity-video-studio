# Operational Modes: Deep Reference

Antigravity Video Studio operates in three primary production modes depending on the user brief:

## 1. MODE A: Text-to-Video (100% Code-Driven Generation)

- **Target**: Generating an original, commercial-grade video from scratch using code assets only.
- **Workflow Steps**:
  1. **Style Selection**: Choose one of 99 procedural styles from `skills/lemo-opuscar/styles/*/STYLE.md` (e.g. `impasto-oil-painting`, `watercolor-brush`, `ukiyo-e`, `exploded-teardown`).
  2. **Shot Card Progression**: Select 3 to 6 shot cards from `skills/video-shotcraft/` (e.g. `01-hook-drop`, `07-split-view`, `14-metric-counter`).
  3. **Audio Beat Extraction**: Process background audio with `scripts/analyze.py --audio <path> --fps 60` to generate `beatmap.json`.
  4. **3D WebGL / Canvas Authoring**:
     - Author Three.js / React Three Fiber scenes in `engine/src/`.
     - Bind deterministic springs with Remotion's `spring({ frame, fps, config })`.
     - Seed PixelFX animations (`node vendors/pixelfx/tools/render.mjs`) for micro-interactions.
  5. **Render & Verification**: Run `scripts/render.sh StudioMasterVertical` with `--gl=angle`.

---

## 2. MODE B: Raw Video Editor & Remixer

- **Target**: Ingesting user footage, talking head videos, product recordings, or screen captures from `assets/input/` and turning them into social media gold.
- **Workflow Steps**:
  1. **Ingest & Clean**: Trim silences and dead air using FFmpeg silenceremove filter.
  2. **Safe-Zone Captioning**: Generate animated word-by-word captions staying outside bottom 22% and right 15% safe zones.
  3. **Visual Callouts**: Inject 3D badges, arrows, or canvas callouts over key moments.
  4. **Sound Design**: Overlay CC0 sound effects from Freesound with audio ducking (-12dB under speech).
  5. **Export & Draft**: Produce final MP4 and optionally export CapCut/JianYing draft via `skills/video-shotcraft/jianying-export/mac_draft.py`.

---

## 3. MODE C: Viral Video Cloner & Monetization Optimizer

- **Target**: Reverse-engineering high-performing reference videos and producing a 100% copyright-clean, original equivalent.
- **Workflow Steps**:
  1. **Deconstruction**: Run `scripts/analyze.py --reference-video <path_or_url>` to extract `viral_blueprint.json`:
     - Hook duration (typically 0.8s - 2.2s)
     - Average scene duration (1.8s - 3.2s)
     - Kinetic typography pacing curve
  2. **Synthesis**: Match the pacing curve with original WebGL/Three.js visual scenes and custom typography.
  3. **Audio Compliance**: Replace copyrighted soundtrack with royalty-free audio or procedural generative score.
