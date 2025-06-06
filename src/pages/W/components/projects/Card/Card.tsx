import { useRef } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useImageOpenStore } from "../../../store/store";

import ProjectLink from "../../projectLink/ProjectLink";

import { Project } from "../../../Types";

import "./Card.css";

/*
  Specific cards of displaying projects
*/

const Card = ({
  project,
  index,
  range,
  targetScale,
  progress,
}: {
  project: Project;
  index: number;
  range: any;
  targetScale: number;
  progress: any;
}) => {
  const container = useRef<null | HTMLDivElement>(null);
  const cardScale: MotionValue = useTransform(progress, range, [
    1,
    targetScale,
  ]);
  const { setIsOpen, setImage } = useImageOpenStore();

  const OpenImage = () => {
    setImage(project.image);
    setIsOpen(true);
  };

  return (
    <div ref={container} className="project-card-container">
      <motion.div
        style={{
          scale: cardScale,
          backgroundColor: project.color,
          //backdropFilter: "blur(50px)",
          top: `calc(-10% + ${index * 20}px)`,
        }}
        className="project-card-style"
      >
        <h1 className="project-header">{project.title}</h1>
        <div className="content-divider">
          <div className="text-container">
            <p>{project.description}</p>
            <ProjectLink url={project.link} />
          </div>
          <div className="image-container">
            <img
              className="image"
              src={project.image}
              alt=""
              onClick={OpenImage}
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
