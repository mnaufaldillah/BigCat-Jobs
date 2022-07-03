import Hero from "../../Components/hero/index";
import CardJob from "../../Components/cardJob";
import React, { useState } from "react";
import InputBar from "../../Components/inputBar";

const FindJobs = () => {
  // const [jobs, setJobs] = useState([]);

  // const getJobs = async () => {
  //   let uri = "http://localhost:8000/categories?title_like=funda";
  //   const res = await fetch(uri);
  //   const data = await res.json();
  //   setJobs(data);
  // };

  // const renderJobs = () => {
  //   return jobs.map((job) => (
  //     <CardJob
  //       image={job.image}
  //       title={job.title}
  //       company={job.company}
  //       place={job.location}
  //       recruitStatus={job.status}
  //       time={job.date}
  //     />
  //   ));
  // };

  return (
    <>
      <Hero
        title="Find  Your Dream Job With BigCat Jobs"
        subtitle="We provide services to improve your skills and find your dream job"
      />
      <InputBar buttonName="Find Jobs" />
      <div className="recent-job-vacancies">
        <h2>Recent job vacancies </h2>
        <div className="card-job"></div>
      </div>
    </>
  );
};

export default FindJobs;
