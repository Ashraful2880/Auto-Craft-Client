import React from "react";
import WeOffer from "./WeOffer";
import AboutText from "./AboutText";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen h-auto background-shape">
      <div className="overflow-hidden">
        <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
          <h2 className="text-xl text-center text-gray-500">Who We Are</h2>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
            A Few Words <span className="text-orange-500">About Us</span>
          </h2>
        </div>
        <WeOffer />
        <WhyChooseUs />
        <AboutText />
      </div>
    </div>
  );
};

export default About;
