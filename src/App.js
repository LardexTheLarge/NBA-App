import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Team from "./pages/Team";
import Game from "./pages/Game";
import Stats from "./pages/Stats";

import "./Theme.css";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/team" element={<Team />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/:gameId" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
