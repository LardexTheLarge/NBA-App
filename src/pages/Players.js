import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { NavbarSearch } from "../components/NavbarSearch";
import API from "../utils/API";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Players = () => {
  // const [posts, setPosts] = useState([]);
  // const [meta, setMeta] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [postsPerPage] = useState(27);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://free-nba.p.rapidapi.com/players",
  //     params: { page: page, per_page: 27 },
  //     headers: {
  //       "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
  //       "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  //     },
  //   };

  //   const fetchPlayers = async () => {
  //     setLoading(true);
  //     const res = await axios.request(options);
  //     setPosts(res.data.data);
  //     setMeta(res.data.meta);
  //     setLoading(false);
  //   };
  //   fetchPlayers();
  // }, [page]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchPlayer = async (query) => {
      setLoading(true);
      const res = await API.player(query);
      setResults(res.data.data);
      setMeta(res.data.meta);
      setLoading(false);
    };

    searchPlayer(search);
  }, [page]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // searchPlayer(search);
    setSearch("");
  };
  console.log(meta);
  return (
    <main className="card-container content-wrapper">
      <div className="col-12 col-md-10 my-3">
        <NavbarSearch
          search={search}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <PlayerList results={results} loading={loading} />
        <PaginationControl
          page={page}
          between={4}
          total={meta.total_count}
          limit={27}
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
