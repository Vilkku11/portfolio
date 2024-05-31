import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Portfolio from "./pages/W/Portfolio";

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
      <Router>{routes}</Router>
    </>
  );
}

export default App;
