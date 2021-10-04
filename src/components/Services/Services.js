import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    //Store services data
    const [services, setServices] = useState([]);
    //load Services data
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <Container>
        <h1>Our servies</h1>
        <Row xs={2} md={4} className="g-4">
        {
            services.map(service => <Service service={service}></Service>)
        }
        </Row>
        </Container>
    );
};

export default Services;