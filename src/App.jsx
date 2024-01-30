import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import W from "./pages/W";

import NavBar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<W />} />
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
