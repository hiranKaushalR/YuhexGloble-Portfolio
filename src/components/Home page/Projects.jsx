import React from "react";
import { projectDetails } from "../../constants";
import { link } from "../../assets";

function Projects() {
  return (
    <div className="my-12">
      <div className="py-10 text-center text-lg font-bold">
        <h1>Latest of us</h1>
        <h1>most recent projects of YuhexGloble's</h1>
      </div>
      <div className="flex justify-between">
        {projectDetails.map((detail) => (
          <div id={detail.id} className="bg-primary text-white  max-w-[320px]">
            <img src={detail.image} className="" />
            <h1>{detail.projectName}</h1>
            stars goes here
            <img src={link} alt="link" className="rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
