import { create } from "zustand";

interface CursorState {
  cursorText: string;
  cursorVariant: string;
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  cursorText: "",
  cursorVariant: "default",
  setCursorText: (text) => set({ cursorText: text }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
