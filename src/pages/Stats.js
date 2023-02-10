import { useState, useEffect } from "react";
import axios from "axios";
import StatsList from "../components/StatsList/index";

const Stats = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/stats",
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
    <div className="main-panel">
      <div className="content-wrapper">
        <StatsList posts={currentPosts} loading={loading} />
      </div>
    </div>
  );
};

export default Stats;
