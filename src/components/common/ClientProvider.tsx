"use client";

import { useRef, useEffect } from "react";
import { useScreenSize } from "@/hooks/useSceenSize";
import CustomCursor from "@/components/objects/CustomCursor";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const stickyElement = useRef(null);
  useScreenSize();

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      {children}
      <CustomCursor stickyElement={stickyElement} />
      <div ref={stickyElement}></div>
    </>
  );
}
