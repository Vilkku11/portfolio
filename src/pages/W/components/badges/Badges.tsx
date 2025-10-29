import { badges } from "../../Data";

import "./Badges.css";

const Badges = () => {
  return (
    <section className="badge-section">
      <h1 className="badge-header">Badges</h1>
      <div className="badge-grid">
        {badges.map((badge, index) => (
          <a
            key={index}
            href={badge.badgeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <img
              src={badge.badgeImage}
              alt={badge.altText}
              className="badge-image"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Badges;
