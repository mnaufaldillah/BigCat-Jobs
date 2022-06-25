import "./App.css";
import React from "react";
import CourseCategories from "./Components/course-categories";
import FindJobs from "./Pages/findJobs";
import Mentoring from "./Pages/mentoring";
import OnlineClass from "./Pages/onlineClass";

function App() {
  return (
    <div className="App">
      <FindJobs />
    </div>
  );
}

export default App;
