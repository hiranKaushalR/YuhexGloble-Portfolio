import React from "react";
import Slider from "react-slick";
import { technologies } from "../../constants";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function Hero(props) {
  // For the Appoinment Modal
  const openModal = props.openModal;
  const setOpenModal = props.setOpenModal;

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  // Rendering Technology Icons
  const technologyIcons = technologies.map((tech) => (
    <div id={tech.id}>
      <img src={tech.icon} alt={tech.id} className="w-8 xxs:w-12 sm:w-10 md:w-14" />
    </div>
  ));
  return (
    <section className=" bg-primary text-white px-6" id="navigation-bar">
      <div className="flex items-center justify-evenly flex-col text-center p-0 m-auto h-screen mx-[10%]">
        <div className="flex justify-between items-center flex-col">
          <h1 className="capitalize text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mx-[2%] pb-6 mt-10">
            let's construct your high performance, professionally designed
            website.
          </h1>
          <div className="mt-6 block  xs:flex  justify-center xs:gap-10 font-thin font-roboto">
            <button
              onClick={() => setOpenModal(true)}
              className="mb-2 xs:mb-0 py-2 border-2 w-[250px] transition-all ease-in-out duration-300  text-white hover:bg-buttonBG rounded-md"
            >
              Book an Appointment
            </button>
            <Link to="/project">
              <button className="my-2 xs:my-0 py-2 border-2 w-[250px] transition-all ease-in-out duration-300  text-white hover:bg-buttonBG rounded-md">
                Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:flex hidden justify-center gap-[8%] w-full">
          {technologyIcons}
        </div>
        <Slider {...settings} className="flex sm:hidden justify-between w-full">
          {technologyIcons}
        </Slider>

        <div></div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </section>
  );
}

export default Hero;
