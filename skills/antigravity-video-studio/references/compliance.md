# Social Media Compliance & Monetization Specifications

## 1. Safe-Zone Constraints for 9:16 Vertical Video (1080x1920)

| Region | Boundary | Reason | Constraint |
| :--- | :--- | :--- | :--- |
| **Top Zone** | Top 0px - 192px (10%) | App header, search bar, following tabs | Keep captions and text out |
| **Right Zone** | Right 918px - 1080px (15%) | Like, comment, share, bookmark buttons | Keep interactive buttons/text out |
| **Bottom Zone** | Bottom 1500px - 1920px (22%) | Captions, sound title, account tag | Keep primary text out |
| **Safe Center** | X: 160px - 920px, Y: 220px - 1480px | Unobstructed viewport | Primary visual focus |

## 2. Retention Curve Engineering

- **The 3-Second Hook**: The first 180 frames (at 60fps) must feature an immediate visual drop, text title pulse, or dynamic camera translation.
- **Pattern Interrupt Cadence**: Every 2.5 to 4.0 seconds (150 - 240 frames), trigger at least one of:
  - Camera zoom / snap change
  - Color palette shift or chromatic burst
  - Sound effect accent (whoosh, rise, impact)
  - Keyframe velocity spring jump

## 3. Monetization Audio Specifications

- **Licensing**: Only CC0, Creative Commons Attribution (with `ATTRIBUTION.md`), or algorithmic synthesizers.
- **Target Loudness**:
  - Integrated Loudness: **-14 LUFS** (+/- 1.0 LUFS)
  - True Peak: **-1.0 dBFS** max
  - Audio Format: AAC, 320 kbps, 48 kHz stereo
- **FFmpeg Normalization Filter**:
  `-af "loudnorm=I=-14:TP=-1.0:LRA=11"`
