import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import { useVariantStore } from "../../store/store";

import "./Cursor.css";

/*
  Custom cursor on the page, idea to invert colors when moved over items
*/

const Cursor = ({ stickyElement }: { stickyElement: any }) => {
  const { currentVariant, setVariant } = useVariantStore();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const manageMouseOver = (): void => {
    setIsHovered(true);
    setVariant("text");
  };

  const manageMouseLeave = (): void => {
    setIsHovered(false);
    setVariant("default");
  };

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const mouseMove = (event: MouseEvent): void => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const variants: Variants = {
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
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={currentVariant}
      style={{ offset: 0 }}
    />
  );
};

export default Cursor;
