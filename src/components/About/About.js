import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../Images/sajib 2.png";

const About = () => {
  return (
    <div className="about-area my-5 pt-5">
      <Container>
        <Row className="px-3">
          <Col xs={12} md={6} lg={6}>
            <div className="about-img">
              <img className="w-100" src={aboutImg} alt="" />
             
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <h2 style={{ color: "#e74c3c", fontWeight: "bold" }}>About me!</h2>
            <h4 className="title">
              Frontend Developer || React Developer
            </h4>
            <h5 style={{ fontWeight: "500" }}>
              A passionate React Developer and Frontend based
              developer in Bangladesh.
            </h5>
            <p className="para" style={{ color: "#7f8c8d", fontSize: "18px", textAlign: 'left' }}>
              Hi! My name is Sajibul Islam. I am Frontend Developer, and I'm
              very passionate and dedicated to my work. With 1 year self
              experience as a frontend developer, I have acquired the skills and
              knowledge necessary to make your project a success.<br />
              My Technology Skills are --<br />
              HTML, CSS, Bootstrap, JavaScript, React Js, React-Bootstrap, Firebase.<br />
              Node Js, Express Js, MongoDB, Material UI, Figma to HTML Template.<br />
              
            </p>
            <div className="resume-div pt-2">
              <a
                target="_blank"
                href=" https://drive.google.com/file/d/12jY3PsC9A6mDduji2omdh7bppF3yWdXN/view?usp=sharing"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
