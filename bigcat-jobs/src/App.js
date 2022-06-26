import "./App.css";
import React from "react";
import CourseCategories from "./Components/course-categories";
import FindJobs from "./Pages/findJobs";
import Mentoring from "./Pages/mentoring";
import OnlineClass from "./Pages/onlineClass";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <FindJobs />
      </div>
    </div>
  );
}

export default App;
