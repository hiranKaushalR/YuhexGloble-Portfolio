import React from "react";
import { useState } from "react";
import { projectDetails } from "../../constants";
import { fillStar, unfillStar, nopageError } from "../../assets";

function ProjectBody() {
  const [filter, setFilter] = useState(null);

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
    <div className="pb-10">
      <div className="flex gap-2 text-lg w-full bg-formBG mb-10 text-white rounded">
        {" "}
        <button onClick={() => setFilter(null)} className={`${filter === null ? 'bg-formBG' : 'bg-cardBG'}  px-3 rounded`}>All</button>
        <button onClick={() => setFilter("Web Application")} className={`${filter === 'Web Application' ? 'bg-formBG' : 'bg-cardBG'}  px-3 rounded`}>Web</button>
        <button onClick={() => setFilter("Software Application")} className={`${filter === 'Software Application' ? 'bg-formBG' : 'bg-cardBG'}  px-3 rounded`}>
          Software
        </button>
        <button onClick={() => setFilter("Mobile Application")} className={`${filter === 'Mobile Application' ? 'bg-formBG' : 'bg-cardBG'}  px-3 rounded`}>App</button>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-16 text-center">
          {projectDetails.map((project) => {
            if (filter !== null && project.category !== filter) {
              return null; // Skip rendering if filter is not null and project category doesn't match
            }
            return (
              <div key={project.id} className="min-w-[280px] w-[30%]">
                <a href={project.url} target="_blank">
                  <div className="bg-cardBG rounded-[30px] w-full p-3 font-poppins">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full rounded-[15px]"
                    />
                    <h1 className="text-xl font-semibold py-1 text-center">
                      {project.projectName}
                    </h1>
                    <h1>{project.client}</h1>
                    <div className="flex justify-center gap-1 py-2">
                      {renderStars(project.rating)}
                    </div>
                    <div className="flex gap-2 py-3 justify-center">
                      <h1>{project.category}</h1>
                    </div>
                    <h1>{project.domain}</h1>
                  </div>
                </a>
              </div>
            );
          })}
          {filter !== null && // Check if filter is not null
            projectDetails.every((project) => project.category !== filter) && (
              <div className="text-center">
                <div className="flex flex-col md:flex-row items-center justify-evenly">
                  <img
                    src={nopageError}
                    className="w-[60%] xs:w-[60%] sm:w-[40%] md:w-[35%]"
                  />
                  <div className="flex items-center justify-center gap-5 flex-col w-[95%] xs:w-[80%] md:w-[45%]">
                    <h1 className=" text-lg sm:text-xl lg:text-3xl mx-auto font-bold">
                      We still didn't develop any{" "}
                      {filter === "Web Application"
                        ? "Web Appilcations"
                        : filter === "Software Application"
                        ? "Software application"
                        : "Mobile Applications"}
                    </h1>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;
