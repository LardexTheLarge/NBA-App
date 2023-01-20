import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      const res = await axios.get("https://www.balldontlie.io/api/v1/players");
      setPosts(res.data.data);
      setMeta(res.data.meta);
      setLoading(false);
    };

    fetchPlayers();
  }, []);

  console.log(currentPage);
  console.log(posts);

  const indexOfLastPost = meta.current_page * meta.per_page;
  const indexOfFirstPost = indexOfLastPost - meta.per_page;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={currentPosts} loading={loading} />
        <Pagination
          currentPage={currentPage}
          nextPage={meta.next_page}
          totalPages={meta.total_pages}
          paginate={paginate}
        />
      </div>
    </main>
  );
};

export default Home;
