"use client";
import { useMemo } from "react";

// hooks
import { useMousePosition } from "@/hooks/useMousePosition";

// store
import { useCursorStore } from "@/store/cursorStore";

// animation
import { motion } from "framer-motion";

export default function CustomCursor() {
  const { cursorText, cursorVariant, setCursorText, setCursorVariant } = useCursorStore();

  const { x, y } = useMousePosition();

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (x !== null) {
    mouseXPosition = x;
  }

  if (y !== null) {
    mouseYPosition = y;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 12,
      width: 12,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: x,
      y: y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    clickMe: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: x - 32,
      y: y - 32,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <motion.div
      variants={variants}
      className="fixed z-[100] top-0 left-0 flex flex-row content-center justify-center w-3 h-3 bg-primary rounded-full text-base text-white pointer-events-none"
      animate={cursorVariant}
      transition={spring}
    >
      <span className="pointer-events-none flex-auto m-auto text-inherit">{cursorText}</span>
    </motion.div>
  );
}
