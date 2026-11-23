---
name: antigravity-video-studio
description: Full-stack programmatic video editing, 3D WebGL motion engine, and viral social media production pipeline with compliance gates for Antigravity & Gemini.
---

# Antigravity Video Studio Core

Master autonomous video architecture for Antigravity & Gemini. Coordinates procedural film generation (`lemo-opuscar`), commercial shot recipes (`video-shotcraft`), pixel/particle effects (`pixelfx`), 3D WebGL & deterministic physics (`Three.js / Rapier / Postprocessing`), audio frequency decomposition (`python_audio/analyze_media.py`), and parallel rendering orchestration (`dsh-orchestrator`).

## Quick Start & Verification

Run the bootstrap diagnostic to verify runtimes, FFmpeg, Remotion, and audio packages:
```bash
./skills/antigravity-video-studio/scripts/bootstrap.sh
```

## Production Modes

- **🎬 [Mode A: Text-to-Video](./references/modes.md#1-mode-a-text-to-video-100-code-driven-generation)**: 100% code-driven cinematic video generation from scratch using Remotion, Three.js, PixelFX, and procedural film styles. See walkthrough: [code_driven_short.md](./examples/code_driven_short.md).
- **✂️ [Mode B: Raw Video Remixer](./references/modes.md#2-mode-b-raw-video-editor--remixer)**: Ingests raw user footage, executes silence trimming, kinetic word-by-word captions, and 3D callouts. See walkthrough: [raw_footage_remix.md](./examples/raw_footage_remix.md).
- **🚀 [Mode C: Viral Video Cloner](./references/modes.md#3-mode-c-viral-video-cloner--monetization-optimizer)**: Deconstructs reference videos into a `viral_blueprint.json` (hook duration, scene cadence, pacing curves) and rebuilds a copyright-safe, monetizable equivalent.

## Platform Compliance & Monetization Standards

All generated videos adhere to strict platform gates detailed in [compliance.md](./references/compliance.md):
1. **Zero Unoriginal / Reused Content Strikes**: Programmatic canvas/WebGL or multi-layered compositing.
2. **Platform Safe Zones (9:16)**: Bottom 22% and Right 15% clear of critical text and UI elements.
3. **Retention Pacing**: Pattern interrupt every 2.5 - 4.0 seconds synchronized with audio beat drops.
4. **Broadcast Audio**: Integrated loudness normalized to **-14 LUFS** (+/- 1.0 LUFS) with true peak <= -1.0 dBFS.

## Available Tool Scripts

- **[bootstrap.sh](./scripts/bootstrap.sh)**: Diagnostics and environment initialization.
- **[render.sh](./scripts/render.sh)**: Deterministic Remotion rendering with `--gl=angle` and concurrency control.
- **[analyze.py](./scripts/analyze.py)**: Audio onset, beatmap, and viral video blueprint extraction.
