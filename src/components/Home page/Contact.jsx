import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { socialMediaForMenu } from "../../constants";
import { contacts } from "../../constants";

function ContactFormWithAnimations({ project, index }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("ddddd");

  // UseState for condtion checkin
  const [fillBlanks, setFillBlanks] = useState(null);
  const [mailCheck, setMailCheck] = useState(null);

  // Destructuring useInView (Thisis for detect viewport)
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

  function handleMessageChange (event) {
    setMessage(event.target.value);
  };

  console.log (message)

  function handleContactSubmit() {
    // Checking for blank spaces
    if (!name || !email || !date || !reason || !message) {
      setFillBlanks("Please Fill all the blanks");
      setMailCheck(null);
      return;
    }

    // Checking if email is in right syntax
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsAppointmentMade(false);
      setMailCheck("Please insert a valid email.");
      setFillBlanks(null);
      return;
    }

    // If all conditions are met, set appointment made to true
    setIsAppointmentMade(true);
    setFillBlanks(null);
    setMailCheck(null);
  }

  return (
    <motion.div
      className="bg-formBG max-w-[800px] rounded-lg mx-auto  flex justify-between items-center  p-4 md:p-6 my-10"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="rounded-lg  mx-auto flex justify-between items-center md:p-6 my-2 md:my-10">
        <div className="md:border-r-2 md:pr-10 md:border-formBorder">
          <h1 className="text-white text-lg md:text-3xl pb-3 md:pb-6">
            Let's Work Well Together
          </h1>
          <form className="flex items-stretch flex-col gap-2 text-sm w-full">
            <input
              type="text"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
              placeholder="Name"
              onChange={(event) => setName(event.value.target)}
            />
            <input
              type="email"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none "
              placeholder="Email"
              onChange={(event) => setEmail(event.value.target)}
            />
            {mailCheck && <p>{mailCheck}</p>}
            <div className="flex  gap-2 md:gap-5">
              <input
                type="date"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
                onChange={(event) => setDate(event.value.target)}
              />
              <input
                type="text"
                placeholder="Reason"
                className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  focus:outline-none"
                onChange={(event) => setReason(event.value.target)}
              />
            </div>
            <textarea
              type="text"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white  h-[100px] resize-none  focus:outline-none "
              placeholder="Messsage"
              onChange={handleMessageChange}
            />
            {fillBlanks && <p>{fillBlanks}</p>}
            <input
              type="button"
              value="Send"
              className="bg-formBorder rounded-md px-4 py-1 cursor-pointer"
              onClick={handleContactSubmit}
            />
          </form>
        </div>
        <div className="w-2/4 hidden md:flex justify-between flex-col gap-5">
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
    </motion.div>
  );
}

function Contact() {
  return (
    <div id="contact" className="xs:mx-2 py-5">
      <ContactFormWithAnimations />
    </div>
  );
}

export default Contact;
