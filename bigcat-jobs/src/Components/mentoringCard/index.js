import "./style.css";
import React from "react";

const MentoringCard = ({ image, author, subtitle, description, price }) => {
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
            <li>Memulai karir sebagai Data Analyst tanpa background IT</li>
            <li>Konsultasi belajar teori dan praktik terkait Data Analytics</li>
            <li>Basic/Intermediate/Advanced SQL Google BigQuery</li>
          </ul>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default MentoringCard;
