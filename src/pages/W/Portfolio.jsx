import { useState, useRef } from "react";
import { IconMenu2 } from "@tabler/icons-react";

import Cursor from "./components/cursor/Cursor";
import Footer from "./components/Footer";
import ProjectShowCase from "./components/ProjectShowCase";
import Paragraph from "./components/Paragraph";
import ParagraphWords from "./components/ParagraphWords";
import Curve from "./components/curve/Curve";

import "./Portfolio.css";

const Portfolio = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const stickyElement = useRef(null);

  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="background">
      <div className="item-container">
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Welcome!
        </h1>
        <div className="">
          <IconMenu2
            ref={stickyElement}
            className=""
            //ref={stickyElement}
            stroke={2}
            color="white"
          />
          <div className=""></div>
        </div>

        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="">
          A small amount of text, maybe some introduction text or something like
          that. Maybe a bit what kind of things could be added here on this page
          or something like that.
        </p>
        <Paragraph
          value="          A small amount of text, maybe some introduction text or something like
          that. Maybe a bit what kind of things could be added here on this page
          or something like that."
        />
        <ParagraphWords value="A small amount of text, maybe some introduction text or something like that. Maybe a bit what kind of things could be added here on this page or something like that." />

        <h1 className="" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          My projects
        </h1>
        <Curve />
        <ProjectShowCase />
      </div>
      <Footer />
      <Cursor
        cursorVariant={cursorVariant}
        setCursorVariant={setCursorVariant}
        stickyElement={stickyElement}
      />
    </div>
  );
};

export default Portfolio;
