
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { socialMediaForMenu } from "../../constants";
import { contacts } from "../../constants";

function ContactFormWithAnimations({ project, index }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [showThankMessage, setShowThankMessage] = useState(false);

  // UseState for condition checking
  const [fillBlanks, setFillBlanks] = useState(null);
  const [mailCheck, setMailCheck] = useState(null);

  // Destructuring useInView (This is for detecting viewport)
  const { ref, inView } = useInView();

  // Getting the today date
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`; // get the date in require format

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
    if (!name || !email || !date || !reason || !message) {
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
      className="bg-formBG rounded-lg"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {!showThankMessage && (
        <div className="rounded-lg flex justify-center items-center">
          <div className="">
            <h1 className="text-white text-lg md:text-3xl pb-3 md:pb-6">
              Let's Work Well Together
            </h1>
            <form className="flex items-stretch flex-col gap-2 text-sm w-full">
              <input
                type="text"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="email"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none "
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />

              {mailCheck && <p className="text-[#FF0000]">{mailCheck}</p>}
              <div className="flex  gap-2 md:gap-5">
                <input
                  type="date"
                  className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
                  onChange={(event) => setDate(event.target.value)}
                  min={formattedDate}
                />
                <input
                  type="text"
                  placeholder="Reason"
                  className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
                  onChange={(event) => setReason(event.target.value)}
                />
              </div>
              <textarea
                type="text"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  h-[100px] resize-none  focus:outline-none "
                placeholder="Message"
                onChange={handleMessageChange}
              />
              {fillBlanks && <p className="text-[#FF0000]">{fillBlanks}</p>}
              <input
                type="button"
                value="Send"
                className="bg-formBorder rounded-md px-4 py-1 cursor-pointer"
                onClick={handleContactSubmit}
              />
            </form>
          </div>
          <div className=" hidden md:flex justify-between flex-col gap-5">
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
            <div className="text-white flex flex-col justify-between">
              {contacts.map((contact) => (
                <div>
                  <h1 className="text-center">{contact.source}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showThankMessage && (
        <div className="font-bold text-3xl text-white text-center mx-auto py-10">
          <h1 className="py-2">Thank you for contacting us</h1>
          <h1 className="py-2">We will reach to you soon enough</h1>
          <h1 className="text-xl py-8 font-semibold">TEAM YUHEXGLOBLE </h1>
        </div>
      )}
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="w-full mx-auto">
      <div className="container w-full mx-auto">
        <ContactFormWithAnimations />
      </div>
    </section>
  );
}

export default Contact;
