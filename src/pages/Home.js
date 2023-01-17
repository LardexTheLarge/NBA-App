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

  return <div>{<PlayerList results={results.data} />}</div>;
};

export default Home;
