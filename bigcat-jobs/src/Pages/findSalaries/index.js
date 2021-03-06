import Hero from "../../Components/hero";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputBar from "../../Components/inputBar";
import CardSalaryBig from "../../Components/cardSalaryBig";

const FindSalaries = () => {
  const [salaries, setSalaries] = useState([]);
  const search = useSelector((state) => state.search);

  const getSalaries = async () => {
    const res = await fetch(
      `http://localhost:8000/salaries?job_like=${search.keyword.keyword}`
    );
    const data = await res.json();
    setSalaries(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSalaries();
  };

  const convertToIDR = (salary) => {
    return salary
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("");
  };

  const covertPerMonth = (salary) => {
    return convertToIDR(salary / 12);
  };

  const renderSalary = () => {
    return salaries.map((salary) => (
      <CardSalaryBig
        key={salary.id}
        job={salary.job}
        location={salary.loc}
        salary={convertToIDR(salary.salary)}
        salaryMonth={covertPerMonth(salary.salary)}
      />
    ));
  };

  return (
    <>
      <Hero
        title="Find a career you'll love"
        subtitle="Explore which careers have the highest job satisfaction, best salaries, and more"
      />
      <InputBar buttonName="Find Salary" onSubmit={handleSearch} />
      {renderSalary()}
    </>
  );
};

export default FindSalaries;
