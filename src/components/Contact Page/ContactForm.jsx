import React from "react";
import { useState, useEffect } from "react";
import { socialMediaForMenu } from "../../constants";
import { contacts } from "../../constants";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [showThankMessage, setShowThankMessage] = useState(false);

  // UseState for condition checking
  const [fillBlanks, setFillBlanks] = useState(null);
  const [mailCheck, setMailCheck] = useState(null);

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
    console.log("Form submitted successfully in contact page!");
    setShowThankMessage(true);
    setFillBlanks(null);
    setMailCheck(null);
  }

  // Getting the today date
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`; // get the date in require format

  return (
    <div id="contact" className="">
      {!showThankMessage && (
        <div className="flex justify-evenly items-center w-full bg-formBG rounded-lg ">
          <div className=" py-10">
           
            <form className="flex justify-between items-stretch flex-col gap-4 mx-2 font-roboto">
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

              <div className="flex flex-wrap justify-center items-stretch gap-5 w-full">
                <input
                  type="date"
                  className="bg-formBG border border-formBorder rounded-md px-4 py-1 w-full text-white focus:outline-none"
                  onChange={(event) => setDate(event.target.value)}
                  min={formattedDate}
                />
                <select
                  type="text"
                  placeholder="Reason"
                  className="bg-formBG border border-formBorder rounded-md px-4 w-full py-1 text-white focus:outline-none"
                 
                >
                  <option value="web-development" selected>Web Development</option>
                  <option value="software-development">Software Development</option>
                  <option value="app-development">App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

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
                className="bg-formBorder text-white rounded-md cursor-pointer py-1 font-semibold text-lg"
                onClick={handleContactSubmit}
              />
            </form>
          </div>

          <div className="hidden lg:flex justify-between items-center flex-col gap-10 w-1/4 text-white">
            <h1 className="text-3xl">Get In Touch</h1>
            <div className="flex justify-between w-full">
              {socialMediaForMenu.map((socialmedia) => (
                <div key={socialmedia.id}>
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
                <div key={contact.id}>
                  <h1 className="">{contact.source}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showThankMessage && (
        <div className="font-bold text-3xl bg-formBG text-white text-center mx-auto py-10 my-5 rounded-md">
          <h1 className="py-2">Thank you for contacting us</h1>
          <h1 className="py-2">We will reach to you soon enough</h1>
          <h1 className="text-xl py-8 font-semibold">TEAM YUHEXGLOBLE </h1>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
