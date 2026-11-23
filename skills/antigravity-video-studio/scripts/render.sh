#!/usr/bin/env bash
set -euo pipefail

# Antigravity Video Studio Render Script
# Usage: ./render.sh <CompositionId> [OutputPath] [Concurrency]
# Example: ./render.sh StudioMasterVertical renders/out_vertical.mp4 2

COMP_ID="${1:-StudioMasterVertical}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
ENGINE_DIR="$REPO_ROOT/engine"
OUTPUT_PATH="${2:-$REPO_ROOT/renders/${COMP_ID}.mp4}"
CONCURRENCY="${3:-2}"

# Environment setup
if [ -f "$HOME/.aside/runtime/bin/node" ]; then
  export PATH="$HOME/.aside/runtime/bin:$PATH"
fi

mkdir -p "$(dirname "$OUTPUT_PATH")"

echo "=== Rendering Composition: $COMP_ID ==="
echo "Destination: $OUTPUT_PATH"
echo "Concurrency: $CONCURRENCY"
echo "GL Flag: --gl=angle"

cd "$ENGINE_DIR"

npx remotion render src/index.ts "$COMP_ID" "$OUTPUT_PATH" \
  --gl=angle \
  --concurrency="$CONCURRENCY" \
  --log=warn

echo "=== Render Complete ==="
echo "Output generated: $OUTPUT_PATH"
ls -lh "$OUTPUT_PATH"
