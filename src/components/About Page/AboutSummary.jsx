import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { summary } from "../../constants";

function AboutSummary() {
  const { ref, inView } = useInView();

  // giving animations
  const container = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="max-w-[1028px] mx-auto ">
      <div>
        <h1 className="text-3xl  font-bold text-center py-5 text-black">Summary</h1>
      </div>
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="bg-primary text-white flex flex-wrap mslg:flex-nowrap gap-10 mx-10 justify-around items-center py-6 px-4 rounded-xl"
      >
        {summary.map((detail) => (
          <motion.div
            variants={item}
            key={detail.id}
            className="text-xl font-semibold text-center min-w-[200px] p-2 rounded-md"
          >
            <h1>{detail.count}</h1>
            <h1>{detail.topic}</h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutSummary;
