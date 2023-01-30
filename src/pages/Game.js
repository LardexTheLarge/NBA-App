import { useState, useEffect } from "react";
import axios from "axios";
import GameList from "../components/GameList/index";
import { Pagination } from "../components/Pagination";

const Game = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/games?seasons[]=2022",
    params: { page: currentPage.toString(), per_page: postsPerPage.toString() },
    headers: {
      "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      const res = await axios.request(options);
      setPosts(res.data.data);
      setMeta(res.data.meta);
      setLoading(false);
    };

    fetchPlayers();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //TODO: add pagination to game page

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <GameList posts={currentPosts} loading={loading} />
      </div>
    </main>
  );
};

export default Game;
