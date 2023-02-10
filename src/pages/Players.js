import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Players = () => {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(27);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-nba.p.rapidapi.com/players",
      params: { page: page, per_page: 27 },
      headers: {
        "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    const fetchPlayers = async () => {
      setLoading(true);
      const res = await axios.request(options);
      setPosts(res.data.data);
      setMeta(res.data.meta);
      setLoading(false);
    };
    fetchPlayers();
  }, [page]);

  return (
    <main className="card-container content-wrapper">
      <div className="col-12 col-md-10 my-3">
        <PlayerList posts={posts} loading={loading} />
        <PaginationControl
          page={page}
          between={4}
          total={meta.total_count}
          limit={postsPerPage}
          changePage={(page) => {
            meta.current_page = page;
            meta.next_page = page + 1;
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </main>
  );
};

export default Players;
