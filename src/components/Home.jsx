import React from "react";
import aa from "../icons/aa.png";
import instagram from "../icons/instagram.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h4 className="home">
          <Link className="home" to="/">
            Home
          </Link>
        </h4>
        <nav>
          <h4 className="navlink">
            <a href="#section1">About</a>
          </h4>
          <h4 className="navlink">
            <a href="#section2">Projects</a>
          </h4>
          <h4 className="navlink">
            <a href="#section3">Contact</a>
          </h4>
          <h4 className="navlink">
            <Link to="/arts">Arts</Link>
          </h4>
        </nav>
      </header>
      <div id="bodyparent">
        <div id="bodychild1">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="nameParent">
            <h1 className="nameChild">Yosh! Srajan here ;)</h1>
            <br />
            <br />
            <img className="nameChild" src={aa} alt="h" />
          </div>
          <br />

          <section id="section1">
            <br />
            <h2>Me??</h2>
            <p>I am Srajan Kumar ;</p>
            <p>
              A second year CSE student from Sahyadri College of Engineering and
              Management, who loves to learn and explore technologies, sort of
              weeb and also ocasionally draws ;
            </p>
            <p>
              Currently im learning fullstack development and i look forward in
              improving in this field ;
            </p>
          </section>
          <section id="section2">
            <br />
            <h2>Projects</h2>
            <p>I have just started with these </p>
          </section>
          <section id="section3">
            <br />
            <h2>Contacts</h2>
            <p>
              I would love to connect with more people and know more on thses{" "}
            </p>
            <div>
              <a href="instagram.com/">
                <img className="icon" src={instagram} alt="h" />
              </a>
            </div>
          </section>
          <style>
            {`
          html {
            scroll-behavior: smooth;
          }
        `}
          </style>
        </div>
        <div id="bodychild2">
          <div class="sidebar"></div>
          <div class="sidebar2"></div>
          <div class="sidebar3"></div>
          <div class="sidebar2"></div>
          <div class="sidebar3"></div>
          <a href="instagram.com/">
            <img className="icon" src={instagram} alt="h" />
          </a>
          <a href="instagram.com/">
            <img className="icon" src={instagram} alt="h" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
