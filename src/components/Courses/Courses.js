import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Courses = () => {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <>
        <Header></Header>
        <Container>
        <Row xs={1} md={3} className="g-4">
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </Row>
        <Footer></Footer>
        </Container>
        </>
    );
};

export default Courses;