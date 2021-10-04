import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    //destructuring the value
    const {name, value} = props.service
    return (
        <div className="service-item">
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {value}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Service;