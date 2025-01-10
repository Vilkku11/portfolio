import { useRef } from "react";

import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";

import ParagraphWords from "./components/paragraph/ParagraphWords";
import SlotText from "./components/slotText/SlotText";
import Projects from "./components/projects/Projects";
import SectionObserver from "./components/sectionObserver/SectionObserver";

import { SlotTextItem } from "./components/slotText/SlotText";

import Footer from "./components/footer/Footer";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  /* const slotTextWords: SlotTextItem[] = [
    { text: "Driven", color: "#FF5733" },
    { text: "Fueled", color: "#3312D3" },
    { text: "Inspired", color: "#12D333" },
    { text: "Ambitious", color: "#D32212" },
    { text: "Motivated", color: "#FF5729" },
    { text: "Determined", color: "#FF5533" },
  ];*/

  return (
    <div className="wrapper">
      <div className="background">
        <RainEffect />
      </div>
      <Header />
      <div ref={stickyElement} className="start-content" id="init">
        <h1>Hey There!</h1>
        <p className="start-content-text">
          Last year SWE student ready to tackle new challenges
        </p>
        <SectionObserver sectionName="About me" />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
