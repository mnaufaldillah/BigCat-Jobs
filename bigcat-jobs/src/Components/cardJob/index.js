import "./style.css";
import React from "react";

const CardJob = ({
  image,
  position,
  company,
  status,
  location,
  type,
  onClick,
}) => {
  return (
    <div className="job-wrapper" onClick={onClick}>
      <div className="job-content">
        <img src={image} alt="" />
        <div className="job-info">
          <h2>
            <a href="#">{position}</a>
          </h2>
          <div className="job-company">
            <p>{company}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="job-status">
          <p>{status}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
