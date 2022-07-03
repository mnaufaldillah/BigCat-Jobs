import React from "react";
import "./style.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-info">
        <h2>404 Error | Page Not Found</h2>
        <p>We're sorry but the page you are looking is does not exist</p>
      </div>
      <img className="not-found" src="./not-found.png" />
    </div>
  );
}
