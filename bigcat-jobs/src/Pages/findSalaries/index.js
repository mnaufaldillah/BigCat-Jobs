import Hero from "../../Components/hero";
import React from "react";
import InputBar from "../../Components/inputBar";

const FindSalaries = () => {
  return (
    <>
      <Hero
        title="Find a career you'll love"
        subtitle="Explore which careers have the highest job satisfaction, best salaries, and more"
      />
      <InputBar buttonName="Find Salary" />
    </>
  );
};

export default FindSalaries;
