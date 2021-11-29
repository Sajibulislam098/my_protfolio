import React from 'react';
import './Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import projectOne from '../../Images/project2.png';
import projectTwo from '../../Images/project1.png';
import projectThree from '../../Images/project4.png';
import projectFour from '../../Images/project5.png';

const Projects = () => {
    return (
        <div className="my-5">
            <Container>
                <h1 style={{ fontWeight: '700', color: '#2c3e50' }}>Here Some of My Projects</h1>
                <Row className="mt-1 g-4" xs={1} md={2} lg={2}>
                    <Col>
                        <div className="card-parent">
                            <img src={projectOne} alt="" />
                            <div className="card-overlay">
                                <div className="card-text">
                                    <h3>Live Africa</h3>
                                    <h6>This is a travel guide Website.Where You can Booked hotel near your trip.</h6>
                                    <button className="projectBtn"><a href="https://assignment-11-travel.web.app/" className="text-decoration-none text-light">Go to Site</a></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="card-parent">
                            <img src={projectTwo} alt="" />
                            <div className="card-overlay">
                                <div className="card-text">
                                    <h3>We Secure</h3>
                                    <h6>This is Security Camera Shop.You can Order Awesome featured Camera From Here.</h6>
                                    <button className="projectBtn"><a href="https://we-c9007.web.app/" className="text-decoration-none text-light">Go to Site</a></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="card-parent">
                            <img src={projectThree} alt="" />
                            <div className="card-overlay">
                                <div className="card-text">
                                    <h3>BiShop</h3>
                                    <h6>This is Cloth Shop.Where You can buy Different Types of Things Which You want.</h6>
                                    <button className="projectBtn "><a href="https://econ43.netlify.app/" className="text-decoration-none text-light">Go to Site</a></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="card-parent">
                            <img src={projectFour} alt="" />
                            <div className="card-overlay">
                                <div className="card-text">
                                    <h3>Doctors Portal</h3>
                                    <h6>This is Doctors Appointments Website.You can appoint doctors bia any dates.</h6>
                                    <button className="projectBtn"><a href="https://doctors-portal-9ba13.web.app/" className="text-decoration-none text-light">Go to Site</a></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;