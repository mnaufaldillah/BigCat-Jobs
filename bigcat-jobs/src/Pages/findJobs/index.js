import Hero from "../../Components/hero/index";
import CardJob from "../../Components/cardJob";
import React from "react";

const FindJobs = () => {
  return (
    <>
      <Hero
        title="Find  Your Dream Job With BigCat Jobs"
        subtitle="We provide services to improve your skills and find your dream job"
      />
      <div className="recent-job-vacancies">
        <h2>Recent job vacancies </h2>
        <div className="card-job">
          <CardJob
            image="https://cdn-images-1.medium.com/max/1200/1*i0f2d72a2jiUAK3mbyXn0A.png"
            title="Software Engineer/Web Platform"
            company="Tokopedia"
            place="Surabaya, East Java Indonesia"
            recruitStatus="actively recruiting"
            time="2 weeks ago"
          />
        </div>
      </div>
    </>
  );
};

export default FindJobs;
