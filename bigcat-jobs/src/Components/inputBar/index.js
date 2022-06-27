import React from "react";
import "./style.css";

const InputBar = ({ onSubmit, buttonName }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <input type="text" placeholder="job title, keyword or company" />
      <input type="text" placeholder="city, province or region" />
      <button type="submit" className="form-button">
        {buttonName}
      </button>
    </form>
  );
};

export default InputBar;
