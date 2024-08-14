"use client";

import React from "react";
import Spline from "@splinetool/react-spline/next";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";

interface SwitchObjectProps {
  splineRef: React.MutableRefObject<SplineApplication | null>;
}

const SwitchObject = (props: SwitchObjectProps) => {
  const { splineRef } = props;

  return (
    <>
      <Spline
        scene="https://prod.spline.design/N1FU0Xb8BYqhe8fY/scene.splinecode"
        onLoad={(spline: SplineApplication) => {
          if (spline) splineRef.current = spline;
        }}
      />
      <p>Click Here !</p>
      <button>움직이기</button>
    </>
  );
};

export default SwitchObject;
