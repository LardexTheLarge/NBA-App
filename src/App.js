import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";

import "./Theme.css";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
