import { useRef } from "react";

import Curve from "./components/curve/Curve";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";

import ParagraphWords from "./components/paragraph/ParagraphWords";
import SlotText from "./components/slotText/SlotText";
import Section from "./components/section/Section";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  // "I'm a [adjective] innovator with a passion for technology."
  const slotTextWords: string[] = [
    "Driven",
    "Fueled",
    "Inspired",
    "Ambitious",
    "Motivated",
    "Determined",
  ];

  return (
    <div className="wrapper">
      <div className="background">
        <RainEffect />
      </div>
      <Header />
      <div className="content">
        <h1>Welcome!</h1>
        <h1>Hey There!</h1>
        <h1>I'm adjective innovator</h1>
        <h1>with a passion for technology</h1>
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
