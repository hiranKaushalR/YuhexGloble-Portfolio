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
      className={`bg-cardBG text-black w-[70%] ssmd:w-[300px] rounded-lg p-1 m-auto my-2 ssmd:my-6`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    ><a href={project.url} target="_blank">
      <div className="block xsm:hidden ssmd:block">
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
      </a>
      <div className="hidden xsm:flex ssmd:hidden justify-start  items-center w-[90%] gap-10">
        <div className="w-2/4">
          <img
            src={project.image}
            alt={project.id}
            className="rounded-lg  bg-cover"
          />
        </div>
        <div>
          <h1 className="font-bold smmd:text-lg py-1">{project.projectName}</h1>
          <h1 className="font-bold text-xs py-1">Order by :{project.client}</h1>
          <div>
            <div className="flex justify-center gap-x-[5px] smmd:gap-x-4">
              {renderStars(project.rating)}
            </div>
          </div>
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
        <h1 className="text-xs xxms:text-lg capitalize font-poppins">
          most recent projects of YuhexGloble's
        </h1>
      </div>
      <div className="flex flex-wrap mx-[10%] gap-5">
        {projectDetails.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div class="flex justify-center my-4">
        <NavLink to="/project">
          {" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            class="border-2 border-cardBG font-semibold py-2 px-8 rounded-lg text-xl"
          >
            See More
          </motion.button>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
