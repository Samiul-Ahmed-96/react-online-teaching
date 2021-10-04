import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../image/contact.jpeg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <div className="section-heading">
                <h1>Contact Us</h1>
            </div>
                <Row className="my-5" xs={1} md={2}>
                    <Col>
                        <div className="contact-details">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea name="massage" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
                            <button type="submit">Submit</button>
                        </div>
                    </Col>
                    <Col>
                        <img className="w-100 p-4 rounded-3" src={image} alt="" />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;