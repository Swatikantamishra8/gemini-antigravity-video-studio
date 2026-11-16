# @gemini-agy/audio-beatlock

High-throughput audio beat tracking, spectral onset detection, vocal pause calculation, and video scene-cut extraction for Remotion and Antigravity.

## CLI Usage

### Audio Beat Analysis
```bash
python3 analyze_media.py input.mp3 --fps 30 -o beatmap.json
```

### Reference Video Cut Extraction
```bash
python3 analyze_media.py reference_video.mp4 --mode video-cuts --fps 30 -o cuts.json
```
