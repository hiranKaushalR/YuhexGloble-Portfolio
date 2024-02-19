import React from "react";
import { projectDetails } from "../../constants";
import { link, fillStar, unfillStar } from "../../assets"; 

function Projects() {

  // getting the stars for rating ✨
  function renderStars (rating) {
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
  };

  return (
    <div className="my-12">
      <div className="pt-[60px] pb-2 text-center ">
        <h1 className="text-4xl font-semibold">Latest of us</h1>
        <h1 className="text-lg capitalize">most recent projects of YuhexGloble's</h1>
      </div>
      <div className="cardRes:flex justify-between">
        {projectDetails.map((detail) => (
          <div
            key={detail.id}
            id={detail.id}
            className="bg-primary text-white max-w-[300px]  cardRes:w-[280px] lg:w-[320px] rounded-lg p-1 m-auto my-6"
          >
            <h1 className="text-center py-1 text-xl capitalize font-semibold">{detail.projectName}</h1>
            <img src={detail.image} alt="" />

            <div className="flex justify-center gap-1 py-2">{renderStars(detail.rating)}</div>
            <p className="text-center">Ordered by: {detail.client}</p>
            <img src={link} alt="link" className="rotate-45" />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
