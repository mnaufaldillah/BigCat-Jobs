import "./style.css";
import React from "react";

const CourseCategories = ({ image, title, subTitle }) => {
  return (
    <div className="categories-wrapper">
      <div className="categories-content">
        <img src={image} alt="" />
        <div className="categories-info">
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
