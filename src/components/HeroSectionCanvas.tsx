"use client";

import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Float, Environment, ContactShadows} from "@react-three/drei";

export default function HeroSectionCanvas() {
  return (
    <div className="h-[100vh] w-full">
      <Suspense fallback={null}>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 45,
          }}
        >
          <ambientLight intensity={1} />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Canvas>
      </Suspense>
    </div>
  );
}
