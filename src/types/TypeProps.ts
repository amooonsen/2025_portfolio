export type LayoutProps = {
  children: React.ReactNode;
  layout?: "grid" | "flex";
  isFull?: boolean;
  margin?: number;
  isTransition?: boolean;
  gap?: Partial<GapType>;
};

type GapType = {
  rowGap: number;
  columnGap: number;
};

export type TextOptions = {
  weight?: "bold" | "medium" | "semibold" | "normal";
  fontSize: number;
};
