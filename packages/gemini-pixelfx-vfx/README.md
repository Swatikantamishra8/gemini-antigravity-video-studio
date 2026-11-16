# @gemini-agy/pixelfx-vfx

Deterministic, frame-accurate procedural 2D particle and visual effects component for Remotion.

## Features
- **Deterministic**: Powered strictly by `useCurrentFrame()` and `fps` (zero wall-clock loops or `requestAnimationFrame`).
- **Effect Types**: `cyber-grid`, `film-grain`, `chromatic-flash`, `sparkle-burst`, `vhs-glitch`, `scanline`.

## Usage
```tsx
import { PixelFXOverlay } from '@gemini-agy/pixelfx-vfx';

export const MyComposition = () => (
  <PixelFXOverlay
    effectType="sparkle-burst"
    intensity={1.2}
    color="#00f0ff"
    seed={101}
  />
);
```
