import { useState, useRef, useEffect } from "react";
import { useThemeStore } from "../../store/store";
import { themes } from "../../Data";
import { BsPaletteFill } from "react-icons/bs";

import "./ThemeSwitcher.css";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="theme-switcher" ref={menuRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {themes.map((themeName) => (
              <button
                key={themeName}
                className={`theme-option ${
                  themeName === theme ? "theme-option-active" : "theme-option"
                }`}
                onClick={() => setTheme(themeName)}
              >
                {themeName}
                {themeName === theme && (
                  <motion.span
                    className="theme-option-background"
                    layoutId="activeTheme"
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                  ></motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button className="theme-button" onClick={() => setOpen(!open)}>
        <BsPaletteFill size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
