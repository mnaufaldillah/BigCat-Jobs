import "./style.css";
import React from "react";

const DetailJob = ({
  image,
  position,
  company,
  location,
  status,
  type,
  desc,
  respo,
}) => {
  return (
    <div className="detail-wrapper">
      <div className="detail-content">
        <div className="detail-info">
          <img src={image} alt="" />
          <h2>{position}</h2>
          <div className="loc">
            <p>
              {company}, {location}
            </p>
          </div>
          <div>
            <p style={{ color: "#57c219" }}>({status}) </p>
            <p>{type}</p>
          </div>
        </div>
        <div className="desc">
          <h3>Description</h3>
          <ul>
            {desc.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="respo">
          <h3>Resposibilites</h3>
          <ul>
            {respo.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <button className="detail-btn">
          <a href="#">Apply Job</a>
        </button>
      </div>
    </div>
  );
};

export default DetailJob;
