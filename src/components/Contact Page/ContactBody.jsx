import React from "react";
import { bubble } from "../../assets";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className="bg-primary text-white">
      <img
        src={bubble}
        className="top-0 absolute h-[400px] w-full z-10 bg-cover"
      />
      <div className="relative w-full text-center z-40 py-10">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">Contact</h1>
      </div>
      <div className="relative z-30 py-16 mx-[10%]">
        <h1 className="text-xl sm:text-[40px] sm:font-semibold pb-4">
          Let's Work Well Together
        </h1>
        <ContactForm />
      </div>
      <div className="font-bold text-white text-center text-lg pb-10 font-poppins">
        <h1>Do you need any Help ?</h1>
        <h1>Contact Support</h1>
        <button className="bg-buttonBG text-black my-3 px-6 py-2 rounded-md">Call Now</button>
      </div>
    </div>
  );
}

export default ContactBody;
