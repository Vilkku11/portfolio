import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SlotText.css";

const SlotText = ({ words }: { words: string[] }) => {
  //const words: string[] = ["test1", "test2", "test3", "test4"];
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentWord((prevIndex) => {
        if (prevIndex == words.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="slot-text">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord]}
          initial={{ opacity: 0, y: 20, width: 90 }}
          animate={{ opacity: 1, y: 0, width: "auto" }}
          exit={{ opacity: 0, y: -20, width: 90 }}
          transition={{ duration: 0.5 }}
          layout
          style={{
            display: "inline-block",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>{" "}
    </div>
  );
};

export default SlotText;