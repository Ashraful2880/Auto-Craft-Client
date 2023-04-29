import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import service1 from "../../Assests/Image/Service/service-1.png";
import service2 from "../../Assests/Image/Service/service-2.png";
import service3 from "../../Assests/Image/Service/service-3.png";
import service4 from "../../Assests/Image/Service/service-4.png";
import service5 from "../../Assests/Image/Service/service-5.png";
import service6 from "../../Assests/Image/Service/service-6.png";
import Image from "next/image";

const services = [
  { name: "batteries", image: service1 },
  { name: "air Conditioning", image: service2 },
  { name: "steering", image: service3 },
  { name: "Engine Management", image: service4 },
  { name: "suspension", image: service5 },
  { name: "wheels", image: service6 },
];
const index = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-center lg:py-6 md:py-3 py-0">
        <h2 className="text-3xl font-bold">
          Our Awesome <span className="text-orange-500">Services</span>
        </h2>
        <h2 className="text-xl text-center text-gray-500">See All Services</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 lg:w-[80%] w-full mx-auto mt-10">
        {services?.map((service, index) => (
          <div key={index + 1} className="relative cursor-pointer">
            <div className="overflow-hidden">
              <Image
                src={service?.image}
                alt="service_Image"
                className="hover:scale-110 duration-300 transition ease-in-out "
              />
            </div>
            <div className="absolute left-5 bottom-5 z-50">
              <h2 className="text-2xl font-semibold uppercase text-white">
                {service?.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
