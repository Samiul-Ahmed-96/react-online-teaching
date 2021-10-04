import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    //destructuring the values
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
            <h6>Rating: {rating}</h6>
            <h2>Price:${price}</h2>
            <button>Purchase</button>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Course;