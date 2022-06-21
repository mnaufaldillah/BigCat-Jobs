import "./style.css";
import React from "react";

const CardSalary = ({title, number}) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <div className="card-info">
                    <h3>{title}</h3>
                    <p>Average Salary</p>
                    <p>{number}</p>
                    <p>Job Openings</p>
                </div>
            </div>
        </div>
    )
};

export default CardSalary;