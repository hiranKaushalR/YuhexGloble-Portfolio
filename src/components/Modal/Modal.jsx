import React from "react";
import { useState } from "react";
import { close } from "../../assets";
import { motion } from "framer-motion";
import "./Modal.scss";

function Modal(props) {
  const [isAppointmentMade, setIsAppointmentMade] = useState(false);

  // get the data from forms to states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("web-development");
  const [date, setDate] = useState("");
  const [agreement, setAgreement] = useState(false);

  // UseState for condtion checkin
  const [fillBlanks, setFillBlanks] = useState(null);
  const [mailCheck, setMailCheck] = useState(null);
  const [numberCheck, setNumberCheck] = useState(null);
  const [agreeCheck, setAgreeCheck] = useState(null);

  //  Had to write a own function for check box
  function handleAgreement(event) {
    setAgreement(event.target.checked);
  }

  // Getting the today date
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`; // get the date in require format

  function handleAppointment() {
    // Checking for blank spaces
    if (!name || !email || !contact || !date) {
      setFillBlanks("Please Fill all the blanks");
      setMailCheck(null);
      setNumberCheck(null);
      setAgreeCheck(null);
      return;
    }

    // Checking if email is in right syntax
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsAppointmentMade(false);
      setMailCheck("Please insert a valid email.");
      setFillBlanks(null);
      setNumberCheck(null);
      setAgreeCheck(null);
      return;
    }

    // Checking if the mobile number is valid
    if (contact.length < 10 || contact.length > 12) {
      setIsAppointmentMade(false);
      setNumberCheck("Please insert a valid contact number");
      setFillBlanks(null);
      setMailCheck(null);
      setAgreeCheck(null);
      return;
    }

    // Checking if user agreed to terms and conditions
    if (!agreement) {
      setIsAppointmentMade(false);
      setAgreeCheck("You must Agree to the terms and conditions");
      setFillBlanks(null);
      setMailCheck(null);
      setNumberCheck(null);
      return;
    }

    // If all conditions are met, set appointment made to true
    setIsAppointmentMade(true);
    setFillBlanks(null);
    setMailCheck(null);
    setNumberCheck(null);
    setAgreeCheck(null);
  }

  return (
    <motion.div
   
      className="modal-background backdrop-blur-[5px]" w-
    >
      <motion.div    initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }} className="modal-container bg-formBG">
        {!isAppointmentMade ? (
          <div>
            <div className="title-close-button flex flex-wrap-reverse items-center justify-between w-full px-6">
              <h1 className="text-lg xxms:text-2xl">Book Your Appointment</h1>
              <button onClick={() => props.setOpenModal(false)}>
                <img src={close} className="w-6 xxms:w-8" />{" "}
              </button>
            </div>
            <div className="body">
              <form className="flex items-stretch flex-col gap-6 p-6">
                <input
                  type="text"
                  className="rounded py-1 px-2 bg-formBG focus:outline-none border border-formBorder"
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                />
                <div className="w-full">
                  <input
                    type="email"
                    className="rounded py-1 w-full px-2 my-0 bg-formBG focus:outline-none border border-formBorder"
                    placeholder="EMail"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {mailCheck && (
                    <span className="text-[#FF0000] my-0 py-0">
                      {mailCheck}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    className="rounded py-1 px-2 bg-formBG focus:outline-none border border-formBorder no-spinners w-full"
                    placeholder="Contact Number"
                    onChange={(event) => setContact(event.target.value)}
                  />
                  {numberCheck && (
                    <p className="text-[#FF0000]">{numberCheck}</p>
                  )}
                </div>
                <div className="flex flex-wrap items-stretch justify-between gap-2 w-full">
                  <select
                    type="text"
                    className="rounded w-full xmxs:w-[48%] py-1 px-3 bg-formBG focus:outline-none border border-formBorder"
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="other">Other...</option>
                  </select>
                  <input
                    type="date"
                    className="rounded py-1 px-2 bg-formBG focus:outline-none border border-formBorder w-full xmxs:w-[48%]"
                    onChange={(event) => setDate(event.target.value)}
                    min={formattedDate}
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={agreement}
                    onChange={handleAgreement}
                  />
                  <label htmlFor="agreement">
                    Acccept All Terms and Conditions
                  </label>
                </div>
              </form>
              {fillBlanks && (
                <p className="text-[#FF0000] font-semibold text-center">
                  {fillBlanks}
                </p>
              )}
              {agreeCheck && (
                <p className="text-[#FF0000] font-semibold text-center">
                  {agreeCheck}
                </p>
              )}
            </div>
            <div className="footer block">
              <button
                className="border-2 border-white"
                onClick={handleAppointment}
              >
                Book The Appointment
              </button>
            </div>{" "}
          </div>
        ) : (
          <div>
            <div className="title-close-button flex items-center justify-between w-full px-6">
              <h1 className="text-2xl"></h1>
              <button onClick={() => props.setOpenModal(false)}>
                <img src={close} className="w-8" />{" "}
              </button>
            </div>
            <div className="body text-center font-semibold">
              <h1 className="text-5xl py-5">Thank You</h1>
              <h1 className="text-2xl pb-16">TEAM YUHEXGLOBAL</h1>
            </div>
            <div className="footer">
              <button
                className="border-2 border-white"
                onClick={() => props.setOpenModal(false)}
              >
                Done
              </button>
            </div>{" "}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Modal;
