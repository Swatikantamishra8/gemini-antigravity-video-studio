#!/usr/bin/env bash
set -euo pipefail

# Antigravity Video Studio Environment Verification & Bootstrap
echo "=== Antigravity Video Studio Bootstrap ==="

# 1. Resolve Runtimes
if [ -n "${PYTHON_BIN:-}" ] && "$PYTHON_BIN" -c "import numpy" >/dev/null 2>&1; then
  : # PYTHON_BIN explicitly provided and valid
elif [ -f "$HOME/.aside/runtime/bin/python3" ] && "$HOME/.aside/runtime/bin/python3" -c "import numpy" >/dev/null 2>&1; then
  PYTHON_BIN="$HOME/.aside/runtime/bin/python3"
  export PATH="$HOME/.aside/runtime/bin:$PATH"
elif command -v python3 >/dev/null 2>&1 && python3 -c "import numpy" >/dev/null 2>&1; then
  PYTHON_BIN="python3"
elif [ -f "$HOME/.aside/runtime/bin/python3" ]; then
  PYTHON_BIN="$HOME/.aside/runtime/bin/python3"
  export PATH="$HOME/.aside/runtime/bin:$PATH"
else
  PYTHON_BIN="python3"
fi

if [ -n "${NODE_BIN:-}" ]; then
  : # NODE_BIN explicitly provided
elif [ -f "$HOME/.aside/runtime/bin/node" ]; then
  NODE_BIN="$HOME/.aside/runtime/bin/node"
  export PATH="$HOME/.aside/runtime/bin:$PATH"
elif command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  echo "Error: Node.js runtime not found in PATH or ~/.aside/runtime/bin" >&2
  exit 1
fi

echo "✓ Node runtime: $($NODE_BIN --version) at $(which $NODE_BIN)"
echo "✓ Python runtime: $($PYTHON_BIN --version) at $(which $PYTHON_BIN)"

# 2. Check FFmpeg
if command -v ffmpeg >/dev/null 2>&1; then
  echo "✓ FFmpeg: $(ffmpeg -version | head -n 1)"
else
  echo "⚠ Warning: ffmpeg CLI not found directly in PATH. Ensure system FFmpeg is accessible."
fi

# 3. Check Remotion Engine Dependencies
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
ENGINE_DIR="$REPO_ROOT/engine"

if [ -d "$ENGINE_DIR/node_modules" ]; then
  echo "✓ Remotion engine node_modules present"
else
  echo "Installing Remotion engine dependencies..."
  (cd "$ENGINE_DIR" && npm install)
fi

# 4. Check Python Audio Libraries
"$PYTHON_BIN" -c "import numpy, scipy.signal, soundfile; print('✓ Python audio libraries: numpy, scipy, soundfile verified')"

echo "=== All Core Components Ready ==="
