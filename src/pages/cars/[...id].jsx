import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import {
  BsCalendar2Date,
  BsFuelPumpDiesel,
  BsGearWideConnected,
  BsSpeedometer,
} from "react-icons/bs";
import CardLoading from "@/Components/Shared/Loading/CardLoading";
import { IoLogoModelS } from "react-icons/io";
import { BiColor } from "react-icons/bi";
import Purchase from "./Purchase";
import { HiArrowNarrowRight } from "react-icons/hi";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";

const CarDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [carDetails, setCarDetails] = useState();
  const [order, setOrder] = useState(false);

  // Get Single Order By ID
  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_HOST_URL}/car/${id}`)
        .then((resp) => {
          setCarDetails(resp?.data);
        });
    }
  }, [id]);

  return (
    <div>
      <PrivateRoute>
        {id ? (
          <div className="container mx-auto min-h-screen">
            <div className="lg:px-20 px-0">
              <div className="w-full lg:flex block justify-between items-start gap-x-10 lg:pt-16 pt-5 pb-5">
                <div className="w-full relative overflow-hidden">
                  <Image
                    src={carDetails?.image}
                    alt="ProductImage"
                    width={100}
                    height={100}
                    layout="responsive"
                    quality={100}
                    loading="eager"
                    className="w-full rounded-tl-lg rounded-tr-lg"
                  />
                  <div className="absolute top-16 -left-64 bg-[#2563eb] text-white -rotate-45 w-full text-center">
                    <h4 className="text-lg font-semibold px-3 py-2 tracking-wider">
                      Price: ${carDetails?.price}
                    </h4>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900">
                      {carDetails?.name}
                    </h1>
                    <h4 className="mb-3 text-lg tracking-wide">
                      {carDetails?.model}
                    </h4>
                    <p className="text-gray-500">{carDetails?.details}</p>
                  </div>
                  <div className="grid grid-cols-3 place-items-center place-content-center">
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <BsCalendar2Date className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">
                        {carDetails?.modelYear}
                      </span>
                      <span className="text-lg">Model</span>
                    </div>
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <BsSpeedometer className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">30 km</span>
                      <span className="text-lg">Milage</span>
                    </div>
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <BsFuelPumpDiesel className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">
                        {carDetails?.fuel}
                      </span>
                      <span className="text-lg">Fuel</span>
                    </div>
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <BsGearWideConnected className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">
                        {carDetails?.gear}
                      </span>
                      <span className="text-lg">Transmission</span>
                    </div>
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <IoLogoModelS className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">
                        {carDetails?.type}
                      </span>
                      <span className="text-lg">Car Type</span>
                    </div>
                    <div className="w-full border flex flex-col py-5 justify-center items-center">
                      <BiColor className="text-orange-600 text-4xl" />
                      <span className="text-lg font-semibold mt-2">
                        {carDetails?.color}
                      </span>
                      <span className="text-lg">Color</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={() => setOrder(true)}
                      className="relative justify-center px-3 py-1 overflow-hidden font-semibold border border-orange-600 text-orange-600 rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                      <span className="absolute w-full h-full"></span>
                      <span className="relative flex items-center gap-x-1 group-hover:text-white transition duration-300 ease-in-out">
                        <span>Order Now</span>
                        <HiArrowNarrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CardLoading />
        )}
        {order === true && (
          <Purchase order={order} setOrder={setOrder} carDetails={carDetails} />
        )}
      </PrivateRoute>
    </div>
  );
};

export default CarDetails;
