import { FaGithub } from "react-icons/fa";

import "./ProjectLink.css";

/*
  Projectlink component for github repo links
*/

const ProjectLink = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      className="github-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={24} />
      <span>Project in GitHub</span>
    </a>
  );
};

export default ProjectLink;
