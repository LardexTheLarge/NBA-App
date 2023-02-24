import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Team from "./pages/Team";
import Game from "./pages/Game";

//CSS from UI template and user made
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
