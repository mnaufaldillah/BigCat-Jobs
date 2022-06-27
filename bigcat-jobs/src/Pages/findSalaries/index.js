import Hero from "../../Components/hero";
import React from "react";
import InputBar from "../../Components/inputBar";
import DetailJob from "../../Components/detailJob";

const FindSalaries = () => {
  return (
    <>
      <Hero
        title="Find a career you'll love"
        subtitle="Explore which careers have the highest job satisfaction, best salaries, and more"
      />
      <InputBar buttonName="Find Salary" />
      <DetailJob
        title="desain"
        subTitle="indo"
        recruitStatus="active"
        description="We are looking for an experienced System Analyst to join our team! As a System Analyst, you will be reporting directly to the Engineering Manager, this position will play a critical role in the transformation process, working closely with the Product Manager, Engineer and Business Development to develop and maintain the technical documentation."
        responsibilities="Exceptional writing skills to describe business process and technical details in a concise yet easily understandable wordings
        Develop, analyze, prioritize, maintain and organize requirement specifications, data mapping, diagrams, and flowcharts for developers and testers to follow
        Create and maintain ERD, UML diagrams, Prototype and Wireframe to aligned with stakeholders
        Translate highly technical specifications into clear non-technical requirements
        Define and coordinate the execution of testing procedures, and develop test cases to serve the overall quality assurance process
        Provide documentation of all processes and training as needed
        Protect operations by keeping the information confidential.
        Provide information to internal/external customers by collecting, analyzing, and summarizing development and service issues."
      />
    </>
  );
};

export default FindSalaries;
