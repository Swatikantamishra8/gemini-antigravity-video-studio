---
description: Render a Remotion composition with hardware-optimal flags and compliance verification.
---

Render a Remotion composition:

1. **Parameters**:
   - Composition ID (default: `StudioMasterVertical`)
   - Output Path (default: `renders/output.mp4`)
   - Concurrency (default: `2`)

2. **Execution**:
   ```bash
   ./skills/antigravity-video-studio/scripts/render.sh <CompositionId> <OutputPath> <Concurrency>
   ```

3. **Verification**:
   Confirm video output dimensions, frame rate (60fps), and ensure the file is generated cleanly in `renders/`.
