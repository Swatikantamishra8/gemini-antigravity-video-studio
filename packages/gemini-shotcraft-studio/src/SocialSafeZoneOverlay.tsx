import React from 'react';
import { useVideoConfig } from 'remotion';

export interface SocialSafeZoneOverlayProps {
  platform?: 'shorts' | 'tiktok' | 'reels' | 'youtube' | 'all';
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
          {/* Top header safe margin (search & audio tags) */}
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

          {/* Right sidebar UI safe margin (like, comment, share, remix) */}
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

          {/* Bottom description and sound disc safe margin */}
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

          {/* 9:16 Center Safe Zone */}
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
        /* 16:9 Landscape Safe Margin (Title & Safe Framing) */
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
