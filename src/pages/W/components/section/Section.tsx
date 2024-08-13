import Lenis from "lenis";
import "./Section.css";
import { useEffect } from "react";

const Section = () => {
  useEffect(() => {
    const lenis: Lenis = new Lenis();

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container">
      <Firstitem />
    </div>
  );
};

const Firstitem = () => {
  return (
    <div className="section1">
      <p>test text</p>
    </div>
  );
};

export default Section;
