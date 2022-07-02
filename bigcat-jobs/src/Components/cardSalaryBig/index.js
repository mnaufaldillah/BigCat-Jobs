import "./style.css";
import React from "react";

const cardSalaryBig = ({ title, numberYearly, numberMonthly }) => {
  return (
    <div className="salary-wrapper">
      <div className="salary-content">
        <div className="salary-info">
          <h2>Average Salary</h2>
          <h1>IDR {numberYearly} per year</h1>
          <p>The average of a {title} is {numberMonthly} per year in Indonesia </p>
        </div>
      </div>
    </div>
  );
};

export default cardSalaryBig;