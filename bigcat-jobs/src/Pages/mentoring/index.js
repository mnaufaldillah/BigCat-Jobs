import Hero from "../../Components/hero";
import MentoringCard from "../../Components/mentoringCard";
import React, { useEffect, useState } from "react";

const Mentoring = () => {
  const [mentors, setMentor] = useState([]);

  const getMentor = async () => {
    let uri = "http://localhost:8000/mentor";
    const res = await fetch(uri);
    const data = await res.json();
    setMentor(data);
  };

  const renderMentor = () => {
    return mentors.map((mentor) => (
      <MentoringCard
        key={mentor.id}
        image={mentor.image}
        author={mentor.title}
        subtitle={mentor.sub}
        desc={mentor.desc}
        price={mentor.price}
        minute={mentor.minute}
      />
    ));
  };

  useEffect(() => {
    getMentor();
  }, []);

  return (
    <>
      <Hero
        title="Talk to Experts, Get Better Insights"
        subtitle="Get supportive and helpful advice from the experts to build the career of your dreams."
      />
      <div className="mentor-list">
        <h2 style={{ marginBottom: "60px" }}>Meet The Experts</h2>
        <div className="grid-container">{renderMentor()}</div>
      </div>
    </>
  );
};

export default Mentoring;
