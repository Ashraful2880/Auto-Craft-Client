import About from "@/Components/About/About";
import ContactForm from "@/Components/Contact/ContactForm";
import ContactMap from "@/Components/Contact/ContactMap";
import React from "react";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const index = () => {
  return (
    <div className="min-h-screen h-auto">
      <div className="text-center lg:py-6 md:py-3 py-0 container mx-auto">
        <h2 className="text-3xl font-bold">
          If Query <span className="text-orange-500">Contact Us</span>
        </h2>
        <h2 className="text-xl text-center text-gray-500">
          Fill Form to Send Message
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 mt-5 container mx-auto">
        <div className="card boxShadow p-6 group block relative bg-white rounded-md overflow-hidden z-0">
          <div>
            <div className="h-14 w-14 bg-[#2563eb] group-hover:bg-white rounded-full text-white group-hover:text-orange-600 flex justify-center items-center mx-auto">
              <BiPhoneCall className="text-4xl" />
            </div>
            <h2 className="text-[24px] font-bold text-center mt-4 text-[#2e4b7b] group-hover:text-white">
              Contact
            </h2>
            <p className="text-center text-gray-400 group-hover:text-white mt-4">
              Talk To Support
            </p>
            <p className="text-center text-gray-400 group-hover:text-white">
              +880 1974238487
            </p>
          </div>
          <div className="w-8 h-8 bg-orange-600 rounded-bl-[100px] absolute top-0 right-0 overflow-hidden"></div>
        </div>
        <div className="card boxShadow p-6 group block relative bg-white rounded-md overflow-hidden z-0">
          <div>
            <div className="h-14 w-14 bg-[#2563eb] group-hover:bg-white rounded-full text-white group-hover:text-orange-600 flex justify-center items-center mx-auto">
              <BiLocationPlus className="text-4xl" />
            </div>
            <h2 className="text-[24px] font-bold text-center mt-4 text-[#2e4b7b] group-hover:text-white">
              Location
            </h2>
            <p className="text-center text-gray-400 group-hover:text-white mt-4">
              Find where we are
            </p>
            <p className="text-center text-gray-400 group-hover:text-white">
              Jhenaidah, Bangladesh
            </p>
          </div>
          <div className="w-8 h-8 bg-orange-600 rounded-bl-[100px] absolute top-0 right-0 overflow-hidden"></div>
        </div>
        <div className="card boxShadow p-6 group block relative bg-white rounded-md overflow-hidden z-0">
          <div>
            <div className="h-14 w-14 bg-[#2563eb] group-hover:bg-white rounded-full text-white group-hover:text-orange-600 flex justify-center items-center mx-auto">
              <BsClock className="text-4xl" />
            </div>
            <h2 className="text-[24px] font-bold text-center mt-4 text-[#2e4b7b] group-hover:text-white">
              Meet Us
            </h2>
            <p className="text-center text-gray-400 group-hover:text-white mt-4">
              Available Hours to meet
            </p>
            <p className="text-center text-gray-400 group-hover:text-white">
              9:00 AM – 8:00 PM
            </p>
          </div>
          <div className="w-8 h-8 bg-orange-600 rounded-bl-[100px] absolute top-0 right-0 overflow-hidden"></div>
        </div>
      </div>
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default index;
