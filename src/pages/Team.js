import { useState, useEffect } from "react";
import axios from "axios";
import TeamList from "../components/TeamList/Index";
import { Pagination } from "../components/Pagination";

const Team = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/teams",
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

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <TeamList posts={currentPosts} loading={loading} />
      </div>
    </main>
  );
};

export default Team;
