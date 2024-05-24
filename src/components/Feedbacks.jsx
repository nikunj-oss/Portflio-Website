import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Live1 from "./Live1";

const FeedbackCard = ({
  testimonial,
  name,
  live_link,
  info
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ type: "spring", duration: 0.5 }}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[10px]'><img src={testimonial} alt="" /></p>
        <br></br>
        <p className='text-white tracking-wider text-[15px]'>{info}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <br />

            <Live1 url={live_link}></Live1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} ref={ref}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <p className={styles.sectionSubText}>Frontend is the starting</p>
          <h2 className={styles.sectionHeadText}>Some Designs</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial) => (
          <FeedbackCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
