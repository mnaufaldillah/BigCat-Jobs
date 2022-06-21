import Hero from "../../Components/hero";
import CourseCategories from "../../Components/course-categories";
import CardCourse from "../../Components/cardCourses";

const OnlineClass = () => {
  return (
    <>
      <Hero
        title="Catalog Class"
        subtitle="Learn and improve your skills with mentors who are experts in their fields."
      />
      <div className="category-list">
        <h2>Categories</h2>
        <CourseCategories
           image="design-class"
           title="Design Class"
           subTitle="UI/UX Graphic Design"
        />
      </div>
      <div className="course-list">
        <h2>Choose Your Course</h2>
        <CardCourse
          image="python"
          title="English Interview & Work Presentation"
          author="Thomas Adams"
          price="Rp 200,000"
        />
      </div>
    </>
  );
};

export default OnlineClass;
