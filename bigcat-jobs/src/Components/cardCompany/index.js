import "./style.css";
import React from "react";

const CardCompany = ({ image, title, stars, review }) => {
  return (
    <div className="company-wrapper">
      <div className="company-content">
        <img src={image} alt="" />
        <div className="company-info">
          <h3>{title}</h3>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;
