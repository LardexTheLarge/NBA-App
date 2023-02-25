import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/PlayerList";
import { SearchBar } from "../components/SearchBar";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Players = () => {
  const [results, setResults] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(27);
  const [search, setSearch] = useState("");

  const searchPlayer = async (query) => {
    const options = {
      method: "GET",
      url: `https://free-nba.p.rapidapi.com/players?per_page=27&search=${query}`,
      params: { page: page, per_page: postsPerPage },
      headers: {
        "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    setLoading(true);
    const res = await axios.request(options);
    setResults(res.data.data);
    setMeta(res.data.meta);
    setLoading(false);
  };

  useEffect(() => {
    searchPlayer(search);
  }, [page, search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPlayer(search);
  };

  return (
    <main className="card-container content-wrapper">
      <div className="col-12 col-md-10 my-3">
        <SearchBar
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
