#!/usr/bin/env bash
# Usage: bash scripts/render.sh <EntryFile> <CompositionId> <OutputFile>
set -e

ENTRY="${1:-src/index.ts}"
COMP_ID="${2:-MyVideo}"
OUT_FILE="${3:-out/rendered_video.mp4}"

mkdir -p "$(dirname "$OUT_FILE")"

CODEC="libx264"
if ffmpeg -encoders 2>/dev/null | grep -q nvenc; then
  CODEC="h264_nvenc"
  echo "🚀 GPU Acceleration detected: using $CODEC"
else
  echo "ℹ️ Running on CPU: using $CODEC"
fi

echo "Rendering composition '$COMP_ID' with Remotion..."
npx remotion render "$ENTRY" "$COMP_ID" "$OUT_FILE" \
  --concurrency=2 \
  --gl=angle \
  --ffmpeg-override="-c:v $CODEC -pix_fmt yuv420p -preset fast -af loudnorm=I=-14:TP=-1:LRA=7"

echo "✅ Video render complete: $OUT_FILE (-14 LUFS compliant)"
