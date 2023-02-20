import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SinglePlayer from "../../pages/SinglePlayer";
import API from "../../utils/API";

export const NavbarSearch = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchPlayer = async (query) => {
      setLoading(true);
      const res = await API.player(query);
      setResults(res.data.data);
      setLoading(false);
    };
    searchPlayer(search);
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // searchPlayer(search);
    setSearch("");
  };
  return (
    <Link to="/singlePlayer">
      {/* <SinglePlayer results={results} /> */}
      <Form className="d-flex">
        <Form.Control
          value={search}
          onChange={handleInputChange}
          type="text"
          placeholder="Search"
          className="me-2"
        />
        <Button onClick={handleFormSubmit} type="submit">
          Search
        </Button>
      </Form>
    </Link>
  );
};
