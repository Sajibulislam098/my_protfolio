import React from 'react';
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import myImg from '../../Images/D-49061.jpg'
const Banner = () => {
    return (
        <div className="banner-area">
      <Container>
        <Row className="d-flex align-items-center px-3">
          <Col xs={12} md={6} lg={7}>
            <div className="banner-intro">
              <h5>Hey!</h5>
              <h1>
                I'm <span>Sajibul Islam</span>
              </h1>
              <h3>
                I am a <span>Frontend Developer!</span>
              </h3>
              <p>
                I am working front end design and development with HTML, CSS,
                JavaScript, React. I can make dynamic and responsive website for
                mobile.
              </p>
              <div className="social-link">
                <a href="https://www.facebook.com/sajivul.islam/" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sajibul-islam/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Sajibulislam098"
                  target="_blank"
                >
                  <i class="fab fa-github-square"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <div className="banner-img">
              <img className="w-75" src={myImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Banner;