"use client";

import React, { useState, useRef } from "react";

// components
import SwitchObject from "./SwitchObject";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";

export default function IntroSection() {
  const splineRef = useRef<SplineApplication | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleRemoveIntro = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <section
      id="intro-section"
      className="relative min-h-screen"
      data-lenis-prevent
      data-lenis-prevent-wheel
    >
      <SwitchObject splineRef={splineRef} onRemoveIntro={handleRemoveIntro} />
      <p className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Click Here !
      </p>
    </section>
  ) : null;
}
