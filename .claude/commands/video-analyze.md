---
description: Extract frame-accurate audio beatmaps, onset envelopes, and viral reference blueprints (Mode C).
---

Analyze audio or video media provided in the prompt:

1. **For Audio Tracks**:
   ```bash
   python3 python_audio/analyze_media.py --audio <audio_path> --fps 60 --output assets/audio/beatmap.json
   ```
   Extracts exact BPM, beat timestamps, bass drops, and spectral onset envelopes.

2. **For Viral Reference Videos**:
   ```bash
   python3 python_audio/analyze_media.py --reference-video <video_path_or_url> --output assets/audio/viral_blueprint.json
   ```
   Extracts the hook duration, scene transition frequency, audio peak sync points, and visual pacing curves.

3. Report the detected BPM, drop timestamps, and recommended pattern interrupt intervals (every 2.5 to 4.0 seconds).
