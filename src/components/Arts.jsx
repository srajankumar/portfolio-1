import React from "react";
import { Link } from "react-router-dom";

function Arts() {
  return (
    <div>
      <header>
        <h4 className="home">
          <Link className="home" to="/">
            back
          </Link>
        </h4>
      </header>
      <h2>Section 1</h2>
      <p>Content for section 1 goes here</p>
    </div>
  );
}

export default Arts;
