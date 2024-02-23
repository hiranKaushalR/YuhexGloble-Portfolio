import React from "react";
import { bubble, aboutPage } from "../../assets";

function AboutBody() {
  return (
    <div className="bg-primary text-white">
      <img src={bubble} className="top-0 absolute h-[400px] w-full z-10" />
      <div className="relative w-full text-center z-40 py-20">
        <h1 className="text-white text-6xl font-bold">YuhexGlobal{">"}About</h1>
      </div>
      <div className="relative z-30 py-12  flex justify-evenly items-center">
        <div className="w-[500px]">
          <h1 className="text-white text-3xl  font-bold">Who Are We ?</h1>
          <p className="text-justify font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            voluptas, saepe voluptate cumque harum minima provident, eum
            doloremque ex earum natus praesentium porro eveniet repudiandae
            recusandae consequatur! In recusandae quidem placeat maxime expedita
            odit possimus fugiat quod magni mollitia voluptatibus, molestias sed
            nostrum officiis, ullam provident deserunt, incidunt iste nulla!
          </p>
        </div>
        <div>
          <img src={aboutPage} alt="" className="w-[350px]"/>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
