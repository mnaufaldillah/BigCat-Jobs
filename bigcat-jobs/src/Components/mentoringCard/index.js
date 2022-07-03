import "./style.css";
import React from "react";

const MentoringCard = ({ image, author, subtitle, desc, price, minute }) => {
  return (
    <div className="mentor-wrapper">
      <div className="mentor-content">
        <img src={image} alt="" />
        <div className="mentor-info">
          <h2>
            <a href="#">{author}</a>
          </h2>
          <p>{subtitle}</p>
          <ul>
            {desc.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <h1>
            {price} / {minute}
          </h1>
          <button className="mentor-btn">
            <a href="#">Book Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentoringCard;
