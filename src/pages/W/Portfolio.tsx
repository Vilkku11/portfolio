import { useRef } from "react";

import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";
import SlotText from "./components/slotText/SlotText";
import Projects from "./components/projects/Projects";
import SectionObserver from "./components/sectionObserver/SectionObserver";
import Footer from "./components/footer/Footer";
import ImageView from "./components/imageview/ImageView";
import Badges from "./components/badges/Badges";

import { dynamicWords } from "./Data";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="wrapper">
      <div className="background">
        <RainEffect />
      </div>
      <Header />
      <div ref={stickyElement} className="start-content" id="init">
        <h1 className="start-content-header">Hey There!</h1>
        <span className="start-content-text">
          Software engineering graduate of Tampere University of Applied
          Sciences, driven by <SlotText words={dynamicWords} /> and eager to
          make an impact.
        </span>
        <SectionObserver sectionName="About me" threshold={0.5} />
      </div>
      <Projects />
      <Badges />
      <Footer />
      <ImageView />
    </div>
  );
};

export default Portfolio;
