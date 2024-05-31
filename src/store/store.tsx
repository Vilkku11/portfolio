import { create } from "zustand";

type VariantStore = {
  currentVariant: string;
  setVariant: (variantName: string) => void;
};

const useVariantStore = create<VariantStore>((set) => ({
  currentVariant: "default",
  setVariant: (variantName: string): void => {
    set({ currentVariant: variantName });
  },
}));
