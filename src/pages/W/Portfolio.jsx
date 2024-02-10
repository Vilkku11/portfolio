import { useState } from "react";

import Cursor from "./components/Cursor";
const Portfolio = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => {
    setCursorVariant("text");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="container relative mx-auto">
      <div className="fixed inset-0 bg-black opacity-100">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mt-80 text-white text-9xl font-mono"
        >
          Welcome!
        </h1>
      </div>
      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
};

export default Portfolio;
