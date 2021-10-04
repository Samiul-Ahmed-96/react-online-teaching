import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.png";
import './Header.css';

const Header = () => {
    return (
        <div>
            <Nav>
                <Container>
                    <div className='header-main'>
                        <Link to="/home"><img src={logo} alt="OnlineTeaching" /></Link>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </div>
                </Container>
            </Nav>
        </div>
    );
};

export default Header;