import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../image/about.jpeg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <div className="section-heading">
                <h1>About Us</h1>
            </div>
                <Row>
                    <Col>
                        <div className="about-detail my-4">
                            <h2>Our Mission</h2>
                            <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.

                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>

                            <h2>Our Vision</h2>
                            <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                        </div>

                        <div className='more-about'>
                            <Row className="align-items-center" xs={1} md={2}>
                                <Col>
                                    <div className='left-more'>
                                      <small>More About Our Company</small>
                                      <h1>Want to know more</h1>
                                      <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words.</p> 
                                      <ul>
                                        <li>Creative ideas base</li>
                                        <li>Assages of sorem gpsum ilable</li>
                                        <li>Have suffered alteration in so</li>
                                        <li>Randomised words whi</li>
                                      </ul>
                                      <button>More About Us</button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='right-more text-center'>
                                        <img className="w-50" src={image} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>  
        </div>
    );
};

export default About;