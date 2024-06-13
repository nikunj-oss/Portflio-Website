// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Other from "./Other";
// import { styles } from "../styles";

// const Tech = () => {
//   return (
//     <div>
//         <div>
//           <p className={styles.sectionSubText}>Technical Abilities i own</p>
//           <h2 className={styles.sectionHeadText}>Some Skiils I Master </h2>
//         </div>
//         <div className='flex flex-row flex-wrap justify-center gap-10'>
//         {technologies.map((technology) => (
//           <div className='w-28 h-28' key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//       <br/>
//       <div>
//       <h2 className="text-xl font-bold mb-4 mx-3">Other Skills</h2>
//       <div className="flex flex-wrap gap-2">
//         <Other name="Python"/>
//         <Other name="ExpressJS"/>
//         <Other name="MaterialUI"/>
//         <Other name="Heroku"/>
//         <Other name="Netlify"/>
//         <Other name="Github"/>
//         <Other name="Vite"/>
//       </div>
//       </div>
//     </div>
    
//   );
// };

// export default SectionWrapper(Tech, "");

import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Other from "./Other";
import { styles } from "../styles";

// Utility function to detect if the user is on a mobile device
const isMobileDevice = () => {
  return window.innerWidth <= 768;
};

// Import images
import html from '../assets/non render/html.png';
import css from '../assets/non render/css.png';
import javascript from '../assets/non render/javascript.png';
import Bootstrap from '../assets/non render/bootstrap.png';
import reactjs from '../assets/non render/reacts.png';
import redux from '../assets/non render/redux.png';
import tailwind from '../assets/non render/tailwind.png';
import nodejs from '../assets/non render/nodejs.png';
import sql from '../assets/non render/sql.png';
import threejs from '../assets/non render/three.png';
import git from '../assets/non render/git.png';
import figma from '../assets/non render/figma.png';
import cpp from '../assets/non render/c++.png';

// Create a mapping of technology names to images
const images = {
  "HTML 5": html,
  "CSS 3": css,
  "JavaScript": javascript,
  "Bootstrap": Bootstrap,
  "React JS": reactjs,
  "Redux Toolkit": redux,
  "Tailwind CSS": tailwind,
  "Node JS": nodejs,
  "SQL": sql,
  "Three JS": threejs,
  "git": git,
  "figma": figma,
  "C++": cpp,
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    // Check on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <p className={styles.sectionSubText}>Technical Abilities I Own</p>
        <h2 className={styles.sectionHeadText}>Some Skills I Master</h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {isMobile ? (
              <img src={images[technology.name]} alt={technology.name} />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold mb-4 mx-3">Other Skills</h2>
        <div className="flex flex-wrap gap-2">
          <Other name="Python" />
          <Other name="ExpressJS" />
          <Other name="MaterialUI" />
          <Other name="Heroku" />
          <Other name="Netlify" />
          <Other name="Github" />
          <Other name="Vite" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
