import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import "./App.css";

import Home from "./pages/Home";
import Portfolio from "./pages/W/Portfolio";
import Attributions from "./pages/attributions/Attributions";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<Portfolio />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      <Router>{routes}</Router>
    </>
  );
}

export default App;
