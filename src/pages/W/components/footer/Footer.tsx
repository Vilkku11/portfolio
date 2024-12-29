import { Link } from "react-router";
import Curve from "../curve/Curve";
import SectionObserver from "../sectionObserver/SectionObserver";
import "./Footer.css";

const Footer = () => {
  /*const { setActiveSection } = useActiveSectionStore();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActiveSection("End");
    }
  }, [inView]);*/

  return (
    <div className="footer" id="end">
      <Curve />
      <h1>lolaosafs</h1>
      <h2>saosaosaosoa</h2>
      <p>papaspapd</p>
      <Link to="/">Back to main</Link>
      <Link to="/attributions">Credits & Attributions</Link>
      <SectionObserver sectionName="End" />
    </div>
  );
};

export default Footer;
