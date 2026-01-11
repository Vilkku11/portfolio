import { useRef, useEffect, useState } from "react";
import { MotionValue, useScroll } from "framer-motion";

import Card from "./Card/Card";
import SectionObserver from "../sectionObserver/SectionObserver";
import { useActiveSectionStore } from "../../store/store";

import { Project } from "../../Types";
import { projects } from "../../Data";

import "./Projects.css";

/*
  Container for project cards
*/

const Projects = () => {
  const { activeSection } = useActiveSectionStore();
  const container = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  const itemRange: number = 1 / projects.length;

  const [shouldAnimate, setShouldAnimate] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setShouldAnimate(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1
        className={`projects-header ${
          activeSection === "Projects" ? "sticky" : "not-sticky"
        }`}
      >
        Projects
      </h1>
      <div ref={container} className="projects-container" id="projects">
        {projects.map((project: Project, index: number) => {
          const targetScale: number = shouldAnimate
            ? 1 - (projects.length - index) * 0.05
            : 1;
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
        <SectionObserver sectionName="Projects" threshold={0.2} />
      </div>
    </div>
  );
};

export default Projects;
