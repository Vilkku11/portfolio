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
    <div className="min-h-screen bg-black">
      <div className="flex-col text-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center inline-block mt-80 text-white text-9xl font-mono "
        >
          Welcome!
        </h1>
      </div>
      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
};

export default Portfolio;
