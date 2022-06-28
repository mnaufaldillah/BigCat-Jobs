import React from "react";
import "./style.css";

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
              <a href="#">Find Job</a>
            </li>
            <li>
              <a href="#">Online Course</a>
            </li>
            <li>
              <a href="#">Mentoring</a>
            </li>
            <li>
              <a href="#">Find Salary</a>
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
