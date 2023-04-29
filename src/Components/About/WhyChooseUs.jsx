import React from "react";
import { BsCarFrontFill, BsFuelPumpDiesel } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineGroup } from "react-icons/md";
import { AiOutlineWallet } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

const FeatureOptions = [
  {
    name: "ALL BRANDS",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.",
    icon: BsCarFrontFill,
  },
  {
    name: "FREE SUPPORT",
    details:
      "Omnis sed ut perspiciatis unde iste natus error sit voluptatem acantium doloremque laudantium.",
    icon: BiSupport,
  },
  {
    name: "DEALERSHIP",
    details:
      "Error sed ut perspiciatis unde omnis iste natus sit voluptatem acantium doloremque laudantium.",
    icon: MdOutlineGroup,
  },
  {
    name: "AFFORDABLE",
    details:
      "Perspiciatis sed ut unde omnis iste natus error sit voluptatem acantium doloremque laudantium.",
    icon: AiOutlineWallet,
  },
  {
    name: "TRANSMISSION",
    details:
      "Omnis perspiciatis sed ut unde iste natus error sit voluptatem acantium doloremque laudantium.",
    icon: FiRefreshCcw,
  },
  {
    name: "OIL CHANGES",
    details:
      "oluptatem perspiciatis sed ut unde omnis iste natus error sit acantium doloremque laudantium.",
    icon: BsFuelPumpDiesel,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="makeAdmin-background my-8">
      <div className="container mx-auto pt-5 pb-14">
      <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
          <h2 className="text-xl text-center text-gray-300">We are Ultra Creative Agency</h2>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive] text-white">
            Our Top <span className="text-orange-500">Supports</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 lg:px-20 mt-5 lg:px-0 md:px-0 px-2">
          {FeatureOptions?.map((feature, index) => (
            <div
              key={index + 1}
              className="boxShadow border border-gray-150 hover:border-orange-600 px-6 py-4 bg-white hover:bg-orange-600 duration-300 transition-colors ease-in-out group cursor-pointer"
            >
              <BiSupport className="text-4xl text-orange-600 group-hover:text-white" />
              <h4 className="text-lg font-semibold mt-4 mb-3 group-hover:text-white">
                {feature?.name}
              </h4>
              <p className="text-gray-500 group-hover:text-white">
                {feature?.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
