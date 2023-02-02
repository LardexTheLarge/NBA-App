import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Players = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState();

  // const options = {
  //   method: "GET",
  //   url: "https://free-nba.p.rapidapi.com/players",
  //   params: { page: currentPage, per_page: 27 },
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

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  meta.current_page = currentPage;
  meta.next_page = currentPage + 1;
  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={posts} loading={loading} />
        <PaginationControl
          page={meta.current_page}
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
