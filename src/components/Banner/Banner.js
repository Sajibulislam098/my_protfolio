import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Images/D-49061.jpg";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row className="d-flex align-items-center px-3">
          <Col xs={12} md={6} lg={7}>
            <div className="banner-intro">
              <h5></h5>
              <h1>
                I'm <span>Sajibul Islam</span>
              </h1>
              <h3>
                <span>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Frontend Developer",
                      1000,
                      "React Developer",
                      1000,
                      "Competitive Programmer",
                      1000,
                    ]}
                  />
                </span>
              </h3>
              <p>
                I am working front end design and development with HTML, CSS,
                JavaScript, React. I can make dynamic and responsive website for
                mobile.
              </p>
              <div className="social-link">
                <a href="https://github.com/Sajibulislam098" target="_blank">
                  <i class="fab fa-github-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sajibul-islam/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/sajivul.islam/"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square"></i>
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
