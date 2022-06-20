import "./style.css";
import React from "react";

const CourseCategories = ({ image, title, subTitle }) => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <img src={image} alt="" />
        <div className="card-info">
          <h2>
            <a href="#">{title}</a>
          </h2>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
