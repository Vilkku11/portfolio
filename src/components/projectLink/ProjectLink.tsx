import { FaGithub } from "react-icons/fa";

import "./ProjectLink.css";
import { ProjectLinkProps } from "../../Types";

/*
  Projectlink component for github repo links
*/

const ProjectLink = ({ url, label = "Project in Github", icon: Icon = FaGithub }: ProjectLinkProps) => {
  return (
    <a
      href={url}
      className="github-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
      <span>{label}</span>
    </a>
  );
};

export default ProjectLink;
