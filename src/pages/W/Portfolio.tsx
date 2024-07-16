import { useRef } from "react";

import Curve from "./components/curve/Curve";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import RainEffect from "./components/rain/RainEffect";

import ParagraphWords from "./components/paragraph/ParagraphWords";
import SlotText from "./components/SlotText";

import "./Portfolio.css";

const Portfolio = () => {
  const stickyElement = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="background">
      <RainEffect />
      <Header />
      <div className="item-container">
        <h1 ref={stickyElement}>Welcome!</h1>
        <ParagraphWords text="test 12309 12430 91290 129 00492" />
        <div className="slot-text">
          this is a <SlotText />. to see how this is functioning
        </div>
      </div>
      <div className="other-container">
        <Curve />
        <Cursor stickyElement={stickyElement} />
      </div>
    </div>
  );
};

export default Portfolio;
