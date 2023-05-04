import React, { useContext } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import chefCard from '../../Pages/Home/chefCard';
import './Navber.css'
import { AuthContext } from '../../provider/AuthProvider';
const Navber = () => {

  const {user, logOut} = useContext(AuthContext)

  const handelLogOut = () =>{
    logOut()
    .then()
    .catch(error =>console.log(error))
  }
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
          {
            user && <p style={{margin:'0', paddingRight:'14px'}}><FaUserCircle style={{fontSize:'26px'}}></FaUserCircle></p>
          }
          
          {user ?
            <Button onClick={handelLogOut} variant="danger">LogOut</Button>:
            <Link to='login'>
            <Button variant="danger">Login</Button>
            </Link>
            }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navber;