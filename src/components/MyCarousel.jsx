// import React, { useEffect, useRef } from "react";
// import Splide from "@splidejs/splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// const MyCarousel = () => {
//   const splideRef = useRef();

//   useEffect(() => {
//     const splide = new Splide(splideRef.current, {
//       type: "loop",
//       drag: "free",
//       focus: "center",
//       perPage: 5,
//       autoScroll: {
//         speed: 100, // Set a positive value
//       },
//       autoplay: true,
//       extensions: [AutoScroll],
//       pauseOnHover: false,
//     });

//     splide.mount();
//   }, []);

//   return (
//     <div className="splide" ref={splideRef}>
//       <div className="splide__track">
//         <ul className="splide__list">
//           <li className="splide__slide">
//             <i class="devicon-html5-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-css3-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-javascript-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-c-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-cplusplus-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-java-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-python-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-vscode-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-git-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-github-original"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-bootstrap-plain"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-mongodb-plain-wordmark"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-express-original-wordmark"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-react-original"></i>
//           </li>
//           <li className="splide__slide">
//             <i class="devicon-nodejs-plain-wordmark"></i>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MyCarousel;

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const MyCarousel = () => {
  const splideRef = useRef();

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 9,
      autoScroll: {
        speed: 1, // Set a positive value
      },
      autoplay: true,
      extensions: [AutoScroll],
      arrows: false, // Hide arrows
      pagination: false, // Hide pagination dots
      pauseOnHover: false,
    });

    splide.mount();
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <i class="devicon-html5-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-css3-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-javascript-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-c-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-cplusplus-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-java-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-python-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-vscode-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-git-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-github-original"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-bootstrap-plain"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-mongodb-plain-wordmark"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-express-original-wordmark"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-react-original"></i>
          </li>
          <li className="splide__slide">
            <i class="devicon-nodejs-plain-wordmark"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyCarousel;
