import "./style.css"
import React from "react";

const CardCourse = ({image, title, author, stars, reviewNumber, price}) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <img src={image} alt="" />
                <div className="card-info">
                    <h2>
                        <a href="#">{title}</a>
                    </h2>
                    <p>{author}</p>
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    )
};

export default CardCourse;