import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-logo">
          <span>BigCat Jobs</span>
        </div>
        <div class="navbar-menu">
          <ul>
            <li>
              <Link to="/">Find Job</Link>
            </li>
            <li>
              <Link to="/online-course">Online Course</Link>
            </li>
            <li>
              <Link to="/mentoring">Mentoring</Link>
            </li>
            <li>
              <Link to="/find-salary">Find Salary</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-button">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
