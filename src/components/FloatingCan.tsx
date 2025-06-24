"use client";

import type { ReactNode, Ref } from "react";
import type { SodaCanProps } from "@/components/SodaCan";

import { Float } from "@react-three/drei";

import { SodaCan } from "@/components/SodaCan";

interface FloatingCanProps {
  ref?: Ref<HTMLElement>;
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
}

export default function FloatingCan({
  ref,
  flavor = "blackCherry",
  floatSpeed = 1.5,
  rotationIntensity = 1,
  floatIntensity = 1,
  floatingRange = [-0.1, 0.1],
  children,
  ...props
}: FloatingCanProps) {
  return (
    <group ref={ref} {...props}>
      <Float
        floatIntensity={floatIntensity}
        floatingRange={floatingRange}
        rotationIntensity={rotationIntensity}
        speed={floatSpeed}
      >
        {children}
        <SodaCan flavor={flavor} />
      </Float>
    </group>
  );
}
