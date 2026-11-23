# Example: Raw Footage Remix (Mode B)

This walkthrough demonstrates transforming a raw product demonstration video into a high-retention reel.

## Input Footage
Raw file placed at `assets/input/demo_clip.mp4`.

## Execution Steps

### 1. Ingest & Silence Trim
```bash
ffmpeg -i assets/input/demo_clip.mp4 \
  -af "silenceremove=stop_periods=-1:stop_duration=0.4:stop_threshold=-30dB" \
  -c:v libx264 -crf 18 -c:a aac -b:a 192k \
  assets/input/demo_trimmed.mp4
```

### 2. Audio Rhythm Analysis
```bash
./skills/antigravity-video-studio/scripts/analyze.py --audio assets/input/demo_trimmed.mp4 --output assets/audio/demo_beatmap.json
```

### 3. Layer Kinetic Captions and Safe-Zone Framing
In Remotion composition:
- Wrap video in `<Video src={staticFile("demo_trimmed.mp4")} />`
- Overlay kinetic captions placed at `top: 60%` (safe zone above 78% mark).
- Add PixelFX accent particle burst at 3.2s drop.

### 4. Normalize & Export
```bash
./skills/antigravity-video-studio/scripts/render.sh VideoRemixComposition renders/demo_remix.mp4
```
