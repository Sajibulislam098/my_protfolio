import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="my-5">
      <Container>
        <h1 style={{ fontWeight: "700", color: "#2c3e50" }}>
          Here Some Of my Project
        </h1>
        <Row className="mt-2 g-4" xs={1} md={2} lg={2}>
          {projects?.map((project) => (
            <Col>
              <div className="card-parent">
                <img src={project.image1} alt="" />
                <div className="card-overlay">
                  <div className="card-textt">
                    <h5>{project.name}</h5>
                    <p>{project.shortDescription}</p>
                    <Link to={`/projectDetail/${project.id}`}>
                      <button className="projectBtn">More Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

       
      </Container>
    </div>
  );
};

export default Projects;
