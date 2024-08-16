"use client";

import { useRef } from "react";
import { useScreenSize } from "@/hooks/useSceenSize";

// components
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "@/components/objects/CustomCursor";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const stickyElement = useRef(null);
  useScreenSize();

  return (
    <>
      <Header ref={stickyElement} />
      {children}
      <CustomCursor stickyElement={stickyElement} />
      <Footer />
    </>
  );
}
