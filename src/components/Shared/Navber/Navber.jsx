import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chefCard from '../../Pages/Home/chefCard';
import './Navber.css'
const Navber = () => {
    return (
        <div className=''>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='/'>Eatery <samp className='name'>.</samp> Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 nav-link"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
            <Link to='/login'><Button variant="danger">Login</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navber;