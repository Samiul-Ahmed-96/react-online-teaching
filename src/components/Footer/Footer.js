
import { faBarcode, faBook, faBookReader, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <Container>
                <div className="main-footer">
                <Row>
                    <Col>
                        <div className="footer-description">
                            <h2>Online-Teaching</h2>
                            <p>We are an academic residential college made up of students, scholars, old collegians and staff members. Our rich history is the foundation for our values.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-links">
                            <h3>Our Links</h3>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/courses">Courses</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="social-media">
                        <h2>Let’s Get Social</h2>
                        <ul>
                            <li><Link to="/"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon></Link></li>
                            <li><Link to="/"><FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon></Link></li>
                            <li><Link to="/"><FontAwesomeIcon icon={faMoneyBillWaveAlt}></FontAwesomeIcon></Link></li>
                            <li><Link to="/"><FontAwesomeIcon icon={faBarcode}></FontAwesomeIcon></Link></li>
                        </ul>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Footer;