import { useRef } from "react";

import Curve from "./components/curve/Curve";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";

import ParagraphWords from "./components/paragraph/ParagraphWords";
import SlotText from "./components/slotText/SlotText";
import Section from "./components/section/Section";

import { SlotTextItem } from "./components/slotText/SlotText";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  // "I'm a [adjective] innovator with a passion for technology."
  const slotTextWords: SlotTextItem[] = [
    { text: "Driven", color: "#FF5733" },
    { text: "Fueled", color: "#3312D3" },
    { text: "Inspired", color: "#12D333" },
    { text: "Ambitious", color: "#D32212" },
    { text: "Motivated", color: "#FF5729" },
    { text: "Determined", color: "#FF5533" },
  ];

  return (
    <div className="wrapper">
      <div className="background">
        <RainEffect />
      </div>
      <Header />
      <div className="content">
        <h1 className="gray-box">Hey There!</h1>
        <h1 className="gray-box">
          <span className="block-text">I'm</span>
          <SlotText words={slotTextWords} /> innovator with a passion for
          technology
        </h1>
        <p>Hey there! You found over here!</p>
        <h2>
          As a software engineer, I'm <SlotText words={slotTextWords} /> to
          continuously learn and adapt to new technologies. My enthusiasm for
          problem-solving fuels my desire to stay ahead of the curve, whether
          it's mastering a new programming language or finding innovative
          solutions to complex challenges. This commitment to growth and
          excellence is at the core of everything I do, and I strive to bring
          this same energy and curiosity to every project I undertake.
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
