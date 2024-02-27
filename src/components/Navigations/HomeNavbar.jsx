import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../../assets/Menu.png";
import close from "../../assets/close.png";
import { socialMediaForMenu } from "../../constants";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function HomeNavbar(props) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const openModal = props.openModal;
  const setOpenModal = props.setOpenModal;

  // Toggle the side bar in mobile mode
  function showSidebar() {
    setToggleSidebar(true);
  }

  function hideSidebar() {
    setToggleSidebar(false);
  }

  return (
    <header className="bg-primary text-white sticky top-0 z-50 py-5  xxxs:py-10">
      <div
        className={`flex justify-between items-center mx-auto px-[14%] ${
          openModal ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <NavLink to="/">
          <h1 className="font-bold text-[26px] mlg:text-lg">YuhexGlobal</h1>
        </NavLink>
        <nav>
          {/* Navigation for desktop mode */}
          <ul className="hidden mlg:flex font-semibold items-center ">
            <li className="mx-4">
              <Link
                to="navigation-bar"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="service"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Service
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="project"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="mx-4">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-buttonBG px-4 py-1 rounded"
              >
                Appointment
              </button>
            </li>
          </ul>

          {/* Navigation for mobile mode */}
          <div
            onClick={openModal ? "" : showSidebar}
            className="block mlg:hidden"
          >
            <img
              src={menu}
              alt="Menu"
              className="w-6 h-6 xxxs:w-8 xxxs:h-6 cursor-pointer"
            />
          </div>
          <AnimatePresence>
            {toggleSidebar && (
              <motion.ul
                className="mlg:hidden text-center text-[18px] xxs:text-[25px] xxsm:text-[30px] fixed top-0 left-0 flex flex-col items-start justify-start bg-primary sidebar w-full"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <li
                  onClick={hideSidebar}
                  className="flex justify-between items-center p-4 border-b-4 text-left"
                >
                  <NavLink to="/">
                    <h1 className="text-xl">YuhexGlobal</h1>
                  </NavLink>
                  <img src={close} alt="close" className="w-6 xxxs:w-8" />
                </li>
                <li className="mt-[24px] xxs:mt-[100px] xxsm:mt-[70px]">
                  <Link
                    to="navigation-bar"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                    onClick={hideSidebar}
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-[18px] xxs:mt-[16px] xxsm:mt-[20px]">
                  <Link
                    to="service"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                    onClick={hideSidebar}
                  >
                    Service
                  </Link>
                </li>
                <li className="mt-[18px] xxs:mt-[16px] xxsm:mt-[20px]">
                  <Link
                    to="project"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                    onClick={hideSidebar}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mt-[18px] xxs:mt-[16px] xxsm:mt-[20px]">
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li className="mt-[18px] xxs:mt-[16px] xxsm:mt-[20px]">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="mt-[18px] xxs:mt-[16px] xxsm:mt-[20px]">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="to-the-center py-4" onClick={hideSidebar}>
                  <a href="#"></a>
                  <button
                    className="bg-[#477C99] px-6 py-2 font-semibold mx-auto rounded-lg text-[16px]"
                    onClick={() => setOpenModal(true)}
                  >
                    Book An Appointment
                  </button>
                  {/* <div className="flex justify-between items-center p-6 pt-12">
                    
                    {socialMediaForMenu.map((socialMediaIcon) => (
                      <div key={socialMediaIcon.id}>
                        <a href={socialMediaIcon.link}>
                          <img
                            src={socialMediaIcon.icon}
                            alt={socialMediaIcon.id}
                            className="w-8 h-8"
                          />
                        </a>
                      </div>
                    ))}
                  </div> */}
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </header>
  );
}

export default HomeNavbar;
