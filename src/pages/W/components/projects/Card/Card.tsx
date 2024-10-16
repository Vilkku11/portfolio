import { motion, useTransform } from "framer-motion";
import { Project } from "../../../Data";
import "./Card.css";

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
  const scale: any = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="project-card-container">
      <motion.div
        style={{
          scale,
          backgroundColor: project.color,
          top: `calc(-10% + ${index * 20}px)`,
        }}
        className="project-card-style"
      >
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.link}</p>
      </motion.div>
    </div>
  );
};

export default Card;
