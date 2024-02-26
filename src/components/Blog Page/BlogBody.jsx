import React from "react";
import { blogCover } from "../../assets";

function BlogBody() {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen justify-evenly">
      <img src={blogCover} className="w-full xs:w-[80%] md:w-[45%]" />
      <h1 className="w-[95%] xs:w-[80%] md:w-[45%] text-lg sm:text-xl lg:text-3xl mx-auto font-bold">
        Please wait... <br /> Our writers are working hard to bring the best
        content to your finger tips{" "}
      </h1>
    </div>
  );
}

export default BlogBody;

// initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
