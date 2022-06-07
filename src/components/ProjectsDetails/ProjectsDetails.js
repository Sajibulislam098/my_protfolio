import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import './ProjectDetail.css'
const ProjectsDetails = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //   console.log(projects);

  let project = projects.find((p) => p.id == id);

  return (
    <div style={{ margin: "100px 0 20px 0" }}>
      <Container>
      <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>
              Screenshots
            </h3>
        <Row className="mb-5">
            
          <Col className=" ">
            <img className="w-100" src={project?.image2} alt="" />
          </Col>
          <Col xs={5} className="m-2">
            <img className="w-100" src={project?.image3} alt="" />
          </Col>
          <Col className="m-2">
            <img className="w-100" src={project?.image4} alt="" />
          </Col>
        </Row>

       

        <div className="project-details">
          <h3 style={{ color: "#2c3e50", fontWeight: "bold" }}>Overview</h3>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontWeight: "700", color: "yellowgreen", margin: "0" }}>
              {project?.name}{" "}
            </h3>
           
            <span className="fw-bold m-0">{project?.duration}</span>
          </div>
          <div className="details">
            <a target="_blank" href={project?.liveSite}>
              <button className="desBtn btn me-2 btn-sm">Live site</button>
            </a>
            {project?.serverCode ? (
              <a target="_blank" href={project?.clientCode}>
                <button className="desBtn btn me-2 btn-sm">Client code</button>
              </a>
            ) : (
              <a target="_blank" href={project?.clientCode}>
                <button className="desBtn btn me-2 btn-sm">Github</button>
              </a>
            )}
            {project?.serverCode ? (
              <a target="_blank" href={project?.serverCode}>
                <button className="desBtn btn me-2 btn-sm">Server code</button>
              </a>
            ) : (
              ""
            )}
            <div className="description mt-4">
              <h4 style={{ color: "#2c3e50" }}>Description</h4>
              <p>
                <i className="fas fa-check"></i> {project?.description1}
              </p>
              <p>
                <i className="fas fa-check"></i> {project?.description2}
              </p>
              <p>
                <i className="fas fa-check"></i> {project?.description3}
              </p>
              <p>
                <i className="fas fa-check"></i> {project?.description4}
              </p>
              <p>
                <i className="fas fa-check"></i> {project?.description5}
              </p>
            </div>
            <div className="technology">
              <h4 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                Technology
              </h4>
              {project?.technology1 ? (
                <button className="techBtn btn">{project?.technology1}</button>
              ) : (
                ""
              )}
              {project?.technology2 ? (
                <button className="techBtn btn">{project?.technology2}</button>
              ) : (
                ""
              )}
              {project?.technology3 ? (
                <button className="techBtn btn">{project?.technology3}</button>
              ) : (
                ""
              )}
              {project?.technology4 ? (
                <button className="techBtn btn">{project?.technology4}</button>
              ) : (
                ""
              )}
              {project?.technology5 ? (
                <button className="techBtn btn">{project?.technology5}</button>
              ) : (
                ""
              )}
              {project?.technology6 ? (
                <button className="techBtn btn">{project?.technology6}</button>
              ) : (
                ""
              )}
              {project?.technology7 ? (
                <button className="techBtn btn">{project?.technology7}</button>
              ) : (
                ""
              )}
              {project?.technology8 ? (
                <button className="techBtn btn">{project?.technology8}</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsDetails;
