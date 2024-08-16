"use client";

import React from "react";

// animation
import { motion } from "framer-motion";

// lib
import { useInView } from "react-intersection-observer";

// constants
import { maskTextAnimation } from "@/constants/maskTextConstants";

// types
import { TextOptions } from "@/types/TypeProps";

type Props = {
  children: React.ReactNode;
  visibleValue?: number;
  containerClass?: string;
  text: TextOptions;
};

export default function MaskText({ children, visibleValue = 0.75, containerClass, text }: Props) {
  const { ref, inView } = useInView({
    threshold: visibleValue,
    triggerOnce: true,
  });

  if (!text) {
    console.error("텍스트 옵션이 필수적으로 필요합니다.");
    return null;
  }

  const { fontSize, weight } = text;

  return (
    <div ref={ref} className={`${containerClass} overflow-hidden leading-snug`}>
      <motion.p
        variants={maskTextAnimation}
        initial="initial"
        animate={inView ? "enter" : ""}
        style={{ fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize }}
        className={weight ? `font-${weight}` : ""}
      >
        {children}
      </motion.p>
    </div>
  );
}
