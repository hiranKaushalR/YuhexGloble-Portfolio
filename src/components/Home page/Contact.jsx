import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { socialMediaForMenu } from "../../constants";
import { contacts } from "../../constants";

function ContactFormWithAnimations({ project, index }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThankMessage, setShowThankMessage] = useState(false);

  // UseState for condition checking
  const [fillBlanks, setFillBlanks] = useState(null);
  const [mailCheck, setMailCheck] = useState(null);

  // Destructuring useInView (This is for detecting viewport)
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

  useEffect(() => {
    if (showThankMessage) {
      const timer = setTimeout(() => {
        setShowThankMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showThankMessage]);

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleContactSubmit() {
    // Checking for blank spaces
    if (!name || !email || !message) {
      setFillBlanks("Please fill in all fields");
      setMailCheck(null);
      return;
    }

    // Checking if email is in the right syntax
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMailCheck("Please insert a valid email.");
      setFillBlanks(null);
      return;
    }

    // If all conditions are met, set appointment made to true
    console.log("Form submitted successfully!");
    setShowThankMessage(true);
    setFillBlanks(null);
    setMailCheck(null);
  }

  return (
    <motion.div
      className="bg-formBG rounded-lg  flex justify-center items-center flex-col w-full font-roboto"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {!showThankMessage && (
        <div className="flex justify-evenly items-center w-full">
          <div className="">
            <h1 className="text-[20px] xxms:text-[28px] xxsm:text-[40px] font-semibold pb-4">Let's Work Well Together</h1>
            <form className="flex justify-between items-stretch flex-col gap-4 font-roboto">
              <input
                type="text"
                className="bg-formBG border border-formBorder rounded-md  focus:outline-none p-1"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="email"
                className="bg-formBG border border-formBorder  focus:outline-none p-1 rounded-md"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />

              {mailCheck && <p className="text-[#FF0000]">{mailCheck}</p>}

              <textarea
                type="text"
                rows={6}
                className="bg-formBG border border-formBorder rounded-md  focus:outline-none resize-none p-2"
                placeholder="Message"
                onChange={handleMessageChange}
              />
              {fillBlanks && <p className="text-[#FF0000]">{fillBlanks}</p>}
              <input
                type="button"
                value="Send"
                className="bg-formBorder text-black rounded-md cursor-pointer py-1 font-semibold text-lg"
                onClick={handleContactSubmit}
              />
            </form>
          </div>
  
          <div className="hidden mlg:flex justify-between items-center flex-col gap-10 w-1/4">
            <h1 className="text-3xl">Get In Touch</h1>
            <div className="flex justify-between w-full">
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
            <div className="text-center text-lg">
              {contacts.map((contact) => (
                <div>
                  <h1 className="font-roboto">{contact.source}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showThankMessage && (
        <div className="">
          <h1 className="">Thank you for contacting us</h1>
          <h1 className="">We will reach to you soon enough</h1>
          <h1 className="">TEAM YUHEXGLOBLE </h1>
        </div>
      )}
    </motion.div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="flex gap-5 justify-between items-center self-center px-14 py-10 mt-16 max-w-full text-white bg-formBG rounded-[30px] max-md:flex-wrap my-10 max-md:px-5 max-md:mt-10 mx-[10%]"
    >
      <ContactFormWithAnimations />
    </section>
  );
}

export default Contact;
