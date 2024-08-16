"use client";

import React, { useRef } from "react";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";
import Spline, { SplineEvent } from "@splinetool/react-spline";

// store
import useDarkMode from "@/store/DarkModeStore";
import { useCursorStore } from "@/store/cursorStore";

interface SwitchObjectProps {
  splineRef: React.MutableRefObject<SplineApplication | null>;
}
const className = "dark";

const SwitchObject = (props: SwitchObjectProps) => {
  const { splineRef } = props;
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { cursorRef, setCursorText, setCursorVariant } = useCursorStore();

  function handleOnClick(e: SplineEvent) {
    document.documentElement.classList.remove("dark");
  }

  console.log(cursorRef);
  return (
    <>
      <Spline
        ref={cursorRef}
        className="absolute opacity-30"
        scene="https://prod.spline.design/N1FU0Xb8BYqhe8fY/scene.splinecode"
        onLoad={(spline: SplineApplication) => {
          if (spline) splineRef.current = spline;
        }}
        onSplineMouseDown={(e: SplineEvent) => handleOnClick(e)}
      />
    </>
  );
};

export default SwitchObject;
