import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";

type HeaderLink = {
  name: string;
  href: string;
};

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    updateScrollY();

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  const updateScrollY = () => {
    const isScrolled: boolean = window.scrollY > 50;

    setScrolled((prevScrolled) => {
      if (prevScrolled !== isScrolled) {
        return isScrolled;
      } else {
        return prevScrolled;
      }
    });
  };

  const HeaderLinks: HeaderLink[] = [
    { name: "Start", href: "#init" },
    { name: "Overview", href: "#sdf" },
  ];

  return (
    <motion.header
      className="header"
      animate={{
        top: scrolled ? 0 : 10,
      }}
      initial={{ top: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="nav">
        <ul className="nav-list">
          {HeaderLinks.map((link) => (
            <li key={link.name}>
              <a className="nav-item" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
