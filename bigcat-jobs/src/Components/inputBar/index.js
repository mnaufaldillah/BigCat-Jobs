import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/search-slicer";

const InputBar = ({ onSubmit, buttonName }) => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.keyword);

  console.log(keyword);

  const handleText = (e) => {
    const { name, value } = e.target;
    dispatch(setSearch({ ...search, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        id="keyword"
        type="text"
        name="keyword"
        onChange={handleText}
        placeholder="job title, keyword or company"
      />
      <input
        id="location"
        type="text"
        name="location"
        onChange={handleText}
        placeholder="city, province or region"
      />
      <button type="submit" className="form-button">
        {buttonName}
      </button>
    </form>
  );
};

export default InputBar;
