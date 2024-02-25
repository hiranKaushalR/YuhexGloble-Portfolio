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
      className="bg-cardBG text-Black text-justify rounded-lg p-1 m-auto w-[40%] my-8"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center w-full h-[100px] gap-5">
        <img src={service.image} alt={service.id} className="rounded-lg h-full bg-cover" />
        <h1 className="font-bold text-lg py-1">{service.topic}</h1>
      </div>
    </motion.div>
  );
}

function Service() {
  return (
    <div className="my-4" id="service">
      <h1 className="font-bold text-center text-4xl py-8">Our Services</h1>
      <div className="flex flex-wrap mx-[10%] ">
        {serviceDetails.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;
