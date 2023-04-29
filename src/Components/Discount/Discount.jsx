import Image from "next/image";
import React from "react";
import disc from "../../Assests/Image/discount.png";

const Discount = () => {
  return (
      <div className="container mx-auto bg-white pb-10 overflow-hidden">
        <div className="lg:flex md:flex block justify-center items-center gap-x-4">
          <div
            className="w-full"
            data-aos="slide-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Image src={disc} alt="Discount Picture" className="mx-auto bounce-animation2" />
          </div>
          <div
            className="w-full"
            data-aos="slide-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="lg:text-[38px] md:text-[38px] text-2xl font-bold leading-tight uppercase lg:text-start md:text-start text-center">
              Have a Special
            </h1>
            <h1 className="lg:text-[38px] md:text-[38px] text-2xl font-bold leading-tight text-orange-600 uppercase lg:text-start md:text-start text-center">
              Discount
            </h1>
            <div className="lg:mt-12 mt-5 lg:px-0 md:px-0 px-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-[20px] py-[12px] border-2 border-orange-600 lg:w-[60%] w-full rounded-full lg:rounded-r-none shadow-xl focus:outline-1 focus:outline-orange-600"
              />
              <input
                type="submit"
                value="Subscribe"
                className="text-white font-semibold px-[30px] py-[12px] rounded-full lg:rounded-l-none bg-orange-600 border-2 border-orange-600 shadow-md hover:text-orange-600 hover:bg-white duration-300 cursor-pointer lg:mt-0 mt-2 lg:w-auto w-full lg:border-l-0"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Discount;
