import { useEffect } from "react";
import { badges } from "../../Data";

const BadgeGallery = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="badge-gallery">
      {badges.map((badge) => (
        <div
          key={badge.id}
          data-iframe-width="250"
          data-iframe-height="370"
          data-share-badge-id={badge.id}
          data-share-badge-host="https://www.credly.com"
        />
      ))}
    </div>
  );
};

export default BadgeGallery;
