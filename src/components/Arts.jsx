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
      <div id="arts">
        <h2 className="artstitle">ReoArts</h2>
        <p>pending..</p>
      </div>
    </div>
  );
}

export default Arts;
