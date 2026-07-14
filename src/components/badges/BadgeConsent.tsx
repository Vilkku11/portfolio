import { BadgeConsentProps } from "../../Types";
import ProjectLink from "../projectLink/ProjectLink";
import { FaCertificate } from "react-icons/fa";

import "./Badges.css";

const BadgeConsent = ({ onAccept }: BadgeConsentProps) => {
  return (
    <div className="badge-consent-card">
      <p>
        Badges are verified through Credly and loaded from their servers on request.
      </p>
      <p>
        No data is fetched until you click below.
      </p>

      <div className="badge-actions">
        <button
          className="badge-button"
          onClick={onAccept}
        >
          Load badges
        </button>
        <ProjectLink
          url="https://www.credly.com/users/william-reima/badges/credly"
          label="View Credly profile"
          icon={FaCertificate} />
      </div>
    </div>
  )
}

export default BadgeConsent;
