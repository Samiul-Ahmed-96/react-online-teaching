import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {name,img,description,price,rating} = props.course;
    return (
        <div>
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <h4>{rating}</h4>
            <h2>Price:${price}</h2>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Course;