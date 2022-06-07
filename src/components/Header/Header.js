import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar  expand="lg">
  <Container >
    <Navbar.Brand href="#" className="logo"><h2 className="logo">Sajibul Islam</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <div className="navigation-menu">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
      </Nav>
      
      
        <Button variant="outline-danger"><a href=" https://drive.google.com/file/d/12jY3PsC9A6mDduji2omdh7bppF3yWdXN/view?usp=sharing" className="text-decoration-none text-dark">Download Resume</a></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;