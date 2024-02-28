import React from "react";
import { founder } from "../../assets";

function AboutFounder() {
  return (
    <section className="w-full">
      <div>
        <h1 className="text-3xl font-bold text-center pb-10">
          Meet the Founder
        </h1>
      </div>
      <div className="flex flex-wrap-reverse justify-evenly gap-10 items-center w-full font-poppins">
        <p className="text-justify min-w-[280px] w-2/4">
          {" "}
          Induwara Surasinghe is the founder and CEO of Yuhex Global Software. A
          driven undergraduate at Birmingham City University in the UK, Induwara
          established the company in 2022 with the vision of creating a software
          company that provides exceptional solutions and fosters a culture of
          innovation and collaboration. <br />
          <br />
          Induwara is currently pursuing a BSc Hons in Software Engineering at
          Birmingham City University, which reflects his commitment to mastering
          the foundations of software development. His academic background
          underscores his dedication to excellence and his desire to build a
          company that leads in the field. <br />
          <br />
          Join us as we continue our journey, led by Induwara's unwavering
          dedication and vision, to redefine what it means to be a global leader
          in software development.
        </p>

        <img src={founder} alt="" className="rounded min-w-[280px] w-[20%] " />
      </div>
    </section>
  );
}

export default AboutFounder;
