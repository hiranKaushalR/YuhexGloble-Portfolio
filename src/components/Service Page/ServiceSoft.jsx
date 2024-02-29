import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { softdev } from "../../assets";

function ServiceSoft() {
    const { ref, inView } = useInView();

    const animationSettings = {
      hidden: { opacity: 0, scale: 0.2 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      },
    };
  return (
    <motion.div
        className="flex justify-evenly items-center font-poppins"
        variants={animationSettings}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <img src={softdev} alt="" className="hidden mlg:block w-[35%]" />
        <div className="w-full mlg:w-2/4">
          <h1 className="text-2xl font-semibold text-formBG py-4">
            Software Development
          </h1>
          <div className="w-full h-[30vh] mlg:h-full">
            <img
              src={softdev}
              alt=""
              className="  w-full h-[30vh] object-cove mlg:hidden"
            />
          </div>
          <p className="py-2">
            Yuhex Global Software delivers cutting-edge web development
            solutions with a focus on captivating UI/UX designs. From simple
            portfolios to complex enterprise systems, our expertise spans a wide
            range of industries. Using diverse technologies, we ensure that our
            websites are secure, scalable, and efficient. Let us transform your
            online presence and bring your vision to life with our innovative,
            reliable, and top-quality web development services.
          </p>
        </div>
      </motion.div>

  )
}

export default ServiceSoft