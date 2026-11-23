---
description: Remix raw user footage with silence trimming, kinetic captions in safe zones, and particle VFX (Mode B).
---

Remix the raw footage in `assets/input/` according to the user request:

1. **Silence Trimming**: Ingest the video from `assets/input/` and remove silence using FFmpeg:
   ```bash
   ffmpeg -i assets/input/<raw_video> -af "silenceremove=stop_periods=-1:stop_duration=0.4:stop_threshold=-30dB" -c:v libx264 -crf 18 -c:a aac assets/input/trimmed.mp4
   ```
2. **Audio Cadence**: Extract speech onsets using `python3 python_audio/analyze_media.py --audio assets/input/trimmed.mp4`.
3. **Safe-Zone Captions**: Position kinetic subtitles in the safe viewport (between 20% and 75% height) to prevent platform UI overlap.
4. **Callouts & VFX**: Overlay PixelFX particle bursts (`node vendors/pixelfx/tools/render.mjs`) on key emphasized words.
5. **Sound Design**: Duck background music under speech (-12dB) and add accent whoosh/impact effects.
6. **Export**: Render final MP4 and optionally generate JianYing/CapCut draft via `skills/video-shotcraft/jianying-export/mac_draft.py`.
