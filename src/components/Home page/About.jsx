import React from "react";
import { about } from "../../assets";

function AboutBody() {
  return (
    <section className="flex flex-wrap justify-center items-center mx-[10%]">
      <div className="mx-auto my-8">
      <div className="flex justify-between items-center flex-col gap-5 py-10">
        <h1 className="text-4xl text-center font-semibold">Who We Are</h1>
        <p className="text-center text-lg">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </p>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-between w-full">
        <div className="flex flex-wrap items-center justify-between gap-10 w-full">
          <div className="w-[45%]">
            <h1 className="text-3xl font-semibold">Our Mission</h1>
            <p>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
          <div className="w-[45%]">
            <h1 className="text-3xl font-semibold">Our Visions</h1>
            <p>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src={about} alt="" className="w-[20%]" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutBody;
