import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Homecourse = (props) => {
    //destructuring the value
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
            <h4>Rating: {rating}</h4>
            <h2>Price: ${price}</h2>
            <button>Purchase</button>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Homecourse;