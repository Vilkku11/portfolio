import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import Portfolio from "./pages/W/Portfolio";

import "./App.css";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      <Router basename="/portfolio">{routes}</Router>
    </>
  );
}

export default App;
