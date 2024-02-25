import React from "react";
import { aboutPage } from "../../assets";

function AboutWhoAreWe() {
  return (
    <div className="relative z-30 py-12  flex flex-wrap justify-evenly items-center">
      <div className="w-2/4 min-w-[500px]">
        <h1 className="text-white text-3xl  font-bold">Who Are We ?</h1>
        <p className="text-justify ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          voluptas, saepe voluptate cumque harum minima provident, eum
          doloremque ex earum natus praesentium porro eveniet repudiandae
          recusandae consequatur! In recusandae quidem placeat maxime expedita
          odit possimus fugiat quod magni mollitia voluptatibus, molestias sed
          nostrum officiis, ullam provident deserunt, incidunt iste nulla!
        </p>
      </div>
      <div>
        <img src={aboutPage} alt="" className="w-[350px]" />
      </div>
    </div>
  );
}

export default AboutWhoAreWe;
