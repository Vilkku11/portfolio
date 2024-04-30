import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      offset: 32,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      offset: 75,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const mouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    document.documentElement.classList.add("hide-cursor");

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      style={{ offset: 0 }}
      //style={{
      // left: mousePosition.x - offset,
      // top: mousePosition.y - offset,
      //}}
    />
  );
};

export default Cursor;
