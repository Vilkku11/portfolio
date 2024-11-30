export type Project = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: "",
    description: "This is a simple test description",
    src: "picture",
    link: "https://github.com/Vilkku11/netspeed",
    color: "#977F6D",
  },
  {
    title: "Autoclicker",
    description:
      "A cross-platform autoclicker built using the Tauri framework, offering advanced automation features such as customizable clicking, key holding, and precise mouse movement.",
    src: "secondpicture",
    link: "https://github.com/Vilkku11/autoclicker",
    color: "#978F6D",
  },
  {
    title: "test 3",
    description: "This is the third iteem!",
    src: "thirdPicture",
    link: "Link to project",
    color: " #3842d9",
  },
];
