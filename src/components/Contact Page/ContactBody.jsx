import React from "react";
import { bubble } from "../../assets";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className="bg-primary text-white">
      <img src={bubble} className="top-0 absolute h-[300px] w-full z-10 bg-cover" />
      <div className="relative w-full text-center z-40 py-20">
        <h1 className="text-white text-6xl font-bold">
          <span className="hidden">YuhexGlobal{">"}</span> Contact
        </h1>
      </div>
      <div className="relative z-30 py-6 max-w-[800px] mx-auto">
      <h1 className="text-white text-2xl text-center">Let's Work Well Together</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactBody;
