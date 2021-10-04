import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name, description ,img} = props.service
    return (
        <div className="service-item">
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Service;