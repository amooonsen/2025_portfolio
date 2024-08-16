import React from "react";

// spline
import { Application as SplineApplication } from "@splinetool/runtime";
import Spline, { SplineEvent } from "@splinetool/react-spline";

// store
import { useCursorStore } from "@/store/cursorStore";

// animation
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// utils
import { delay } from "@/lib/utils";

interface SwitchObjectProps {
  splineRef: React.MutableRefObject<SplineApplication | null>;
  onRemoveIntro: () => void;
}

const SwitchObject = (props: SwitchObjectProps) => {
  const { splineRef, onRemoveIntro } = props;
  const { cursorRef, setCursorText, setCursorVariant } = useCursorStore();
  const controls = useAnimation();

  async function handleOnClick(e: SplineEvent) {
    const mainContainer = document.querySelector(".main-container") as HTMLElement;
    document.documentElement.classList.remove("dark");
    await delay(500);

    if (mainContainer) {
      window.scroll({
        top: mainContainer.offsetTop,
        left: 0,
        behavior: "smooth",
      });

      await delay(1000);

      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });

      document.body.removeAttribute("style");
      document.body.removeAttribute("data-lenis-prevent");
      document.body.removeAttribute("data-lenis-prevent-wheel");
      onRemoveIntro();
    }
  }
  return (
    <AnimatePresence>
      <Spline
        ref={cursorRef}
        className="absolute opacity-30"
        scene="https://prod.spline.design/N1FU0Xb8BYqhe8fY/scene.splinecode"
        onLoad={(spline: SplineApplication) => {
          if (spline) splineRef.current = spline;
        }}
        onSplineMouseDown={(e: SplineEvent) => handleOnClick(e)}
      />
    </AnimatePresence>
  );
};

export default SwitchObject;
