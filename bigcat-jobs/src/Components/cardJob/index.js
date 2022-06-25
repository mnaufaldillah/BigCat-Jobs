import "./style.css";
import React from "react";

const CardJob = ({ image, title, company, place, recruitStatus, time }) => {
  return (
    <div className="job-wrapper">
      <div className="job-content">
        <img src={image} alt="" />
        <div className="job-info">
          <h2>
            <a href="#">{title}</a>
          </h2>
          <div className="job-company">
            <p>{company}</p>
            <p>{place}</p>
          </div>
        </div>
        <div className="job-status">
          <p>{recruitStatus}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
