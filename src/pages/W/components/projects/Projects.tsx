import { useRef } from "react";
import { MotionValue, useScroll } from "framer-motion";
import Card from "./Card/Card";
import SectionObserver from "../sectionObserver/SectionObserver";
import { projects, Project } from "../../Data";
import "./Projects.css";

const Projects = () => {
  const container = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  const itemRange: number = 1 / projects.length;

  return (
    <div ref={container} className="projects-container" id="projects">
      {projects.map((project: Project, index: number) => {
        const targetScale: number = 1 - (projects.length - index) * 0.05;
        return (
          <Card
            key={index}
            index={index}
            project={project}
            range={[index * itemRange, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
      <SectionObserver sectionName="Projects" />
    </div>
  );
};

export default Projects;
