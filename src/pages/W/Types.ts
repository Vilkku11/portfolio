export type DynamicWords = {
  word: string;
  len: number;
};

export type Project = {
  title: string;
  description: string;
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
