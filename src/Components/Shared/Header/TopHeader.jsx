import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLocationPlus, BiTimer } from "react-icons/bi";

const TopHeader = () => {
  return (
    <div className="bg-[#2563eb] py-2 lg:block md:block hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <a href="tel:+123 456 789">
              <FaPhoneAlt className="text-3xl text-white" />
            </a>
            <div className="text-white text-[14px] tracking-wider leading-5">
              <p>Contact for Support</p>
              <p>+123 456 789</p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <BiLocationPlus className="text-4xl text-white" />
              <div className="text-[14px] text-white tracking-wider leading-5">
                <p>Our Location you find out</p>
                <p>Jhenaidah, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <BiTimer className="text-4xl text-white" />
              <div className="text-[14px] text-white tracking-wider leading-5">
                <p>Available Hours to meet</p>
                <p>9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
