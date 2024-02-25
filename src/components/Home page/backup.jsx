import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectDetails } from "../../constants";
import { link, fillStar, unfillStar } from "../../assets";
import { NavLink } from "react-router-dom";

function ProjectCard({ project, index }) {
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
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img key={i} src={fillStar} alt="filled star" className="w-5" />
        );
      } else {
        stars.push(
          <img key={i} src={unfillStar} alt="unfilled star" className="w-5" />
        );
      }
    }
    return stars;
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="flex flex-wrap mx-[10%] gap-5"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
     <div className="hidden ssmd:block bg-cardBG text-black w-[300px] rounded-lg p-1 m-auto my-6">
     <h1 className="text-center py-1 text-xl capitalize font-semibold">
        {project.projectName}
      </h1>
      <img src={project.image} alt="" />
      <div className="flex justify-center gap-1 py-2">
        {renderStars(project.rating)}
      </div>
      <p className="text-center">Ordered by: {project.client}</p>
      <img
        src={link}
        alt="link"
        className="rotate-45 flex justify-end float-end"
      />
     </div>
     <div className="block ssmd:hidden bg-cardBG text-Black rounded-lg p-1 m-auto min-w-[300px] w-full ssmd:w-[40%] my-2 ssmd:my-8">
     <div className="flex  items-center w-full h-[100px] gap-5">
        <img src={service.image} alt={service.id} className="rounded-lg h-full bg-cover" />
        <h1 className="font-bold text-lg py-1">{service.topic}</h1>
      </div>
     </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="my-12 w-full" id="project">
      <div className="pb-2 text-center ">
        <h1 className="text-4xl font-semibold">Latest of us</h1>
        <h1 className="text-lg capitalize font-poppins">
          most recent projects of YuhexGloble's
        </h1>
      </div>
      <div className="">
        {projectDetails.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div class="flex justify-center">
        <NavLink to="/project">
          {" "}
          <button class="border-2 border-cardBG font-semibold py-2 px-8 rounded-lg text-xl">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
