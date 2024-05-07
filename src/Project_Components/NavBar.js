import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import '../Css_Styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  

    return (
        <div className='NavBarContainer'>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand>SNEA<span style={{ color: "red" }}>KISS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Men" className="nav-link">Men</Nav.Link>
                            <Nav.Link as={NavLink} to="/Women" className="nav-link">Women</Nav.Link>
                            <Nav.Link as={NavLink} to="/Collection" className="nav-link">Collection</Nav.Link>
                            <Nav.Link as={NavLink} to="/Contact_Us" className="nav-link">Contact</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link><FaShoppingBasket size={20}/></Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="position-relative">
                                <input type="text" placeholder="Search" className="form-control mr-sm-2 border-white bg-transparent text-white pr-4 placeholder-white" />
                                <FaSearch className="position-absolute text-white" style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }} />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
