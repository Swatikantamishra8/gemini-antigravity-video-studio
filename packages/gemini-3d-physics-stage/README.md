# @gemini-agy/3d-physics-stage

Deterministic 3D rigid-body physics and cinematic post-processing (Bloom, Chromatic Aberration) component for Remotion.

## Usage
```tsx
import { Gemini3DPhysicsStage } from '@gemini-agy/3d-physics-stage';

export const My3DScene = () => (
  <Gemini3DPhysicsStage cubeCount={10} bloomIntensity={1.5} />
);
```
Locked strictly to Remotion time step (`1 / fps`).
