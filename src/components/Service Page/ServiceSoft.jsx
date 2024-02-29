import React from "react";
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
          Yuhex Global Software excels in desktop application development,
          crafting tailored solutions to streamline your operations and boost
          productivity. Our team harnesses the latest technologies to create
          robust and user-friendly applications that meet your specific
          requirements. From concept to execution, we prioritize efficiency,
          security, and seamless integration, ensuring a smooth user experience
          across platforms. Whether you need a standalone application or an
          enterprise-level system, trust us to deliver solutions that exceed
          your expectations. Elevate your business with Yuhex Global's desktop
          application development services and experience innovation like never
          before.
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceSoft;
