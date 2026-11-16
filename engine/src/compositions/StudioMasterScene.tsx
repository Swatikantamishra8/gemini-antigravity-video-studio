import React, { useRef, useMemo } from 'react';
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
} from 'remotion';
import { ThreeCanvas } from '@remotion/three';
import * as THREE from 'three';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing';

// Procedural Deterministic Mesh inside ThreeCanvas
const Deterministic3DScene: React.FC<{ progress: number; frame: number }> = ({ progress, frame }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Strictly driven by Remotion frame progress
  const rotationY = progress * Math.PI * 4;
  const rotationX = Math.sin(progress * Math.PI * 2) * 0.5;
  const scale = 1.0 + Math.sin(progress * Math.PI * 6) * 0.15;

  // Cinematic chromatic aberration burst during hook (frames 0 to 25)
  const chromaStrength = interpolate(frame, [0, 8, 25], [0.006, 0.003, 0.0005], {
    extrapolateRight: 'clamp',
  });
  const chromaOffset = useMemo(() => new THREE.Vector2(chromaStrength, chromaStrength), [chromaStrength]);

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 7]} intensity={1.8} />
      <pointLight position={[-5, -5, -2]} color="#00F5FF" intensity={2.5} />
      <pointLight position={[5, -5, 2]} color="#FF0055" intensity={1.5} />

      <mesh
        ref={meshRef}
        rotation={[rotationX, rotationY, 0]}
        scale={[scale, scale, scale]}
      >
        <torusKnotGeometry args={[1.5, 0.45, 128, 32]} />
        <meshStandardMaterial
          color="#00F5FF"
          roughness={0.12}
          metalness={0.88}
          wireframe={false}
          emissive="#003344"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Cinematic Postprocessing Pass */}
      <EffectComposer autoClear={false}>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.8}
          intensity={1.2}
          mipmapBlur
        />
        <ChromaticAberration offset={chromaOffset} radialModulation={false} modulationOffset={0} />
        <Vignette eskil={false} offset={0.15} darkness={0.9} />
      </EffectComposer>
    </>
  );
};

export interface StudioMasterSceneProps {
  aspectRatio: '9:16' | '16:9' | '1:1' | '4:5';
  title: string;
  themeColor: string;
}

export const StudioMasterScene: React.FC<StudioMasterSceneProps> = ({
  aspectRatio,
  title,
  themeColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();

  // Deterministic spring animation for title pop-in
  const titleEntrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  // Safe-zone calculation for 9:16 vertical exports
  const isVertical = aspectRatio === '9:16';
  const bottomSafeZone = isVertical ? height * 0.22 : height * 0.08;
  const rightSafeZone = isVertical ? width * 0.15 : width * 0.05;

  // Frame progress 0 -> 1
  const progress = frame / durationInFrames;

  // Kinetic camera zoom
  const cameraZ = interpolate(frame, [0, fps * 2, durationInFrames], [6, 4.5, 4.0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a0f',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* 3D Deterministic WebGL Layer */}
      <ThreeCanvas
        width={width}
        height={height}
        camera={{ position: [0, 0, cameraZ], fov: 45 }}
      >
        <Deterministic3DScene progress={progress} frame={frame} />
      </ThreeCanvas>

      {/* Foreground Kinetic Typography Layer */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          paddingBottom: `${bottomSafeZone}px`,
          paddingRight: `${rightSafeZone}px`,
        }}
      >
        <div
          style={{
            transform: `scale(${titleEntrance})`,
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
            textAlign: 'center',
            padding: '24px 36px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            border: `2px solid ${themeColor}`,
            boxShadow: `0 0 40px ${themeColor}44`,
          }}
        >
          <div
            style={{
              fontSize: isVertical ? '48px' : '56px',
              fontWeight: 900,
              letterSpacing: '2px',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: '12px',
              fontSize: isVertical ? '22px' : '26px',
              fontWeight: 600,
              color: themeColor,
              letterSpacing: '4px',
            }}
          >
            {aspectRatio} • DETERMINISTIC MOTION • 60 FPS
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
