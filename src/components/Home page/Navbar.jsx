import React from "react";
import { useState } from "react";
import menu from "../../assets/Menu.png";
import close from "../../assets/close.png";
import { socialMediaForMenu } from "../../constants";

function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  // Toggle the side bar in mobile mode
  function showSidebar() {
    setToggleSidebar(true);
  }

  function hideSidebar() {
    setToggleSidebar(false);
  }

  // Rendering Social media icons in mobile navigation bar
  const menuIconsInNavigation = socialMediaForMenu.map((socialMediaIcon) => (
    <div id={socialMediaIcon.id}>
      <a href={socialMediaIcon.link}>
        <img
          src={socialMediaIcon.icon}
          alt={socialMediaIcon.id}
          className="w-8 h-8"
        />
      </a>
    </div>
  ));

  return (
    <header className="p-6  bg-primary text-white sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center mx-auto max-w-[1200px]">
        <h1 className="font-bold text-lg">YuhexGloble</h1>
        <nav>
          {/* Navigation for dekstop mode */}
          <ul className="hidden navRes:flex font-semibold items-center">
            <li className="mx-4">
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <a href="#">Service</a>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <a href="#">Project</a>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <a href="#">Blog</a>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
            <li className="">
              {" "}
              <a href="#"></a>
              <button className="bg-buttonBG px-4 py-1 rounded">
                Appoinment
              </button>
            </li>
          </ul>

          {/* Navigation for mobile mode */}
          <div onClick={showSidebar} className="block navRes:hidden">
            <img src={menu} alt="Menu" className="w-8 h-6 cursor-pointer" />
          </div>
          <ul
            className={`fixed top-0 right-0 
          ${toggleSidebar ? "flex" : "hidden"} 
          flex-col items-start justify-start bg-primary sidebar`}
          >
            <li
              onClick={hideSidebar}
              className="flex justify-between items-center p-4 border-b-4"
            >
              <h1 className="text-xl">YuhexGlobal</h1>
              <img src={close} alt="close" className="w-8" />
            </li>
            <li className="m-1 mt-3  p-2">
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li className="m-1 p-2">
              {" "}
              <a href="#">Service</a>{" "}
            </li>
            <li className="m-1 p-2">
              {" "}
              <a href="#">Project</a>{" "}
            </li>
            <li className="m-1 p-2">
              {" "}
              <a href="#">Blog</a>{" "}
            </li>
            <li className="m-1 p-2">
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li className="m-1 p-2">
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
            <li className="to-the-center py-4">
              {" "}
              <a href="#"></a>
              <button className="bg-[#477C99] px-6 py-2 font-semibold mx-auto rounded-lg">
                Book An Appoinment
              </button>
              <div className="flex justify-between items-center p-6 pt-12">
                {menuIconsInNavigation}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
