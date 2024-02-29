import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { appdev } from "../../assets";

function ServiceMobile() {
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
      <div className="w-full mlg:w-2/4">
        <h1 className="text-2xl font-semibold text-formBG py-4">
          Mobile Application Development
        </h1>
        <div className="w-full h-[30vh] mlg:h-full">
          <img
            src={appdev}
            alt=""
            className="mlg:hidden w-full h-[30vh] object-cover"
          />
        </div>
        <p className="py-2">
          Yuhex Global Software offers top-notch mobile application development
          services tailored to your unique needs. With a focus on innovation and
          design, we create intuitive and engaging mobile apps that deliver
          results. Whether you need a consumer app or a business solution, our
          team of experts uses the latest technologies to ensure your app is not
          only visually appealing but also powerful and secure. Partner with us
          to bring your mobile app vision to life and unlock new possibilities
          in the mobile world.
        </p>
      </div>
      <img src={appdev} alt="" className="w-[35%] hidden mlg:block" />
    </motion.div>
  );
}

export default ServiceMobile;
