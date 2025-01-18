import { DynamicWords, Project, SectionLink } from "./Types";

export const dynamicWords: DynamicWords[] = [
  { word: "innovation", len: 10 },
  { word: "curiosity", len: 9 },
  { word: "excellence", len: 10 },
  { word: "collaboration", len: 14 },
  { word: "creativity", len: 11 },
  { word: "efficiency", len: 10 },
  { word: "adaptability", len: 14 },
  { word: "problem-solving", len: 15 },
  { word: "dedication", len: 10 },
  { word: "passion for learning", len: 20 },
];

export const projects: Project[] = [
  {
    title: "Homeassistant",
    description: "This is a simple test description",
    image: "/src/assets/homeassistant.webp",
    link: "https://github.com/Missing-Link-harkat/homeassistant",
    color: "586F7C", //"#D3D3D3",
  },
  {
    title: "Autoclicker",
    description:
      "A cross-platform autoclicker built using the Tauri framework, offering advanced automation features such as customizable clicking, key holding, and precise mouse movement.",
    image: "/src/assets/autoclicker.webp",
    link: "https://github.com/Vilkku11/autoclicker",
    color: "B8DBD9", //"#A9A9A9",
  },
  {
    title: "Netspeed",
    description: "This is the third iteem!",
    image: "/src/assets/netspeed.webp",
    link: "https://github.com/Vilkku11/netspeed",
    color: "F4F4F9 ", //" #708090",
  },
  {
    title: "Forest Haven Resort",
    description: "Project done in collaboration with IB students",
    image: "/src/assets/foresthaven.webp",
    link: "https://github.com/timosiu/Software-Project2023",
    color: "04724D", //"#36454F",
  },
  {
    title: "Portfolio",
    description:
      "You're vieweing this project right now!!! My playground to try and extend the capapbilities of webbrowsers",
    image: "",
    link: "https://github.com/timosiu/Software-Project2023",
    color: "04724D", //"#36454F",
  },
] as const;

export const SectionLinks: SectionLink[] = [
  { name: "About me", href: "#init" },
  { name: "Projects", href: "#projects" },
  { name: "End", href: "#end" },
] as const;
