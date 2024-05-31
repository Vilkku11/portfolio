import { useState, useRef } from "react";

import Curve from "./components/curve/curve/Curve";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="background">
      <div className="item-container">
        <h1>Welcome!</h1>
      </div>
      <Curve />
    </div>
  );
};

export default Portfolio;
