import React from "react";
import AboutBody from "./AboutBody";
import AboutSummary from "./AboutSummary";
import AboutTeam from "./AboutTeam";
import AboutHead from "./AboutHead";

function AboutMain() {
  return (
    <div className="bg-primary text-white">
      <AboutHead />
     
      <div className="py-10 mx-[10%]">
        <AboutBody />
      </div>
      <div className="py-10 mx-[10%]">
        <AboutSummary />
      </div>
      <div className="py-10 mx-[10%]">
        <AboutTeam />
      </div>
    </div>
  );
}

export default AboutMain;
