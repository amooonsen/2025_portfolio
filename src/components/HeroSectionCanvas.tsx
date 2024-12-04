"use client";

import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Float, Environment, ContactShadows} from "@react-three/drei";

// 여기에 도넛만 띄워주기

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
          {/* <Environment preset="city" /> */}
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Canvas>
      </Suspense>
    </div>
  );
}

// https://codesandbox.io/p/sandbox/4j2q2?file=%2Fsrc%2FApp.js%3A47%2C1-78%2C2
