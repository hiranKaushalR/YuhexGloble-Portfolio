import React from "react";
import { blogCover } from "../../assets";
import { motion } from "framer-motion";

function BlogBody() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-evenly py-20"
    >
      <img src={blogCover} className="w-full xs:w-[80%] md:w-[45%]" />
      <h1 className="w-[95%] xs:w-[80%] md:w-[45%] text-lg sm:text-xl lg:text-3xl mx-auto font-bold">
        Please wait... <br /> Our writers are working hard to bring the best
        content to your finger tips{" "}
      </h1>
    </motion.div>
  );
}

export default BlogBody;
