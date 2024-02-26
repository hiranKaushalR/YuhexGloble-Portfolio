import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { serviceDetails } from "../../constants";

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView();

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 3 === 0 ? -10 : index % 3 === 1 ? 0 : 10,
      y: index % 3 === 1 ? 10 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-cardBG text-Black rounded-lg p-1 m-auto  w-[90%]  xxxs:min-w-[300px] ssmd:w-[40%] my-2 ssmd:my-8"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col xxxs:flex-row  items-center w-full xxxs:h-[100px] xxxs:gap-5">
        <img
          src={service.image}
          alt={service.id}
          className="rounded-lg h-full bg-cover"
        />
        <h1 className="font-bold xxxs:text-sm xxms:text-lg py-2 xxxs:py-1 text-center">
          {service.topic}
        </h1>
      </div>
    </motion.div>
  );
}

function Service() {
  return (
    <div className="my-10">
      <h1 className="font-bold text-center text-4xl py-12" id="service">
        Our Services
      </h1>
      <div className="flex flex-wrap mx-[10%] items-stretch font-poppins gap-x-10">
        {serviceDetails.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;
