import Hero from "../../Components/hero";
import MentoringCard from "../../Components/mentoringCard";

const Mentoring = () => {
  return (
    <>
      <Hero
        title="Talk to Experts, Get Better Insights"
        subtitle="Get supportive and helpful advice from the experts to build the career of your dreams."
      />
      <div className="mentor-list">
        <h2>Meet The Experts</h2>
        <MentoringCard
          author="Thomas Adams"
          subtitle="UI/UX Designer"
          description="Memulai karir sebagai Data Analyst tanpa background IT"
          price="Rp 200,000/60 Mins"
          />
      </div>
    </>
  );
};

export default Mentoring;
