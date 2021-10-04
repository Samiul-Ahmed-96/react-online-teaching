import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Courses.css';
const Courses = () => {
    //store courses data
    const [courses,setCourses] = useState([]);
    //load courses data
    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <>
        <Header></Header>
        <Container>
        <div className="section-heading">
            <h1>Courses</h1>
        </div>
        <h2 className="course-heading">Our Courses</h2>
        <Row className="my-4" xs={1} md={3} className="g-4">
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