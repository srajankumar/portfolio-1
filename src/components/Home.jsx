import React from "react";
import aa from "../icons/aa.png";
import instagram from "../icons/instagram.png";
import github from "../icons/github.png";
import mal from "../icons/mal.png";
import snap from "../icons/snap.png";

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
              <i class="devicon-vscode-plain"></i>
              <i class="devicon-git-plain"></i>
              <i class="devicon-github-original"></i>
              <i class="devicon-bootstrap-plain"></i>
              <i class="devicon-mongodb-plain-wordmark"></i>
              <i class="devicon-express-original-wordmark"></i>
              <i class="devicon-react-original"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
          </div>
          <br />

          <section id="section1">
            <br />
            <h2>About</h2>
            <p>My name is Srajan Kumar ;</p>
            <p>
              A second-year CSE student from Sahyadri College of Engineering and
              Management who has a strong passion for learning and exploring new
              technologies ;
            </p>{" "}
            <p>
              Enjoys spending free time reading manga, manhwa and sometimes
              anime ;
            </p>
            <p>
              Currently on a journey of learning full-stack development, with a
              goal to continuously improve my skills and knowledge in this field
              ;
            </p>
            <p>Also likes to draw ;</p>
          </section>
          <section id="section2">
            <br />
            <h2>Projects</h2>
            <p>pending..</p>
          </section>
          <section id="section3">
            <br />
            <h2>Contact</h2>
            <p>pending..</p>
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
          <div class="sidebar2"></div>
          <a href="https://github.com/srajankumar" target="_blank">
            <i id="icon" class="devicon-github-original"></i>
          </a>
          <div class="sidebar2"></div>
          <a href="https://www.linkedin.com/in/kumarsrajan/" target="_blank">
            <i id="icon" class="devicon-linkedin-plain"></i>
          </a>
          <div class="sidebar2"></div>
          <a href="https://twitter.com/kumarsrajan02/" target="_blank">
            <i id="icon" class="devicon-twitter-original"></i>
          </a>
          <div class="sidebar2"></div>
          <a href="https://instagram.com/withpainsimon/" target="_blank">
            <img id="icon" src={instagram} />
          </a>
          {/* <div class="sidebar2"></div>
          <a
            href="https://www.snapchat.com/add/withpainsimon?share_id=s_9RAfeixm8&locale=en-IN"
            target="_blank"
          >
            <img id="icon" src={snap} />
          </a> */}
          <div class="sidebar2"></div>
          <a
            href="https://myanimelist.net/profile/withpainsimon"
            target="_blank"
          >
            <img id="icon" src={mal} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
