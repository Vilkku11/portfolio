import { describe, it, expect, beforeEach } from "vitest";
import { setState } from "zustand";
import {
  useVariantStore,
  useActiveSectionStore,
  useImageOpenStore,
  useThemeStore,
} from "./store";
import { sectionLinks } from "../Data";

describe("Zustand stores", () => {
  beforeEach(() => {
    useVariantStore.setState(useVariantStore.getInitialState(), true);
    useActiveSectionStore.setState(
      useActiveSectionStore.getInitialState(),
      true,
    );
    useImageOpenStore.setState(useImageOpenStore.getInitialState(), true);
    useThemeStore.setState(useThemeStore.getInitialState(), true);
  });

  describe("useVariantStore", () => {
    it("starts with default variant", () => {
      expect(useVariantStore.getState().currentVariant).toBe("default");
    });

    it("updates variant when setVariant is called", () => {
      useVariantStore.getState().setVariant("hover");

      expect(useVariantStore.getState().currentVariant).toBe("hover");
    });
  });

  describe("useActiveSectionStore", () => {
    it("initializes with first section link", () => {
      expect(useActiveSectionStore.getState().activeSection).toBe(
        sectionLinks[0].name,
      );
    });

    it("updates active section", () => {
      useActiveSectionStore.getState().setActiveSection("Projects");

      expect(useActiveSectionStore.getState().activeSection).toBe("Projects");
    });
  });

  describe("useImageOpenStore", () => {
    it("is closed by default", () => {
      const state = useImageOpenStore.getState();

      expect(state.isOpen).toBe(false);
      expect(state.image).toBe("");
    });

    it("opens image modal", () => {
      useImageOpenStore.getState().setIsOpen(true);

      expect(useImageOpenStore.getState().isOpen).toBe(true);
    });

    it("sets image source", () => {
      useImageOpenStore.getState().setImage("image.jpg");

      expect(useImageOpenStore.getState().image).toBe("image.jpg");
    });
  });

  describe("useThemeStore", () => {
    it("starts with a black theme", () => {
      expect(useThemeStore.getState().theme).toBe("Black");
    });

    it("updates the theme state", () => {
      useThemeStore.getState().setTheme("White");

      expect(useThemeStore.getState().theme).toBe("White");
    });

    it("sets data-theme attribute on document element", () => {
      useThemeStore.getState().setTheme("Gray");

      expect(document.documentElement.getAttribute("data-theme")).toBe("Gray");
    });
  });
});
