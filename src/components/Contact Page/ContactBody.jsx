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
    </div>
  );
}

export default ContactBody;
