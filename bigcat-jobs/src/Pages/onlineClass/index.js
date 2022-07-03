import Hero from "../../Components/hero";
import CourseCategories from "../../Components/course-categories";
import CardCourse from "../../Components/cardCourses";
import React, { useEffect, useState } from "react";
import "./style.css";

const OnlineClass = () => {
  const [courses, setCourses] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);

  const getCourses = async () => {
    let uri = "http://localhost:8000/courses";
    const res = await fetch(uri);
    const data = await res.json();
    setCourses(data);
  };

  const getCourseCategories = async () => {
    let uri = "http://localhost:8000/categories";
    const res = await fetch(uri);
    const data = await res.json();
    setCourseCategories(data);
  };

  const renderCourses = () => {
    return courses.map((course) => (
      <CardCourse
        key={course.id}
        image={course.image}
        title={course.title}
        author={course.author}
        price={course.price}
        stars={course.stars}
        reviewNumber={course.viewers}
      />
    ));
  };

  const renderCourseCategories = () => {
    return courseCategories.map((category) => (
      <CourseCategories
        key={category.id}
        image={category.image}
        title={category.title}
        subTitle={category.sub}
      />
    ));
  };

  useEffect(() => {
    getCourses();
    getCourseCategories();
  }, []);

  return (
    <>
      <Hero
        title="Catalog Class"
        subtitle="Learn and improve your skills with mentors who are experts in their fields."
      />
      <div className="category-list">
        <h2>Categories</h2>
        <div className="grid-container">{renderCourseCategories()}</div>
      </div>
      <div className="course-list">
        <h2 style={{ marginBottom: "60px" }}>Choose Your Course</h2>
        <div className="grid-container">{renderCourses()}</div>
      </div>
    </>
  );
};

export default OnlineClass;
