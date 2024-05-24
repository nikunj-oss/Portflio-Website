import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Other from "./Other";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
        <div>
          <p className={styles.sectionSubText}>Technical Abilities i own</p>
          <h2 className={styles.sectionHeadText}>Some Skiils I Master </h2>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <br/>
      <div>
      <h2 className="text-xl font-bold mb-4 mx-3">Other Skills</h2>
      <div className="flex flex-wrap gap-2">
        <Other name="Python"/>
        <Other name="ExpressJS"/>
        <Other name="MaterialUI"/>
        <Other name="Heroku"/>
        <Other name="Netlify"/>
        <Other name="Github"/>
        <Other name="Vite"/>
      </div>
      </div>
    </div>
    
  );
};

export default SectionWrapper(Tech, "");
