import BadgeConsent from "./BadgeConsent";
import BadgeGallery from "./BadgeGallery";

import { useState } from "react";

import "./Badges.css";

const Badges = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  return (
    <section className="badges-section">
      <h1 className="badges-header">Badges</h1>

      {hasConsent ? (
        <BadgeGallery />
      ) : (
        <BadgeConsent onAccept={() => setHasConsent(true)} />
      )}
    </section>
  )
}

export default Badges;
