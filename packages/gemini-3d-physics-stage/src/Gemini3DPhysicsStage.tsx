import React, { useRef } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

export interface PhysicsStageProps {
  cubeCount?: number;
  bloomIntensity?: number;
  gravity?: [number, number, number];
}

/**
 * Deterministic Remotion 3D Physics & Post-Processing Scene
 * Time and physics step synchronization locked directly to frame / fps
 */
const DeterministicPhysicsWorld: React.FC<{ frame: number; fps: number; count: number }> = ({
  frame,
  fps,
  count
}) => {
  const uTime = frame / fps;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} castShadow />

      {/* Static Ground */}
      <RigidBody type="fixed" position={[0, -2, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[20, 1, 20]} />
          <meshStandardMaterial color="#1a1a24" roughness={0.4} metalness={0.8} />
        </mesh>
      </RigidBody>

      {/* Procedurally positioned physics dynamic objects */}
      {Array.from({ length: count }).map((_, i) => {
        const offset = i * 0.7;
        const initialY = 4 + (i * 1.5);
        const initialX = Math.sin(offset) * 2;
        const color = i % 2 === 0 ? '#00f0ff' : '#ff0077';

        return (
          <RigidBody key={i} position={[initialX, initialY, 0]} restitution={0.7} friction={0.3}>
            <mesh castShadow rotation={[uTime * 0.5, uTime * 0.3, 0]}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.3}
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>
          </RigidBody>
        );
      })}
    </>
  );
};

export const Gemini3DPhysicsStage: React.FC<PhysicsStageProps> = ({
  cubeCount = 8,
  bloomIntensity = 1.2,
  gravity = [0, -9.81, 0]
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  return (
    <div style={{ width, height, position: 'relative', background: '#0a0a0f' }}>
      <Canvas
        shadows
        camera={{ position: [0, 3, 10], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Physics gravity={gravity} colliders="cuboid" timeStep={1 / fps}>
          <DeterministicPhysicsWorld frame={frame} fps={fps} count={cubeCount} />
        </Physics>

        {/* Cinematic Post-Processing */}
        <EffectComposer multisampling={4}>
          <Bloom luminanceThreshold={0.2} intensity={bloomIntensity} />
          <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
