import { create } from "zustand";
import { MutableRefObject } from "react";

interface CursorState {
  cursorText: string;
  cursorVariant: string;
  cursorRef: MutableRefObject<HTMLDivElement | Element | null>;
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
  setCursorRef: (ref: MutableRefObject<HTMLDivElement | Element | null>) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  cursorText: "",
  cursorVariant: "default",
  cursorRef: { current: null },
  setCursorText: (text) => set({ cursorText: text }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
  setCursorRef: (ref) => set({ cursorRef: ref }),
}));
