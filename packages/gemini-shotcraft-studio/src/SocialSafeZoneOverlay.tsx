import React from 'react';
import { useVideoConfig } from 'remotion';

export type PlatformSafeZone =
  | 'shorts'
  | 'tiktok'
  | 'reels'
  | 'youtube'
  | 'facebook'
  | 'instagram-feed'
  | 'linkedin'
  | 'all';

export interface SocialSafeZoneOverlayProps {
  platform?: PlatformSafeZone;
  visible?: boolean;
}

/**
 * Social Media Safe-Zone Guide Overlay
 * Ensures titles, captions, and key CTAs are never obscured by platform UI
 */
export const SocialSafeZoneOverlay: React.FC<SocialSafeZoneOverlayProps> = ({
  platform = 'shorts',
  visible = true
}) => {
  const { width, height } = useVideoConfig();

  if (!visible) return null;

  const isVertical = height > width;
  const isSquare = Math.abs(height - width) < 10;

  // Render Square / Feed Layout (1:1)
  if (isSquare || platform === 'instagram-feed') {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width, height, pointerEvents: 'none', zIndex: 100 }}>
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '8%',
            right: '8%',
            bottom: '8%',
            border: '2px dashed rgba(225, 48, 108, 0.8)',
            borderRadius: 8,
            boxShadow: '0 0 10px rgba(225, 48, 108, 0.2)'
          }}
        >
          <span style={{ fontSize: 13, color: '#e1306c', padding: 10, display: 'inline-block' }}>
            INSTAGRAM FEED 1:1 SAFE ZONE (84%)
          </span>
        </div>
      </div>
    );
  }

  // Render Facebook 4:5 Vertical Feed Layout
  if (platform === 'facebook' && isVertical) {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width, height, pointerEvents: 'none', zIndex: 100 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10%', background: 'rgba(24, 119, 242, 0.15)', borderBottom: '2px dashed #1877f2' }}>
          <span style={{ fontSize: 12, color: '#1877f2', padding: 8, display: 'inline-block' }}>FACEBOOK HEADER (10%)</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '15%', background: 'rgba(24, 119, 242, 0.15)', borderTop: '2px dashed #1877f2' }}>
          <span style={{ fontSize: 12, color: '#1877f2', padding: 8, display: 'inline-block' }}>FACEBOOK ENGAGEMENT BAR (15%)</span>
        </div>
        <div style={{ position: 'absolute', top: '10%', left: '5%', right: '5%', bottom: '15%', border: '2px solid #1877f2' }}>
          <span style={{ fontSize: 14, color: '#1877f2', padding: 10, display: 'inline-block' }}>FB 4:5 CONTENT SAFE HOTSPOT</span>
        </div>
      </div>
    );
  }

  // Render LinkedIn Layout
  if (platform === 'linkedin') {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width, height, pointerEvents: 'none', zIndex: 100 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12%', background: 'rgba(10, 102, 194, 0.15)', borderBottom: '2px dashed #0a66c2' }}>
          <span style={{ fontSize: 12, color: '#0a66c2', padding: 8, display: 'inline-block' }}>LINKEDIN NAV BAR (12%)</span>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '18%', background: 'rgba(10, 102, 194, 0.15)', borderTop: '2px dashed #0a66c2' }}>
          <span style={{ fontSize: 12, color: '#0a66c2', padding: 8, display: 'inline-block' }}>LINKEDIN CTA & ACTIONS (18%)</span>
        </div>
      </div>
    );
  }

  // Standard 9:16 Shorts / Reels / TikTok Layout
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        pointerEvents: 'none',
        zIndex: 100
      }}
    >
      {isVertical ? (
        <>
          {/* Top header safe margin */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '14%',
              background: 'rgba(255, 0, 0, 0.15)',
              borderBottom: '2px dashed rgba(255, 0, 0, 0.5)'
            }}
          >
            <span style={{ fontSize: 12, color: '#fff', padding: 8, display: 'inline-block' }}>
              TOP HEADER BUFFER (14%)
            </span>
          </div>

          {/* Right sidebar UI */}
          <div
            style={{
              position: 'absolute',
              top: '14%',
              right: 0,
              bottom: '22%',
              width: '18%',
              background: 'rgba(255, 165, 0, 0.15)',
              borderLeft: '2px dashed rgba(255, 165, 0, 0.5)'
            }}
          >
            <span style={{ fontSize: 12, color: '#fff', padding: 8, display: 'inline-block' }}>
              ACTION UI (18%)
            </span>
          </div>

          {/* Bottom description */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '22%',
              background: 'rgba(255, 0, 0, 0.15)',
              borderTop: '2px dashed rgba(255, 0, 0, 0.5)'
            }}
          >
            <span style={{ fontSize: 12, color: '#fff', padding: 8, display: 'inline-block' }}>
              CAPTION / SOUND SAFE AREA (22%)
            </span>
          </div>

          {/* Recommended hotspot */}
          <div
            style={{
              position: 'absolute',
              top: '14%',
              left: '5%',
              right: '18%',
              bottom: '22%',
              border: '2px solid rgba(0, 255, 204, 0.8)',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 255, 204, 0.3)'
            }}
          >
            <span style={{ fontSize: 14, color: '#00ffcc', padding: 12, display: 'inline-block' }}>
              RECOMMENDED CTA & CAPTION HOTSPOT
            </span>
          </div>
        </>
      ) : (
        /* 16:9 Landscape Safe Margin */
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            border: '2px dashed rgba(0, 255, 204, 0.6)'
          }}
        >
          <span style={{ fontSize: 14, color: '#00ffcc', padding: 8, display: 'inline-block' }}>
            16:9 TITLE SAFE ZONE (90%)
          </span>
        </div>
      )}
    </div>
  );
};
