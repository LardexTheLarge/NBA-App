import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import SinglePlayerList from "../SinglePlayerList";
import SinglePlayer from "../../pages/SinglePlayer";
import API from "../../utils/API";

const Header = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchPlayer = async (query) => {
    const res = await API.player(query);
    setResults(res.data.data);
  };

  useEffect(() => {
    searchPlayer(search);
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPlayer(search);
    setSearch("");
  };
  console.log(results);

  return (
    <Navbar className="bg-main" expand="md">
      <Container fluid>
        <Navbar.Brand>NBA Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              News
            </Link>
            <Link to="/players" className="nav-link">
              Players
            </Link>
            <Link to="/team" className="nav-link">
              Teams
            </Link>
            <Link to="/game" className="nav-link">
              Games
            </Link>
          </Nav>
          <Form className="d-flex">
            <input
              value={search}
              onChange={handleInputChange}
              type="text"
              placeholder="Search"
              className="me-2"
            />
            <Link to="/singlePlayer" onClick={handleFormSubmit}>
              <SinglePlayer results={results} />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
