import Image from "next/image";
import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import aboutCar from "../../Assests/Image/Others/about-car.png";
import { BsCheckCircle } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineDirectionsCar } from "react-icons/md";

const AboutText = () => {
  return (
    <div className="background-shape">
      <div className="container mx-auto">
        <div className="lg:flex md:flex block justify-between items-center gap-x-6">
          <div className="relative lg:w-1/2 md:w-1/2 w-full">
            <p className="font-semibold text-orange-600 lg:text-left md:text-left text-center">
              About Us
            </p>
            <h1 className="text-[#2E4B7B] lg:text-[42px] md:text-[42px] text-2xl font-semibold leading-none lg:text-left md:text-left text-center mt-3">
              World Largest <span className="text-orange-600">Car</span>
            </h1>
            <h1 className="text-[#2E4B7B] lg:text-[42px] md:text-[42px] text-2xl font-semibold leading-none lg:text-left md:text-left text-center mb-6 mt-1.5">
              <span className="text-orange-600">Dealer</span> Marketplace.
            </h1>
            <p className="text-[16px] lg:text-start md:text-start text-center text-gray-500 tracking-wide">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <div className="lg:mt-10 md:mt-6 mt-5">
              <div className="flex items-center gap-x-2 group my-3 lg:justify-start md:justify-start justify-center">
                <BsCheckCircle className="text-orange-600 " />
                <p className="text-[17px] text-gray-500">
                  At vero eos et accusamus et iusto odio.
                </p>
              </div>
              <div className="flex items-center lg:justify-start md:justify-start justify-center gap-x-2 group my-3">
                <BsCheckCircle className="text-orange-600 " />
                <p className="text-[17px] text-gray-500">
                  At vero eos et accusamus et iusto odio.
                </p>
              </div>
              <div className="flex items-center lg:justify-start md:justify-start justify-center gap-x-2 group my-3">
                <BsCheckCircle className="text-orange-600 " />
                <p className="text-[17px] text-gray-500">
                  At vero eos et accusamus et iusto odio.
                </p>
              </div>
            </div>
            <button className="relative inline-block text-lg group lg:mt-8 mt-6 lg:ml-0 md:ml-0 ml-6">
              <span className="relative z-10 block text-white lg:px-6 md:px-6 px-4 lg:py-3 py-2.5 overflow-hidden font-semibold leading-tight transition-colors duration-300 ease-out border-2 border-orange-600 hover:border-orange-600 rounded-lg group-hover:text-orange-600">
                <span className="absolute inset-0 w-full h-full px-5 py-3 bg-orange-600"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative flex items-center gap-x-2">
                  <span>Discover More</span>
                  <HiArrowNarrowRight />
                </span>
              </span>
              <span
                className="lg:block md:block hidden absolute bottom-0 right-0 w-full h-12 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="pt-10 relative mx-auto lg:px-0 md:px-0 px-2">
              <Image
                src={aboutCar}
                alt="Car_Image"
                className="mx-auto bounce-animation3"
              />
              <div className="h-24 w-52 bg-black text-white rounded-md absolute top-5 right-28 bounce-animation">
                <div className="flex justify-center items-center h-full w-full gap-x-4">
                  <div className="h-12 w-12 bg-orange-600 flex justify-center items-center rounded-md">
                    <MdOutlineDirectionsCar className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">30 Years Of</h4>
                    <h4 className="font-semibold">Quality Service</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
