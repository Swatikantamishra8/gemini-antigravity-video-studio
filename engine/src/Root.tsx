import React from 'react';
import { Composition } from 'remotion';
import { StudioMasterScene } from './compositions/StudioMasterScene';

export type AspectRatioPreset = '9:16' | '16:9' | '1:1' | '4:5';

export interface VideoMetadata {
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  id: string;
}

export const ASPECT_CONFIGS: Record<AspectRatioPreset, { width: number; height: number }> = {
  '9:16': { width: 1080, height: 1920 }, // Shorts, Reels, TikTok
  '16:9': { width: 1920, height: 1080 }, // YouTube standard / widescreen
  '1:1': { width: 1080, height: 1080 },  // Instagram Feed / Facebook
  '4:5': { width: 1080, height: 1350 },  // Instagram Portrait Feed
};

export const RemotionRoot: React.FC = () => {
  const fps = 60;
  const durationInFrames = 60 * 15; // 15 seconds default

  return (
    <>
      {/* 9:16 Vertical (Shorts, Reels) */}
      <Composition
        id="Studio-Vertical-9x16"
        component={StudioMasterScene}
        durationInFrames={durationInFrames}
        fps={fps}
        width={ASPECT_CONFIGS['9:16'].width}
        height={ASPECT_CONFIGS['9:16'].height}
        defaultProps={{
          aspectRatio: '9:16',
          title: 'ANTIGRAVITY STUDIO CORE',
          themeColor: '#00F5FF',
        }}
      />

      {/* 16:9 Standard YouTube */}
      <Composition
        id="Studio-Landscape-16x9"
        component={StudioMasterScene}
        durationInFrames={durationInFrames}
        fps={fps}
        width={ASPECT_CONFIGS['16:9'].width}
        height={ASPECT_CONFIGS['16:9'].height}
        defaultProps={{
          aspectRatio: '16:9',
          title: 'ANTIGRAVITY STUDIO CORE',
          themeColor: '#FF0055',
        }}
      />

      {/* 1:1 Square Feed */}
      <Composition
        id="Studio-Square-1x1"
        component={StudioMasterScene}
        durationInFrames={durationInFrames}
        fps={fps}
        width={ASPECT_CONFIGS['1:1'].width}
        height={ASPECT_CONFIGS['1:1'].height}
        defaultProps={{
          aspectRatio: '1:1',
          title: 'ANTIGRAVITY STUDIO CORE',
          themeColor: '#FFE600',
        }}
      />

      {/* 4:5 Feed Portrait */}
      <Composition
        id="Studio-Feed-4x5"
        component={StudioMasterScene}
        durationInFrames={durationInFrames}
        fps={fps}
        width={ASPECT_CONFIGS['4:5'].width}
        height={ASPECT_CONFIGS['4:5'].height}
        defaultProps={{
          aspectRatio: '4:5',
          title: 'ANTIGRAVITY STUDIO CORE',
          themeColor: '#00FF66',
        }}
      />
    </>
  );
};
