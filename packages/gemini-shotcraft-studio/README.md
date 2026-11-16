# @gemini-agy/shotcraft-studio

Remotion shot recipe cards, workbench editor, and multi-platform social media safe-zone overlays.

## Safe-Zone Overlay Usage
```tsx
import { SocialSafeZoneOverlay } from '@gemini-agy/shotcraft-studio';

export const MyShortsVideo = () => (
  <>
    {/* Your Video Layers */}
    <SocialSafeZoneOverlay platform="shorts" visible={true} />
  </>
);
```

Supported platforms: `shorts`, `tiktok`, `reels`, `youtube`, `facebook`, `instagram-feed`, `linkedin`.
