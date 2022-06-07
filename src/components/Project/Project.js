import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const{id,name,description,img}=project;
    return (
        <div>
 <div className="col-md-6">
              <div className="card-parent">
                <img src={img} alt="" />
                <div className="card-overlay">
                  <div className="card-text">
                    <h3>{name}</h3>
                    <h6>{description}</h6>
                    <Link  to={`/projectDetail/${id}`}>
                      <button className="projectBtn">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Project;