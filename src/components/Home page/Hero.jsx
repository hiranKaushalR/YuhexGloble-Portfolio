import React from "react";
import { technologies } from "../../constants";

function Hero() {
  // Rendering Technology Icons
  const technologyIcons = technologies.map((tech) => (
    <div id={tech.id}>
      <img src={tech.icon} alt={tech.id} className="w-12" />
    </div>
  ));
  return (
    <section className=" bg-primary text-white px-6">
      <div className="flex items-center justify-evenly flex-col text-center p-0 max-w-[1200px]  m-auto h-screen animate__animated animate__slideInUp">
        <div className="flex justify-between items-center flex-col">
          <h1 className="capitalize text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-6">
            let's construct your high performance, professionally designed
            website.
          </h1>
          <div className="mt-6 block  xs:flex  justify-center xs:gap-10">
            <button className="mb-2 xs:mb-0 py-2 border-2 w-[250px] font-semibold transition-all ease-in-out duration-300  text-white hover:bg-buttonBG rounded-md">
              Book an Appointment
            </button>
            <button className="my-2 xs:my-0 py-2 border-2 w-[250px] font-semibold transition-all ease-in-out duration-300  text-white hover:bg-buttonBG rounded-md">
              Projects
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full">{technologyIcons}</div>

        <div></div>
      </div>
    </section>
  );
}

export default Hero;
