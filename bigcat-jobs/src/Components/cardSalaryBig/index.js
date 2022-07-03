import "./style.css";
import React from "react";

const CardSalaryBig = ({ title, numberYearly, numberMonthly }) => {
  return (
    <div className="salary-wrapper">
      <h2>keyword</h2>
      <div className="salary-content">
        <span className="salary-border"></span>
        <div className="salary-info">
          <h2>Average Salary</h2>
          <div>
            <h1>
              IDR {numberYearly} <span>per year</span>
            </h1>
            <p>
              The average of a {title} is {numberMonthly} per year in Indonesia{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSalaryBig;
