import React, { FC } from "react";
import CountUp from "react-countup";
import { FaCar, FaUserTie, FaThumbsUp, FaAward } from "react-icons/fa";

const Achievment = ({ counterOn }) => {
  return (
    <>
      <div className="acheivement-bg">
        <div className="container mx-auto overflow-hidden">
          {/* Achievment Title */}
          <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
            <h2 className="text-xl text-center text-gray-300">
              Our Achievement
            </h2>
            <h2 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
              What Have We <span className="text-orange-500">Achieved</span>
            </h2>
          </div>
          {/* Achievment List */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-content-between place-items-center lg:mt-14 md:mt-14 mt-5 lg:mb-10 lg:gap-6 md:gap-6 gap-2 lg:px-0 md:px-0 px-2">
            <div
              className="w-full text-center mx-auto bg-gray-100/20 py-8"
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="h-16 w-16 mx-auto text-4xl text-white flex items-center justify-center bg-orange-600 rounded-full border border-orange-100 duration-300">
                <FaCar />
              </div>
              <h4 className="text-5xl font-bold text-white mt-4">
                {counterOn && (
                  <CountUp start={0} end={1125} duration={3} delay={0} />
                )}
              </h4>
              <h4 className="text-white text-xl font-bold mt-2">
                Total <span className="text-orange-600">Cars</span>
              </h4>
            </div>
            <div
              className="w-full text-center mx-auto bg-gray-100/20 py-8"
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="h-16 w-16 mx-auto text-4xl text-white flex items-center justify-center bg-orange-600 rounded-full border border-orange-100 duration-300">
                <FaUserTie />
              </div>
              <h4 className="text-5xl font-bold text-white mt-4">
                {counterOn && (
                  <CountUp start={0} end={1025} duration={3} delay={0} />
                )}
              </h4>
              <h4 className="text-white text-xl font-bold mt-2">
                Happy <span className="text-orange-600">Clients</span>
              </h4>
            </div>
            <div
              className="w-full text-center mx-auto bg-gray-100/20 py-8"
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="h-16 w-16 mx-auto text-4xl text-white flex items-center justify-center bg-orange-600 rounded-full border border-orange-100 duration-300">
                <FaThumbsUp />
              </div>
              <h4 className="text-5xl font-bold text-white mt-4">
                {counterOn && (
                  <CountUp start={0} end={974} duration={3} delay={0} />
                )}
              </h4>
              <h4 className="text-white text-xl font-bold mt-2">
                Dealer <span className="text-orange-600">Review</span>
              </h4>
            </div>
            <div
              className="w-full text-center mx-auto bg-gray-100/20 py-8"
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="h-16 w-16 mx-auto text-4xl text-white flex items-center justify-center bg-orange-600 rounded-full border border-orange-100 duration-300">
                <FaAward />
              </div>
              <h4 className="text-5xl font-bold text-white mt-4">
                {counterOn && (
                  <CountUp start={0} end={795} duration={3} delay={0} />
                )}
              </h4>
              <h4 className="text-white text-xl font-bold mt-2">
                Winning <span className="text-orange-600">Award</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievment;
