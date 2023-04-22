import React from "react";
import { Link } from "react-router-dom";
import img1 from "../arts/1.jpg";
import img2 from "../arts/2.jpg";
import img3 from "../arts/3.jpg";
import img4 from "../arts/4.jpg";
import img5 from "../arts/5.jpg";
import img6 from "../arts/6.jpg";
import img7 from "../arts/7.jpeg";
import img8 from "../arts/8.jpg";
import img9 from "../arts/9.jpg";
import img10 from "../arts/10.jpeg";
import img11 from "../arts/11.jpg";
import img12 from "../arts/12.jpg";

import instagram from "../icons/instagram-white.png";

function Arts() {
  return (
    <div id="arts">
      <header>
        <h4 id="home">
          <Link className="home" to="/">
            back
          </Link>
        </h4>
        <nav>
          <a href="https://instagram.com/reoarts/" target="_blank">
            <img id="iconn-insta" src={instagram} />
          </a>
          <a href="https://twitter.com/reoarts/" target="_blank">
            <i id="iconn" class="devicon-twitter-original"></i>
          </a>
        </nav>
      </header>

      <h2 id="artshead">Reo Arts</h2>
      <div className="artsparent">
        <div>
          <img id="imgarts" src={img1} />
        </div>
        <div>
          <img id="imgarts" src={img2} />
        </div>
        <div>
          <img id="imgarts" src={img3} />
        </div>
        <div>
          <img id="imgarts" src={img4} />
        </div>
        <div>
          <img id="imgarts" src={img5} />
        </div>
        <div>
          <img id="imgarts" src={img6} />
        </div>
        <div>
          <img id="imgarts" src={img7} />
        </div>
        <div>
          <img id="imgarts" src={img8} />
        </div>
        <div>
          <img id="imgarts" src={img9} />
        </div>
        <div>
          <img id="imgarts" src={img10} />
        </div>
        <div>
          <img id="imgarts" src={img11} />
        </div>
        <div>
          <img id="imgarts" src={img12} />
        </div>
      </div>
      <div id="bodychild3"></div>
    </div>
  );
}

export default Arts;
