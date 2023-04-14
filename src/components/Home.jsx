import React from "react";
import aa from "../icons/aa.png";
import instagram from "../icons/instagram.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h4 className="home">
          <a href="#section0" className="home">
            Home
          </a>
          {/* <Link className="home" to="/">
            Home
          </Link> */}
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
      <section id="section0"></section>
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="languages">
            <h2>Languages, Frameworks and Tools I use</h2>
            <div className="icons">
              <i class="devicon-html5-plain"></i>
              <i class="devicon-css3-plain"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-c-plain"></i>
              <i class="devicon-cplusplus-plain"></i>
              <i class="devicon-java-plain"></i>
              <i class="devicon-python-plain"></i>
              <i class="devicon-mongodb-plain-wordmark"></i>
              <i class="devicon-express-original-wordmark"></i>
              <i class="devicon-react-original"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
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
              Currently im learning fullstack development and i aim to improve
              myself in this field ;
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
            <p>I would love to connect with more people and learn stuff</p>
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
