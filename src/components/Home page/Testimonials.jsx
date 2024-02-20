import React from "react";
import { testimonials } from "../../constants";
import { fillStar, unfillStar } from "../../assets";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={`${className} hidden`} onClick={onClick} />;
  };

  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-primary hidden`}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Number of slides to show on screens >= 1024px
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Number of slides to show on screens >= 768px and < 1024px
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Number of slides to show on screens < 768px
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="mt-20">
      <h1 className="font-bold text-center text-4xl pb-8">
        Client Testimonial
      </h1>
      <div className="w-[90%] lg:w-11/12 m-auto slider-container">
        <div className="bg-buttonBG -pb-6 m-0">
          <Slider {...settings} className="">
            {testimonials.map((testimonial) => (
              <div className="bg-primary text-white rounded-xl p-2">
                <div className="items-center justify-between border-b-2 pb-6">
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
                      <div className="flex gap-1 pt-1 absolute right-0">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-justify">{testimonial.comment}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
