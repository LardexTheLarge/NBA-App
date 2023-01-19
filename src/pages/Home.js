import { useState, useEffect } from "react";
import axios from "axios";
// import { getAllPlayers } from "../api/index";
// import PlayerList from "../components/PlayerList";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // const [results, setResults] = useState([]);

  // const search = async (query) => {
  //   const response = await getAllPlayers(query);
  //   setResults(response);
  // };

  useEffect(() => {
    // search("players");
    const fetchPlayers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://free-nba.p.rapidapi.com/players",
        options
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPlayers();
  }, []);
  console.log(posts);
  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        {/* <PlayerList results={results.data} /> */}
      </div>
    </main>
  );
};

export default Home;
