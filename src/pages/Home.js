import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(meta.next_page);
  const [postsPerPage] = useState(25);

  const options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: meta.next_page, per_page: "25" },
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

  // console.log(posts);

  const indexOfLastPost = meta.current_page * meta.per_page;
  const indexOfFirstPost = indexOfLastPost - meta.per_page;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={currentPosts} loading={loading} />
        <Pagination
          // currentPage={currentPage}
          // nextPage={meta.next_page}
          totalPages={meta.total_pages}
          paginate={paginate}
        />
      </div>
    </main>
  );
};

export default Home;
