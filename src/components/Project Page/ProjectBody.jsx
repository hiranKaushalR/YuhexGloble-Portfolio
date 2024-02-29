import React from "react";
import { projectDetails } from "../../constants";
import { fillStar, unfillStar } from "../../assets";

function ProjectBody() {
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
      <div>
        <div className="flex flex-wrap justify-center gap-16 ">
          {projectDetails.map((project) => (
            <div className="min-w-[280px] w-[30%]">
              <a href={project.url} target="_blank">
                <div
                  key={project.id}
                  className="bg-cardBG rounded-[30px] w-full p-3 font-poppins"
                >
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
                  <div className="flex gap-2">
                    {project.category.map((category) => (
                      <h1 className="bg-white px-1 py-[1px] rounded capitalize">
                        {category}
                      </h1>
                    ))}
                  </div>
                  <h1>{project.domain}</h1>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;
