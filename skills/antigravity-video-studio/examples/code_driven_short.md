# Example: 9:16 Code-Driven Social Short (Mode A)

This walkthrough demonstrates generating a viral 15-second 9:16 vertical video with Remotion and Three.js.

## Prompt
> "Generate a 15-second vertical 9:16 YouTube Short announcing Antigravity Studio Core with floating 3D neon geometry, beat-synced camera pulses, and social-compliant typography."

## Execution Steps

### 1. Extract Beatmap
```bash
./skills/antigravity-video-studio/scripts/bootstrap.sh
./skills/antigravity-video-studio/scripts/analyze.py --audio assets/audio/test_bgm.wav --fps 60 --output assets/audio/beatmap.json
```

### 2. Configure Composition in `engine/src/Root.tsx`
Ensure `StudioMasterVertical` is registered at 1080x1920, 60fps, 900 frames (15 seconds).

### 3. Add Deterministic 3D Scene in `engine/src/StudioMasterScene.tsx`
```tsx
import { useCurrentFrame } from "remotion";
import { Float } from "@react-three/drei";

export const StudioMasterScene: React.FC = () => {
  const frame = useCurrentFrame();
  const rotationY = (frame / 60) * Math.PI * 0.5;

  return (
    <mesh rotation={[0, rotationY, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8B5CF6" roughness={0.1} metalness={0.9} />
    </mesh>
  );
};
```

### 4. Render
```bash
./skills/antigravity-video-studio/scripts/render.sh StudioMasterVertical renders/antigravity_short_916.mp4 2
```
