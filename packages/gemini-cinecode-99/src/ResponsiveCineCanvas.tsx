import React from 'react';
import { useVideoConfig } from 'remotion';

export type AspectRatio = '9:16' | '16:9' | '1:1' | '4:5';

export interface ResponsiveCanvasProps {
  aspectRatio?: AspectRatio;
  children: React.ReactNode;
}

/**
 * Responsive Canvas Container for 99 Procedural CineCode Styles
 * Adapts instantly between TikTok/Shorts (9:16), YouTube (16:9), and Instagram (1:1 / 4:5)
 */
export const ResponsiveCineCanvas: React.FC<ResponsiveCanvasProps> = ({
  aspectRatio = '9:16',
  children
}) => {
  const { width, height } = useVideoConfig();

  const getTargetDimensions = () => {
    switch (aspectRatio) {
      case '9:16':
        return { width: 1080, height: 1920 };
      case '1:1':
        return { width: 1080, height: 1080 };
      case '4:5':
        return { width: 1080, height: 1350 };
      case '16:9':
      default:
        return { width: 1920, height: 1080 };
    }
  };

  const target = getTargetDimensions();

  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050508',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: target.width,
          height: target.height,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          transform: `scale(${Math.min(width / target.width, height / target.height)})`,
          transformOrigin: 'center center'
        }}
      >
        {children}
      </div>
    </div>
  );
};
