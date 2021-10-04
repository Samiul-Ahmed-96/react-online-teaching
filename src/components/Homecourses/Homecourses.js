import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Homecourse from '../Homecourse/Homecourse';

const Homecourses = () => {
    //Store home Course data
    const [courses,setCourses] = useState([])
    //Load home course data
    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <Container>
            <h1>Our Courses</h1>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.slice(0,4).map(course => <Homecourse course={course}></Homecourse>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Homecourses;