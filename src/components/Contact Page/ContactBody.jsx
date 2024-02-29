import React from "react";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className="bg-white text-black">
      <div className="bg-bubble">
      <h1 className=" text-4xl sm:text-6xl font-bold text-center text-white">Contact</h1>
      </div>
      
      <div className="relative z-30 mx-[10%]">
        <h1 className="text-xl sm:text-[40px] sm:font-semibold pb-4 text-[#2e5063]">
          Let's Work Well Together
        </h1>
        <ContactForm />
      </div>
      <div className="font-bold  text-center text-lg pb-10 font-poppins">
        <h1>Do you need any Help ?</h1>
        <h1>Contact Support</h1>
        <button className="bg-buttonBG text-black my-3 px-6 py-2 rounded-md">Call Now</button>
      </div>
    </div>
  );
}

export default ContactBody;
