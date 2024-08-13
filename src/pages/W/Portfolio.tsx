import { useRef } from "react";

import Curve from "./components/curve/Curve";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";

import ParagraphWords from "./components/paragraph/ParagraphWords";
import SlotText from "./components/SlotText";
import Section from "./components/section/Section";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="wrapper">
      <div className="background">
        <RainEffect />
      </div>
      <Header />
      <div className="content">
        <h1>lol</h1>
      </div>
    </div>
  );
};

export default Portfolio;
