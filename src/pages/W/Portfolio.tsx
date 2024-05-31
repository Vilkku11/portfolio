import { useState, useRef } from "react";

import Curve from "./components/curve/Curve";
import Cursor from "./components/cursor/Cursor";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="background">
      <div className="item-container">
        <h1 ref={stickyElement}>Welcome!</h1>
      </div>
      <Curve />
      <Cursor stickyElement={stickyElement} />
    </div>
  );
};

export default Portfolio;
