import React, { useState } from "react";
import "./style.css";

const sendFromNetworkCall = (data) => console.log(data);

const InputBar = ({ onSubmit, buttonName }) => {
  const [search, setSearch] = useState({
    keyword: '',
    location: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    sendFromNetworkCall(search);
  };

  const handleText = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        id="keyword" 
        type="text"
        name="keyword"
        value={search.keyword}
        onChange={handleText}
        placeholder="job title, keyword or company" />
      <input 
        id="location"
        type="text" 
        name="location"
        value={search.location}
        onChange={handleText}
        placeholder="city, province or region" />
      <button type="submit" className="form-button">
        {buttonName}
      </button>
    </form>
  );
};

export default InputBar;
