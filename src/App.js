import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Team from "./pages/Team";
import Game from "./pages/Game";
import Stats from "./pages/Stats";
import SinglePlayer from "./pages/SinglePlayer";

import "./assets/css/Theme.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Players />} path="/players" />
          <Route element={<Team />} path="/team" />
          <Route element={<Game />} path="/game" />
          <Route element={<SinglePlayer />} path="/singlePlayer" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
