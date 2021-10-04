import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hero from '../../image/hero.jpeg';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-main'>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="hero-left">
                            <small>Popular Online Courses</small>
                            <h1>The New Way To Learn Properly in With Us!</h1>
                            <button>Get Started</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="hero-right">
                            <img className="w-100 float-end" src={hero} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

           
        </div>
    );
};

export default Hero;