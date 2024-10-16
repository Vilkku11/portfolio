export type Project = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: "test 1",
    description: "This is a small scale description...",
    src: "picture",
    link: "link to github project",
    color: "#977F6D",
  },
  {
    title: "test 2",
    description: "this is the second item",
    src: "secondpicture",
    link: "link to project",
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
