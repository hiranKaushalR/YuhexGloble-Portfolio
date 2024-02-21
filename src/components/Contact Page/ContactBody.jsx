import React from "react";
import { bubble } from "../../assets";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className="bg-primary text-white">
      <img src={bubble} className="top-0 absolute h-[400px] w-full z-10" />
      <div className="relative w-full text-center z-40 py-20">
        <h1 className="text-white text-6xl font-bold">
          YuhexGlobal{">"}Contact
        </h1>
      </div>
      <div className="relative z-30 py-12  max-w-[800px] mx-auto">
      <h1 className="text-white text-3xl">Let's Work Well Together</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactBody;
