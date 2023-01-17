import { useState, useEffect } from "react";
import { getAllPlayers } from "../api/index";
import PlayerList from "../components/PlayerList";

const Home = () => {
  const [results, setResults] = useState([]);

  const search = async (query) => {
    const response = await getAllPlayers();
    setResults(response);
  };

  useEffect(() => {
    // search("players");
    search();
  }, []);

  return (
    <div>
      {/* {results.data[0].first_name} */}
      {<PlayerList results={results.data} />}
    </div>
  );
};

export default Home;
