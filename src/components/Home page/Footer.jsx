import React from "react";
import { socialMediaForMenu, contacts } from "../../constants";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center flex-col sm:flex-row border-b-2">
          <div className="pb-4">
            <h1 className="text-4xl font-bold">YuhexGlobal</h1>
            <h2 className="text-[12px]">Company Description Goes Here</h2>
          </div>
          <form className="flex justify-between items-stretch flex-col xs:flex-row mb-6 md:mb-0">
            <input
              type="email"
              placeholder="Sign-up for the News and Offers"
              className="bg-primary text-white px-2 py-1 md:px-4 md:py-2 w-[280px] md:w-[300px] border-white border-solid border  focus:outline-none rounded-t-md xs:rounded-l-md"
            />
            <input
              type="submit"
              value="Sign-Up"
              className="font-semibold bg-buttonBG px-2 md:px-4 md:py-2  border-buttonBG border-solid border rounded-b-md xs:rounded-r-md cursor-pointer"
            />
          </form>
        </div>
        <div className="mt-6 max-w-[720px] mx-auto">
          <ul className="flex flex-col xs:flex-row gap-1 xs:gap-0 justify-between text-center md:text-left md:text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#project">Projects</a>
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
          <div className="flex flex-col xs:flex-row xs:items-center justify-center gap-4 xs:gap-10 my-9">
            {contacts.map((contact) => (
              <div className="flex items-center gap-4">
                <img src={contact.icon} alt={contact.id} className="w-5 xs:w-7" />
                <h1 className="text-lg xs:text-xl">{contact.source}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-between xs:justify-center items-center xs:gap-20">
            {socialMediaForMenu.map((socialmedia) => (
              <div id={socialmedia.id}>
                <a href={socialmedia.link} target="_blank">
                  <img src={socialmedia.icon} alt={socialmedia.id} className="w-8"/>
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
