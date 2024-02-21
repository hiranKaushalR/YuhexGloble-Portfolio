import React from "react";
import { about } from "../../assets";

function AboutBody() {
  return (
    <div className="max-w-[1200px] mx-auto my-8">
      <div className="flex justify-between items-center flex-col gap-5 py-10">
        <h1 className="text-4xl text-center font-semibold">Who We Are</h1>
        <p className="text-center text-lg">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-col gap-10 max-w-[550px]">
          <div>
            <h1 className="text-3xl font-semibold">Our Mission</h1>
            <p>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Our Visions</h1>
            <p>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.{" "}
            </p>
          </div>
        </div>
        <div>
          <img src={about} alt="" className="w-[450px]" />
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
