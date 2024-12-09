import { create } from "zustand";
import type { SectionLink } from "../pages/W/Data";
import { SectionLinks } from "../pages/W/Data";

type VariantStore = {
  currentVariant: string;
  setVariant: (variantName: string) => void;
};

type ActiveSectionStore = {
  activeSection: SectionLink;
  setActiveSection: (section: SectionLink) => void;
};

export const useVariantStore = create<VariantStore>((set) => ({
  currentVariant: "default",
  setVariant: (variantName: string): void => {
    set({ currentVariant: variantName });
  },
}));

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: SectionLinks[0],
  setActiveSection: (section: SectionLink) => set({ activeSection: section }),
}));
