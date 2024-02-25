import React from "react";
import { bubble } from "../../assets";


function AboutHead() {
  return (
    <div>
      <img src={bubble} className="top-0 absolute h-[400px] w-full z-10" />
      <div className="relative w-full text-center z-40 py-10">
        <h1 className="text-white text-6xl font-bold">About</h1>
      </div>
    </div>
  );
}

export default AboutHead;
