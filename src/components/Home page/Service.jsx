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
      className="bg-cardBG text-Black text-justify rounded-lg p-1 my-6 cardRes:my-0 m-auto w-[300px]  cardRes:w-[280px] lg:w-[320px]"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img src={service.image} alt={service.id} className="rounded-lg" />
      <h1 className="font-bold text-lg py-1">{service.topic}</h1>
      <p>{service.summary}</p>
      <p className="text-right font-semibold cursor-pointer">Read more {'>>>'}</p>
    </motion.div>
  );
}

function Service() {
  return (
    <div className="my-4" id="service">
      <h1 className="font-bold text-center text-4xl py-8">Our Services</h1>
      <div className="cardRes:flex justify-between">
        {serviceDetails.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;
