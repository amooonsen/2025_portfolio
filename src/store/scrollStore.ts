import create from "zustand";
import Lenis from "@studio-freight/lenis";

// Lenis store 정의
export const useLenisStore = create((set, get) => ({
  lenis: null,
  initializeLenis: () => {
    const lenis = new Lenis({
      lerp: 0.1,
    });
    set({ lenis });
  },
  destroyLenis: () => {
    get().lenis?.destroy();
    set({ lenis: null });
  },
  preventScroll: (shouldPrevent) => {
    if (shouldPrevent) {
      get().lenis?.preventScroll(true);
    } else {
      get().lenis?.preventScroll(false);
    }
  },
}));
