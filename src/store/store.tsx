import { create } from "zustand";

type VariantStore = {
  currentVariant: string;
  setVariant: (variantName: string) => void;
};

export const useVariantStore = create<VariantStore>((set) => ({
  currentVariant: "default",
  setVariant: (variantName: string): void => {
    set({ currentVariant: variantName });
  },
}));
