import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
// import { Pagination } from "../components/Pagination";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Players = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(27);

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: currentPage, per_page: 27 },
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

  console.log(meta);
  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={currentPosts} loading={loading} />
        <PaginationControl
          page={currentPage}
          between={4}
          total={meta.total_count}
          limit={meta.per_page}
          changePage={(page) => {
            setCurrentPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </main>
  );
};

export default Players;
