import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { socialMediaForMenu } from "../../constants";
import { contacts } from "../../constants";

function FormAnime({ project, index }) {
  const { ref, inView } = useInView();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: index % 3 === 1 ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="bg-formBG w-[800px] rounded-lg mx-auto flex justify-between items-center p-6 my-10"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="bg-formBG w-[800px] rounded-lg mx-auto flex justify-between items-center p-6 my-10">
        <div className="border-r-2 pr-10 border-formBorder">
          <h1 className="text-white text-3xl pb-6">Let's Work Well Together</h1>
          <form className="flex items-stretch flex-col gap-2">
            <input
              type="text"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none "
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none "
              placeholder="Email"
            />
            <div className="flex gap-5">
              <input
                type="date"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
              />
              <input
                type="text"
                placeholder="Reason"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
              />
            </div>
            <textarea
              type="text"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  h-[100px] resize-none  focus:outline-none "
              placeholder="Messsage"
            />
            <input
              type="submit"
              value="Send"
              className="bg-formBorder rounded-md px-4 py-1"
            />
          </form>
        </div>
        <div className="w-2/4 flex justify-between flex-col gap-5">
          <h1 className="text-center text-white">Get In Touch</h1>
          <div className="flex gap-10 m-auto items-center">
            {socialMediaForMenu.map((socialmedia) => (
              <div id={socialmedia.id}>
                <a target="_blank" href={socialmedia.link}>
                  <img
                    src={socialmedia.icon}
                    alt={socialmedia.id}
                    className="w-7"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="text-white flex justify-between">
            {contacts.map((contact) => (
              <div>{contact.source}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <div id="contact" className=" py-5">
      <FormAnime />
    </div>
  );
}

export default Contact;
