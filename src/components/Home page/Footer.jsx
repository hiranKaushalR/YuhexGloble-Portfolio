import React from "react";
import { socialMediaForMenu, contacts } from "../../constants";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center border-b-2">
          <div className="pb-4">
            <h1 className="text-5xl font-bold">YuhexGlobal</h1>
            <h2 className="text-sm">Company Description Goes Here</h2>
          </div>
          <form>
            <input
              type="email"
              placeholder="Sign-up for the News and Offers"
              className="bg-primary text-white px-4 py-2 w-[300px] border-white border-solid border-2  focus:outline-none rounded-l-md"
            />
            <input
              type="submit"
              value="Sign-Up"
              className="font-semibold bg-buttonBG px-4 py-2 border-buttonBG border-solid border-2 rounded-r-md cursor-pointer"
            />
          </form>
        </div>
        <div className="mt-6 max-w-[720px] mx-auto">
          <ul className="flex justify-between text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="terms">Terms and Conditions</a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-10 my-9">
            {contacts.map((contact) => (
              <div className="flex items-center gap-4">
                <img src={contact.icon} alt={contact.id} className="w-7" />
                <h1 className="text-xl">{contact.source}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-20">
            {socialMediaForMenu.map((socialmedia) => (
              <div id={socialmedia.id}>
                <a href={socialmedia.link} target="_blank">
                  <img src={socialmedia.icon} alt={socialmedia.id} className="w-8 h-8"/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
