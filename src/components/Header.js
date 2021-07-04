import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Nav className="mr-auto">
          <Link to="/post" className="nav-link">
            Post
          </Link>
        </Nav>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
