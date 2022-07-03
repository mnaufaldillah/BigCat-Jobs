import Hero from "../../Components/hero/index";
import CardJob from "../../Components/cardJob";
import React, { useEffect, useState } from "react";
import InputBar from "../../Components/inputBar";
import DetailJob from "../../Components/detailJob";
import { useSelector } from "react-redux";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [jobsID, setJobsID] = useState("");
  const search = useSelector((state) => state.search);

  const getJobs = async () => {
    let uri = `http://localhost:8000/jobs?position_like=${search.keyword.keyword}`;
    const res = await fetch(uri);
    const data = await res.json();
    setJobs(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getJobs();
  };

  const getVacancies = async () => {
    let uri = `http://localhost:8000/jobs`;
    const res = await fetch(uri);
    const data = await res.json();
    setVacancies(data);
  };

  useEffect(() => {
    getVacancies();
  }, []);

  const renderDetail = () => {
    return jobs
      .filter((job) => job.id === jobsID)
      .map((jobFilter) => (
        <DetailJob
          image={jobFilter.image}
          company={jobFilter.company}
          position={jobFilter.position}
          location={jobFilter.location}
          type={jobFilter.type}
          desc={jobFilter.desc}
          respo={jobFilter.respo}
          status={jobFilter.status}
        />
      ));
  };

  const renderJobs = () => {
    return (
      <div>
        {jobs.length !== 0 ? <h2>Your Job Search</h2> : ""}
        <div style={{ display: "flex", marginTop: "60px" }}>
          <div style={{ marginRight: "60px" }}>
            {jobs.map((job) => (
              <CardJob
                image={job.image}
                position={job.position}
                company={job.company}
                status={job.status}
                location={job.location}
                type={job.type}
                onClick={() => setJobsID(job.id)}
              />
            ))}
          </div>
          {renderDetail()}
        </div>
      </div>
    );
  };

  const renderJobVacancies = () => {
    return vacancies
      .slice(0, 3)
      .map((job) => (
        <CardJob
          image={job.image}
          position={job.position}
          company={job.company}
          status={job.status}
          location={job.location}
          type={job.type}
        />
      ));
  };

  return (
    <>
      <Hero
        title="Find  Your Dream Job With BigCat Jobs"
        subtitle="We provide services to improve your skills and find your dream job"
      />
      <InputBar buttonName="Find Jobs" onSubmit={handleSearch} />
      <div className="recent-job-vacancies">
        <h2>Recent job vacancies </h2>
        <div style={{ display: "flex" }} className="grid-container">
          {renderJobVacancies()}
        </div>
        {renderJobs()}
      </div>
    </>
  );
};

export default FindJobs;
