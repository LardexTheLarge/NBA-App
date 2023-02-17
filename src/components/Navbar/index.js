import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchPlayer = async (query) => {
    const player = await axios.get(
      `https://www.balldontlie.io/api/v1/players?per_page=10&search=${query}`
    );
    setResults(player.data.data);
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
            <Form.Control
              value={search}
              onChange={handleInputChange}
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link
              to="/singlePlayer"
              className="btn btn-primary"
              onClick={handleFormSubmit}
            >
              Search
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
