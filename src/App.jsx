import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Portfolio from "./pages/W/Portfolio";

import NavBar from "./components/Navbar";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      <Router>
        <NavBar />
        {routes}
      </Router>
    </>
  );
}

export default App;
