import Hero from "../../Components/hero";
import React from "react";
import InputBar from "../../Components/inputBar";
import DetailJob from "../../Components/detailJob";
import CardSalaryBig from "../../Components/cardSalaryBig";

const FindSalaries = () => {
  return (
    <>
      <Hero
        title="Find a career you'll love"
        subtitle="Explore which careers have the highest job satisfaction, best salaries, and more"
      />
      <InputBar buttonName="Find Salary" />
      <CardSalaryBig
        numberYearly="Rp. 123.0124.24"
        numberMonthly="Rp. 123.1243"
        title="Indonesia"
      />
    </>
  );
};

export default FindSalaries;
