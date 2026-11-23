---
description: Generate a 100% code-driven cinematic video from scratch using Remotion, Three.js, and PixelFX (Mode A).
---

Generate a code-driven video based on the user's brief. Follow these instructions:

1. **Verify Environment**: Run `./skills/antigravity-video-studio/scripts/bootstrap.sh` to ensure Node, Remotion, and audio libraries are ready.
2. **Select Visual Style**: Select a procedural visual style from `skills/lemo-opuscar/styles/*/STYLE.md`.
3. **Map Shots**: Sequence 3 to 6 shot cards from `skills/video-shotcraft/`.
4. **Extract Audio Rhythm**: Run `python3 python_audio/analyze_media.py --audio assets/audio/test_bgm.wav --fps 60` to produce `assets/audio/beatmap.json`.
5. **Author Composition**: Write the React Three Fiber / Remotion scene in `engine/src/`, strictly deriving animation state from `useCurrentFrame()`.
6. **Render with Hardware Flags**: Execute `./skills/antigravity-video-studio/scripts/render.sh <CompositionId> renders/output.mp4 2` enforcing `--gl=angle`.
7. **Compliance Check**: Verify 9:16 safe zones (captions above 78% mark and left of 85% width) and -14 LUFS loudness.
