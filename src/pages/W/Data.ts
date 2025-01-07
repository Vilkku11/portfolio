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

export const projects: Project[] = [
  {
    title: "test title",
    description: "This is a simple test description",
    image: "picture",
    link: "https://github.com/Vilkku11/netspeed",
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
] as const;

export const SectionLinks: SectionLink[] = [
  { name: "About me", href: "#init" },
  { name: "Projects", href: "#projects" },
  { name: "End", href: "#end" },
] as const;
