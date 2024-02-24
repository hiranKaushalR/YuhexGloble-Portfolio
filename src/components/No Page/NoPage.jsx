import React from "react";
import { nopageError } from "../../assets";
import { NavLink } from "react-router-dom";

function NoPage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row items-center h-screen justify-evenly">
        <img src={nopageError} className="w-[70%] xs:w-[70%] sm:w-[50%] md:w-[45%]" />
        <div className="flex items-center justify-center gap-5 flex-col w-[95%] xs:w-[80%] md:w-[45%]">
          <h1 className=" text-lg sm:text-xl lg:text-3xl mx-auto font-bold">
            Oops... <br /> Seems like you've taken a wrong turn! No worries, let
            me guide you back to the homepage.{" "}
          </h1>
          <button className="bg-primary text-lg py-2 px-4 rounded-md text-white">
            <NavLink to='/'>Home Page</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
