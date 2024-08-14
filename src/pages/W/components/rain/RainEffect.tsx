import { useRef, useState, useEffect } from "react";
import "./RainEffect.css";

const RainEffect = () => {
  type RainDrop = {
    left: string;
    top: string;
    animationDelay: string;
  };

  type RainContainerStyle = React.CSSProperties & {
    "--container-height": string;
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const [rainContainerStyle, setRainContainerStyle] =
    useState<RainContainerStyle>();

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
      setRainContainerStyle({
        "--container-height": `${containerRef.current.clientHeight}px`,
      });
    }
  }, []);

  const createRaindrops = (numDrops: number): JSX.Element[] => {
    const drops: JSX.Element[] = [];

    for (let i = 0; i < numDrops; i++) {
      const startFromSide: boolean = Math.random() > 0.8;

      const left: string = startFromSide
        ? `${containerHeight + Math.random() * 50}px`
        : `${Math.random() * window.innerWidth}px`;

      const top: string = startFromSide
        ? `${Math.random() * containerHeight}px`
        : "0px";

      const animationDelay: string = `${Math.random() * 4}s`;

      const style: RainDrop = {
        left,
        top,
        animationDelay,
      };
      const item = <div key={i} className="rain" style={style}></div>;
      drops.push(item);
    }
    return drops;
  };

  const raindrops = createRaindrops(100);
  return (
    <div
      ref={containerRef}
      className="rain-container"
      style={rainContainerStyle}
    >
      {raindrops}
    </div>
  );
};

export default RainEffect;