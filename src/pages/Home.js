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

  // const options = {
  //   method: "GET",
  //   url: "https://free-nba.p.rapidapi.com/players",
  //   params: { page: meta.next_page, per_page: "25" },
  //   headers: {
  //     "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
  //     "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  //   },
  // };

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

  console.log(meta);
  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={currentPosts} loading={loading} />
        <Pagination
          meta={meta}
          postsPerPage={postsPerPage}
          totalPosts={meta.total_count}
          paginate={paginate}
        />
      </div>
    </main>
  );
};

export default Home;
