import { create } from "zustand";

interface CursorState {
  cursorText: string;
  cursorVariant: string;
  cursorRef: {
    current: HTMLDivElement | null;
  };
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
  setCursorRef: (ref: HTMLDivElement | null) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  cursorText: "",
  cursorVariant: "default",
  cursorRef: { current: null },
  setCursorText: (text) => set({ cursorText: text }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
  setCursorRef: (ref) => set((state) => ({ cursorRef: { ...state.cursorRef, current: ref } })),
}));
