import "./style.css";
import React from "react";

const CardSalaryBig = ({ job, location, salary, salaryMonth }) => {
  return (
    <div className="salary-wrapper">
      <h2>{job}</h2>
      <div className="salary-content">
        <span className="salary-border"></span>
        <div className="salary-info">
          <h2>Average Salary</h2>
          <div>
            <h1>
              IDR {salary} <span>per year</span>
            </h1>
            <p>
              The average of a {job} is {salaryMonth} per month in {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSalaryBig;
