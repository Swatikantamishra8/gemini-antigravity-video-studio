import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

export interface PixelFXOverlayProps {
  effectType?: 'cyber-grid' | 'film-grain' | 'chromatic-flash' | 'sparkle-burst' | 'vhs-glitch';
  intensity?: number;
  seed?: number;
  color?: string;
  blendMode?: React.CSSProperties['mixBlendMode'];
}

/**
 * Deterministic Remotion PixelFX Component
 * Driven strictly by useCurrentFrame() & fps (no requestAnimationFrame)
 */
export const PixelFXOverlay: React.FC<PixelFXOverlayProps> = ({
  effectType = 'cyber-grid',
  intensity = 1.0,
  seed = 42,
  color = '#00ffcc',
  blendMode = 'screen'
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Deterministic normalized time uniform
  const uTime = frame / fps;

  // Pseudo-random deterministic generator based on seed and frame
  const pseudoRand = (offset: number) => {
    const x = Math.sin(seed + frame * 0.123 + offset) * 10000;
    return x - Math.floor(x);
  };

  const renderEffect = () => {
    switch (effectType) {
      case 'film-grain':
        return (
          <svg width="100%" height="100%" className="w-full h-full opacity-30">
            <filter id={`grain-${seed}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency={0.8 + (pseudoRand(1) * 0.1)}
                numOctaves={3}
                stitchTiles="stitch"
              />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0" />
            </filter>
            <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
          </svg>
        );

      case 'vhs-glitch':
        const jitter = pseudoRand(2) > 0.85 ? (pseudoRand(3) - 0.5) * 20 * intensity : 0;
        return (
          <div
            className="w-full h-full pointer-events-none relative overflow-hidden"
            style={{
              transform: `translateX(${jitter}px)`,
              background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 4px)`
            }}
          />
        );

      case 'chromatic-flash':
        const flashIntensity = Math.max(0, Math.sin(uTime * 4) * intensity);
        return (
          <div
            className="w-full h-full pointer-events-none"
            style={{
              boxShadow: `inset 0 0 ${100 * flashIntensity}px ${color}`,
              opacity: flashIntensity * 0.6
            }}
          />
        );

      case 'cyber-grid':
      default:
        const gridOffset = (frame * 2 * intensity) % 40;
        return (
          <div
            className="w-full h-full pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 255, 204, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 204, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: `0px ${gridOffset}px`
            }}
          />
        );
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        mixBlendMode: blendMode,
        pointerEvents: 'none',
        zIndex: 50
      }}
    >
      {renderEffect()}
    </div>
  );
};
