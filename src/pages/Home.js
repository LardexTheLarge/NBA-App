import { useState, useEffect } from "react";
import { getAllPlayers } from "../api/index";
import PlayerList from "../components/PlayerList";

const Home = () => {
  const [results, setResults] = useState([]);

  const search = async (query) => {
    const response = await getAllPlayers(query);
    setResults(response);
  };

  useEffect(() => {
    search("players");
  }, []);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList results={results.data} />
      </div>
    </main>
  );
};

export default Home;
