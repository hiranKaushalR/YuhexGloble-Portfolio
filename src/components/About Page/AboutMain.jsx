import React from "react";
import AboutBody from "./AboutBody";
import AboutSummary from "./AboutSummary";
import AboutTeam from "./AboutTeam";
import AboutHead from "./AboutHead";
import AboutFounder from "./AboutFounder";

function AboutMain() {
  return (
    <div className="bg-white text-black">
      <AboutHead />

      <div className="py-10 mx-[10%]">
        <AboutBody />
      </div>
      <div className="py-10">
        <AboutSummary />
      </div>
      <div className="py-10 mx-[10%]">
        <AboutFounder />
      </div>
      <div className="py-10 mx-[10%]">
        <AboutTeam />
      </div>
    </div>
  );
}

export default AboutMain;
