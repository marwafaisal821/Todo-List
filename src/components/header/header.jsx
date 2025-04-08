import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaHome, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Header(){
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand href="/">
          <FaHome className="mb-1" /> MyWebsite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="d-flex align-items-center">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link href="/about" className="d-flex align-items-center">
              <FaUser className="me-1" /> About
            </Nav.Link>
            <Nav.Link href="/cart" className="d-flex align-items-center">
              <FaShoppingCart className="me-1" /> Cart
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" className="ms-3">
            <FaSearch />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


