import React from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, textVariantOpposite } from "../utils/motion"; // Removing fadeOut, since we will handle exit using inView logic
import Resume from "./Resume";
import Socials from "./Socials";

const ServiceCard = ({ index, title, icon }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={sectionRef}>
      <AnimatePresence>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? "show" : "hidden"}
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.p
          initial="hidden"
          animate={sectionInView ? "show" : "hidden"}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in C/C++ and
          JavaScript, and expertise in frameworks like React. I'm a quick 
          learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!.
          I am also a CyberSecurity Enthusiast with a deep interest in psychology.
        </motion.p>
      </AnimatePresence>

      <div>
        <br/>
        <Resume />
      </div>
      <br/>
      <div>
        
        <Socials></Socials>
        
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
