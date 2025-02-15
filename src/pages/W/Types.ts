import { ReactNode } from "react";

export type DynamicWords = {
  word: string;
  len: number;
};

export type Project = {
  title: string;
  description: ReactNode;
  image: string;
  link: string;
  color: string;
};

export type SectionLink = {
  name: string;
  href: string;
};

export type SingleWord = {
  word: string;
  range: [start: number, end: number];
  progress: any;
};

export type RainDrop = {
  left: string;
  top: string;
  animationDelay: string;
};

export type RainContainerStyle = React.CSSProperties & {
  "--container-height": string;
};

export type ImageViewProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image: string;
};

// Cursor.tsx

export type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export type Variant = {
  x: number;
  y: number;
  height: number;
  width: number;
  offset: number;
  transition: {
    duration: number;
    ease: string;
  };
  mixBlendMode?: MixBlendMode;
};

// Store types

export type VariantStore = {
  currentVariant: string;
  setVariant: (variantName: string) => void;
};

export type ActiveSectionStore = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export type ImageOpenStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image: string;
  setImage: (image: string) => void;
};
