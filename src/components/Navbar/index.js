import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarSearch } from "../NavbarSearch";

const Header = () => {
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
          <NavbarSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
