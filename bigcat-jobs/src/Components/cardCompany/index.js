import "./style.css";
import React from "react";

const CardCompany = ({image, title, stars, review}) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <img src={image} alt="" />
                <div className="card-info">
                    <h3>{title}</h3>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    )
};

export default CardCompany