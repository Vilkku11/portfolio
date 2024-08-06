import "./RainEffect.css";

const RainEffect = () => {
  type RainDrop = {
    left: string;
    animationDelay: string;
  };

  const createRaindrops = (numDrops: number): JSX.Element[] => {
    const drops: JSX.Element[] = [];
    for (let i = 0; i < numDrops; i++) {
      const style: RainDrop = {
        left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        animationDelay: `${Math.random() * 4}s`,
      };
      const item = <div key={i} className="rain" style={style}></div>;
      drops.push(item);
    }
    return drops;
  };

  const raindrops = createRaindrops(50);
  return <div className="rain-container">{raindrops}</div>;
};

export default RainEffect;
