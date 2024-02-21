import React from "react";
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../constants";
import { fillStar, unfillStar } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
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

function Testimonials() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ x: 0, opacity: 1 });
    }
  }, [controlsLeft, inViewLeft]);

  React.useEffect(() => {
    if (inViewRight) {
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [controlsRight, inViewRight]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // getting the stars for rating ✨
  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img key={i} src={fillStar} alt="filled star" className="w-5" />
        );
      } else {
        stars.push(
          <img key={i} src={unfillStar} alt="unfilled star" className="w-5" />
        );
      }
    }
    return stars;
  }

  return (
    <div className="my-24 px-2 md:px-4 flex flex-col-reverse md:flex-row items-center justify-center md:gap-20">
      <motion.div
        ref={refLeft}
        initial={{ x: "-100%", opacity: 0 }}
        animate={controlsLeft}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-[500px] mx-auto md:mx-0"
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cardBG text-black rounded-xl py-2">
              <div className="items-center justify-between border-b-2 border-customRed pb-4 pr-5">
                <div className="flex items-center gap-1">
                  <img
                    src={testimonial.avatar}
                    alt="avatar"
                    className="rounded-full w-16"
                  />
                  <div className="relative w-full">
                    <h1 className="text-lg p-0 font-semibold">
                      {testimonial.name}
                    </h1>
                    <h3 className="text-sm p-0">{testimonial.jobTitle}</h3>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <div className="text-justify p-1 pt-2">
                {testimonial.comment}
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.h1
        ref={refRight}
        initial={{ x: "100%", opacity: 0 }}
        animate={controlsRight}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="font-bold text-center text-4xl pb-8"
      >
        Client <br className="hidden md:block" /> Testimonials
      </motion.h1>
    </div>
  );
}

export default Testimonials;
