"use client";

import { useScreenSize } from "@/hooks/useSceenSize";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  useScreenSize();

  return <>{children}</>;
}
