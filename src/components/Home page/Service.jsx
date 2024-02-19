import React from "react";
import { serviceDetails } from "../../constants";

function Service() {
  return (
    <div className="my-4">
      <h1 className="font-bold text-center text-4xl py-8">Our Services</h1>
      <div className="cardRes:flex justify-between">
        {serviceDetails.map((service) => (
          <div id={service.id} className="bg-primary text-white text-justify rounded-lg p-1 my-6 cardRes:my-0 m-auto w-[300px]  cardRes:w-[280px] lg:w-[320px]">
            <div>
              <img src={service.image} alt={service.id} className="rounded-lg" />
              <h1 className="font-bold text-lg py-1">{service.topic}</h1>
              <p>{service.summary}</p>
              <p className="text-right font-semibold cursor-pointer">Read more {'>>>'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
