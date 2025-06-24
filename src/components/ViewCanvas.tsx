"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import FloatingCan from "@/components/FloatingCan";
import { SodaCan } from "@/components/SodaCan";

interface ViewCanvasProps {}

export default function ViewCanvas({}: ViewCanvasProps) {
  return (
    <Canvas
      shadows
      camera={{
        fov: 30,
      }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <FloatingCan>
        <SodaCan />
        <Environment environmentIntensity={1.5} files="/hdr/lobby.hdr" />
      </FloatingCan>
      <ambientLight intensity={0.5} />
    </Canvas>
  );
}
