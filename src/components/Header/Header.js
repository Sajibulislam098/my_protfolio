import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <h2>This si Header</h2>
            <Navbar  expand="lg">
  <Container >
    <Navbar.Brand href="#">Sajibul Islam</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        
       
      </Nav>
      
      
        <Button variant="outline-success"><a href=" https://drive.google.com/file/d/17b6FO4SctRLkbRq-OI6WhwbGRXW9GQAS/view" className="text-decoration-none text-dark">Download Resume</a></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;