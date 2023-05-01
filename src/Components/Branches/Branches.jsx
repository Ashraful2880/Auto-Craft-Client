import React, { useState, useEffect } from "react";
import CardLoading from "@/Components/Shared/Loading/CardLoading";
import NoDataFound from "@/Components/Shared/NoDataFound/NoDataFound";
import axios from "axios";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/branches`).then((resp) => {
      setBranches(resp?.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen container mx-auto">
      <div className="text-center lg:py-6 md:py-3 py-0">
        <h2 className="text-3xl font-bold">
          Best Dealers In <span className="text-orange-500">Your City</span>
        </h2>
        <h2 className="text-xl text-center text-gray-400">our Branches</h2>
      </div>
      {branches?.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 lg:px-0 md:px-0 px-2">
          {branches?.map((branch, index) => (
            <div
              key={index + 1}
              className="border boxShadow relative hover:shadow-none duration-300 transition ease-in-out cursor-pointer"
            >
              <Image
                src={branch?.image}
                width={100}
                height={100}
                alt="Branch Image"
                layout="responsive"
                className="w-full"
              />
              <div className="pl-8 pb-8">
                <h1 className="text-xl font-semibold mt-4">{branch?.name}</h1>
                <div className="flex items-center gap-x-2 my-2">
                  <MdOutlineLocationOn className="text-lg text-orange-600" />
                  <p className="text-gray-400">{branch?.location}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <VscCallOutgoing className="text-lg text-orange-600" />
                  <p className="text-gray-400">{branch?.contact}</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-orange-600 w-24 py-1.5 rounded-lg text-white font-semibold text-center">
                <h1>{branch?.listing} Listing</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 w-full">
              {[...Array(6)].map((item, index) => (
                <div key={index + 1}>
                  <CardLoading />
                </div>
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      )}
    </div>
  );
};

export default Branches;
