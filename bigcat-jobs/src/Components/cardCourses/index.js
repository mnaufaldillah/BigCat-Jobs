import "./style.css";
import React from "react";

const CardCourse = ({ image, title, author, stars, reviewNumber, price }) => {
  return (
    <div className="course-wrapper">
      <div className="course-content">
        <img src={image} alt="" />
        <div className="course-info">
          <h2>
            <a href="#">{title}</a>
          </h2>
          <p>{author}</p>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
