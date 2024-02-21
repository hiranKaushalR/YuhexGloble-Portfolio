import React from "react";
import { bubble } from "../../assets";

function ContactBody() {
  return (
    <div>
      <img src={bubble} className="top-0 absolute h-[450px] w-full z-10"/>
      <div>
        <h1 className="z-50">YuhexGlobal {'>'} About</h1>
      </div>
    </div>
  );
}

export default ContactBody;
