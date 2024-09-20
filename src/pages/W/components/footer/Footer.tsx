import { Link } from "react-router-dom";
import Curve from "../curve/Curve";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Curve />
      <h1>lolaosafs</h1>
      <h2>saosaosaosoa</h2>
      <p>papaspapd</p>
      <Link to="/">Back to main</Link>
      <Link to="/attributions">Credits & Attributions</Link>
    </div>
  );
};

export default Footer;
