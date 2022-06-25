import "./style.css";
import React from "react";

const cardSalary = ({ title, number }) => {
  return (
    <div className="salary-wrapper">
      <div className="salary-content">
        <div className="salary-info">
          <h3>{title}</h3>
          <p>Average Salary</p>
          <p>{number}</p>
          <p>Job Openings</p>
        </div>
      </div>
    </div>
  );
};

export default cardSalary;
