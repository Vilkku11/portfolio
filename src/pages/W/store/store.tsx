import { create } from "zustand";

import { sectionLinks } from "../Data";

import {
  VariantStore,
  ActiveSectionStore,
  ImageOpenStore,
  ThemeStore,
} from "../Types";

export const useVariantStore = create<VariantStore>((set) => ({
  currentVariant: "default",
  setVariant: (variantName: string): void => {
    set({ currentVariant: variantName });
  },
}));

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: sectionLinks[0].name,
  setActiveSection: (section: string) => set({ activeSection: section }),
}));

export const useImageOpenStore = create<ImageOpenStore>((set) => ({
  isOpen: false,
  setIsOpen: (newValue: boolean): void => {
    set({ isOpen: newValue });
  },
  image: "",
  setImage: (newImage: string): void => {
    set({ image: newImage });
  },
}));

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "black",
  setTheme: (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));
