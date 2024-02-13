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
    <div className="top-0 left-0 fixed w-full min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" max-w-max mt-80 text-white text-9xl font-mono "
        >
          Welcome!
        </h1>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="max-w-max mt-20 text-white font-mono"
        >
          text here and a bit more moremo remo ore more moremo remo ore more
          moremo remo ore more moremo remo ore
        </p>
      </div>
      <Cursor cursorVariant={cursorVariant} />
    </div>
  );
};

export default Portfolio;
