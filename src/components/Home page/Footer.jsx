import React from "react";
import { NavLink } from "react-router-dom";
import { socialMediaForMenu, contacts } from "../../constants";

function Footer() {
  return (
    <footer className="bg-primary text-white pt-8">
      <div className="mx-[10%] px-[3%]">
        <div className="flex justify-between items-center flex-col cardRes:flex-row border-b-2">
          <div className="pb-4">
            <h1 className="text-4xl font-bold">YuhexGlobal</h1>
            <h2 className="text-[12px]">Company Description Goes Here</h2>
          </div>
          <form className="flex justify-between items-stretch flex-col xs:flex-row mb-6 md:mb-0 gap-y-2">
            <input
              type="email"
              placeholder="Sign-up for the News and Offers"
              className="bg-primary text-white px-2 py-1 md:px-4 md:py-2 w-[280px] md:w-[300px] border-white border-solid border  focus:outline-none font-roboto radius-input rounded-md xs:rounded-l-md xs:rounded-r-none"
            />
            <input
              type="submit"
              value="Sign-Up"
              className="font-semibold bg-buttonBG px-2 md:px-4 md:py-2  border-buttonBG border-solid cursor-pointer rounded-md xs:rounded-r-md xs:rounded-l-none"
            />
          </form>
        </div>
        <div className="mt-6 max-w-[720px] mx-auto">
          <ul className="flex flex-col xs:flex-row gap-1 xs:gap-0 justify-between md:text-lg">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/service'>Service</NavLink>
            </li>
            <li>
              <NavLink to='project'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/terms'>Terms and Conditions</NavLink>
            </li>
          </ul>
          <div className="flex flex-col xs:flex-row xs:items-center justify-center gap-4 xs:gap-10 my-9">
            {contacts.map((contact) => (
              <div className="flex items-center gap-4 font-roboto" key={contact.id}>
                <img
                  src={contact.icon}
                  alt={contact.id}
                  className="w-5 xs:w-7"
                />
                <h1 className="text-lg xs:text-xl">{contact.source}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-between xs:justify-center items-center xs:gap-20">
            {socialMediaForMenu.map((socialmedia) => (
              <div key={socialmedia.id}>
                <a href={socialmedia.link} target="_blank">
                  <img
                    src={socialmedia.icon}
                    alt={socialmedia.id}
                    className="w-8"
                  />
                </a>
              </div>
            ))}
          </div>
          <p className="py-0 text-center pt-4 font-poppins">
            &copy; Copyright YuhexGlobal Alright Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
