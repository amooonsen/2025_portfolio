"use client";

import React, { useRef } from "react";

// components
import SwitchObject from "../objects/SwitchObject";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";

export default function IntroSection() {
  const splineRef = useRef<SplineApplication | null>(null);

  return (
    <section className="relative min-h-screen">
      <SwitchObject splineRef={splineRef} />
      <p className="absolute z-10 top-1/2 left-1/2">Click Here !</p>
    </section>
  );
}
