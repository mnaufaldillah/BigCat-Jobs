import "./style.css";
import React from "react";

const DetailJob = ({ image, title, subTitle, recruitStatus, time, description, responsibilities}) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <img src={image} alt="" />
                <div className="card-info">
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                    <p>{recruitStatus}</p>
                </div>
                <p>{description}</p>
                <p>{responsibilities}</p>
            </div>
        </div>
    )
};

export default DetailJob;