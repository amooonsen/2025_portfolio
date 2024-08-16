"use client";

import { useRef } from "react";
import { useScreenSize } from "@/hooks/useSceenSize";
import CustomCursor from "@/components/objects/CustomCursor";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const stickyElement = useRef(null);
  useScreenSize();

  return (
    <>
      {children}
      <CustomCursor stickyElement={stickyElement} />
      <div ref={stickyElement}></div>
    </>
  );
}
