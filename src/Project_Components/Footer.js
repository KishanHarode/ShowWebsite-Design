import React from 'react';
import '../Css_Styles/Footer.css';
import { Nav, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaSearch } from 'react-icons/fa';
import '../Css_Styles/Footer.css';
export const Footer = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='container mt-5'>
                <div className='footerContainer'>
                    <div className='logo'>
                        <span className='text-white'>SNEA<span className='sneaKiss'>KISS</span></span>
                    </div>
                    <div className='nav'>
                        <Nav className='element '>
                            <Nav.Link as={NavLink} to="/" className="nav-link a" style={{ fontFamily: "sans-serif" }}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Men" className="nav-link a" style={{ fontFamily: "sans-serif" }}>Men</Nav.Link>
                            <Nav.Link as={NavLink} to="/Women" className="nav-link a" style={{ fontFamily: "sans-serif" }}>Women</Nav.Link>
                            <Nav.Link as={NavLink} to="/Collection" className="nav-link a" style={{ fontFamily: "sans-serif" }}>Collection</Nav.Link>
                            <Nav.Link as={NavLink} to="/Contact_Us" className="nav-link a" style={{ fontFamily: "sans-serif" }}>Contact</Nav.Link>
                        </Nav>
                    </div>
                    <div className='iconItem'>
                        <FontAwesomeIcon icon={faFacebook} className='text-white size me-4' />
                        <FontAwesomeIcon icon={faInstagram} className='text-white size me-4' />
                        <FontAwesomeIcon icon={faTwitter} className='text-white size' />
                    </div>
                </div>
            </div>
            <hr style={{ color: "white", fontWeight: "bolder" }} />
            <div className='navInput'>
                <div className="input-group">
                    <input type="text" placeholder='Search Here' className='form-control border-white bg-transparent text-white placeholder-white' style={{ borderRadius: "25px 0 0 25px", }} />
                    <div className="input-group-append">
                        <span className="input-group-text" style={{ backgroundColor: "red", border: "none", borderRadius: "0 25px 25px 0"}}>
                            <FaSearch className='text-white searchSize'/>
                        </span>
                    </div>
                </div>
            </div>
            <hr style={{ color: "white", fontWeight: "bolder" }}></hr>
            <span className='copyRight'>
                @COPYRIGHT BY SNEAKISS 2024 ALL RIGHTS RESERVED
            </span>
        </div>
    );
}

