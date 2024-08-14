"use client";

import React, { useRef } from "react";

// components
import SwitchObject from "../objects/SwitchObject";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";

export default function IntroSection() {
  const splineRef = useRef<SplineApplication | null>(null);

  return (
    <section>
      <SwitchObject splineRef={splineRef} />
    </section>
  );
}
