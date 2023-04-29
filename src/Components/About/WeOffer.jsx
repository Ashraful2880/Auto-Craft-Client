import Image from "next/image";
import React from "react";
import car from "../../Assests/Image/Others/car-red.png";
import circle from "../../Assests/Image/Others/circle2.png";
import ball from "../../Assests/Image/Others/ball.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const WeOffer = () => {
  return (
    <div className="container mx-auto">
      <p className="font-semibold text-orange-600 lg:text-left md:text-left text-center">
        We are Commited to Quality
      </p>
      <div className="lg:flex md:flex block justify-between items-center gap-x-6 lg:px-0 md:px-0 px-2">
        <div>
          <h1 className="text-[#2E4B7B] lg:text-[42px] md:text-[42px] text-2xl lg:text-left md:text-left text-center font-semibold leading-none mt-4">
            Dont Waste Your
          </h1>
          <h1 className="text-[#2E4B7B] lg:text-[42px] md:text-[42px] text-2xl lg:text-left md:text-left text-center font-semibold leading-none mb-6 mt-1.5">
            Valuable Time or Money
          </h1>
          <p className="text-[16px] lg:text-start md:text-start text-center text-gray-500 tracking-wide lg:w-[80%] md:e-[80%] w-full">
            Collaboratively leverage existing client-centric schemas integrated
            processes. Inter actively engineer global sources after team driven
            niche markets. Rapidiously processes with resource maximizing
            architectures.
          </p>
          <div className="pt-10 relative">
            <Image
              src={car}
              alt="Car_Image"
              className="lg:p-10 bounce-animation3"
            />
            <Image
              src={circle}
              alt="Car_Image"
              className="absolute bottom-0 -left-6 bounce-animation"
            />
          </div>
        </div>
        <div className="relative">
          <div className="boxShadow p-8 border border-gray-100 rounded-md my-6">
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 flex justify-center items-center text-4xl">
                <AiOutlineSafetyCertificate />
              </div>
              <h2 className="text-xl font-semibold">
                Expert Certified Mechanics
              </h2>
            </div>
            <p className="mt-5 text-gray-500 tracking-wider">
              Credibly maximize resource maximizing channels after interoperable
              frictionless. Rather than synergistic models.
            </p>
          </div>
          <div className="boxShadow p-8 border border-gray-100 rounded-md my-6 lg:ml-14 md:ml-10 ml-0">
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 flex justify-center items-center text-4xl">
                <AiOutlineSafetyCertificate />
              </div>
              <h2 className="text-xl font-semibold">
                Expert Certified Mechanics
              </h2>
            </div>
            <p className="mt-5 text-gray-500 tracking-wider">
              Credibly maximize resource maximizing channels after interoperable
              frictionless. Rather than synergistic models.
            </p>
          </div>
          <div className="boxShadow p-8 border border-gray-100 rounded-md my-6">
            <div className="flex items-center gap-x-4">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 flex justify-center items-center text-4xl">
                <AiOutlineSafetyCertificate />
              </div>
              <h2 className="text-xl font-semibold">
                Expert Certified Mechanics
              </h2>
            </div>
            <p className="mt-5 text-gray-500 tracking-wider">
              Credibly maximize resource maximizing channels after interoperable
              frictionless. Rather than synergistic models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
