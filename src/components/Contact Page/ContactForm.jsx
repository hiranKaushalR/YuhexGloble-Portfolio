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
    <div className="bg-formBG rounded-lg mx-auto flex flex-col lg:flex-row justify-between w-full items-center p-6 my-10">
      <div className="border-r-0 lg:border-r-2 lg:pr-10 border-formBorder w-full">
        <form className="flex items-stretch flex-col gap-2">
          <input
            type="text"
            className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white focus:outline-none"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white focus:outline-none"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {mailCheck && <p className="text-[#FF0000]">{mailCheck}</p>}
          <div className="flex flex-wrap justify-between gap-5">
            <input
              type="date"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white focus:outline-none"
              onChange={(event) => setDate(event.target.value)}
              min={formattedDate}
            />
            <input
              type="text"
              placeholder="Reason"
              className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white focus:outline-none"
              onChange={(event) => setReason(event.target.value)}
            />
          </div>
          <textarea
            type="text"
            className="bg-formBG border border-formBorder rounded-md px-4 py-1 text-white h-[100px] resize-none focus:outline-none"
            placeholder="Message"
            onChange={handleMessageChange}
          />
          {fillBlanks && <p className="text-[#FF0000]">{fillBlanks}</p>}
          <input
            type="button"
            value="Send"
            className="bg-formBorder rounded-md px-4 py-1"
            onClick={handleContactSubmit}
          />
        </form>
      </div>
      <div className="w-full lg:w-2/4 flex flex-col gap-5 lg:gap-10 m-auto items-center lg:items-start">
        <h1 className="text-center lg:text-left text-white">Get In Touch</h1>
        <div className="flex gap-5 lg:gap-10 m-auto items-center">
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
        <div className="text-white flex justify-center lg:justify-start items-center flex-col my-4 text-lg">
          {contacts.map((contact, index) => (
            <div key={index}>{contact.source}</div>
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
