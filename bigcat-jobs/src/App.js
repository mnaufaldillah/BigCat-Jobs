import "./App.css";
import React from "react";
import CourseCategories from "./Components/course-categories";
import FindJobs from "./Pages/findJobs";
import Mentoring from "./Pages/mentoring";
import OnlineClass from "./Pages/onlineClass";
import Navbar from "./Components/navbar";
import FindSalaries from "./Pages/findSalaries";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/notFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/find-salary">
            <FindSalaries />
          </Route>
          <Route path="/mentoring">
            <Mentoring />
          </Route>
          <Route path="/online-class">
            <OnlineClass />
          </Route>
          <Route exact path="/">
            <FindJobs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
