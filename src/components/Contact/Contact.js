import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <div className="section-heading">
                <h1>Contact Us</h1>
            </div>
                <Row>
                    <Col>
                        <div className="about-detail">
                            
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;