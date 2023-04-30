import axios from "axios";
import React, { useEffect, useState } from "react";
import CardLoading from "../Shared/Loading/CardLoading";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../Shared/Pagination/Pagination";
import NoDataFound from "../Shared/NoDataFound/NoDataFound";
import shape from "../../Assests/Image/1.png";
import { IoLogoModelS } from "react-icons/io";
import {
  BsCalendar2Date,
  BsFuelPumpDiesel,
  BsGearWideConnected,
} from "react-icons/bs";
import { BiColor } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";

const Cars = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allCars, setAllCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationList, setPaginationList] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/cars?page=${currentPage}`)
      .then((res) => {
        setAllCars(res?.data?.cars);
        setPaginationList(res?.data?.totalPaginate);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <div className="relative">
      <Image
        src={shape}
        alt="Shape"
        className="bounce-animation absolute left-0 top-0 lg:block md:block hidden"
      />
      <div className="container mx-auto min-h-screen">
        {/* Page Title */}
        <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
          <h2 className="text-xl text-center text-gray-500">Recent Cars</h2>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
            Awesome Car <span className="text-orange-500">Collections</span>
          </h2>
        </div>
        <div>
          {allCars?.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-3 mx-auto text-start mb-4 car-container rounded-md lg:px-0 md:px-0 px-2">
                {allCars?.map((car) => (
                  <Link href={`/cars/${car?._id}`}>
                    <div className="rounded-md shadow-md" key={car?._id}>
                      <div className="text-black block overflow-hidden relative">
                        <Image
                          className="w-full rounded-tl-md rounded-tr-md hover:scale-110 transition duration-500 ease-in-out max-h-80"
                          src={car?.image}
                          alt="Car-Imag"
                          width={100}
                          height={100}
                          layout="responsive"
                          quality={100}
                          loading="eager"
                        />
                        <div className="absolute top-5 lg:-left-52 md:-left-52 -left-40 bg-orange-600 text-white -rotate-45 w-full text-center">
                          <p className="text-lg font-semibold px-3 py-1.5 tracking-wider">
                            ${car?.price}
                          </p>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center">
                          <h2 className="text-[20px] text-orange-600 font-semibold hover:text-gray-900 transition ease-in-out duration-300">
                            {car?.name}
                          </h2>
                          <h2 className="text-[18px] bg-[#2563eb] text-white font-semibold px-3 py-0.5 rounded-full tracking-wider">
                            ${car?.price}
                          </h2>
                        </div>
                        <div>
                          <div className="text-gray-500 my-2.5">
                            <span className="text-[15px]">
                              {car?.details?.slice(0, 100)}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 place-content-center place-items-between mb-3 mt-6">
                            <div className="flex items-center gap-x-1.5">
                              <BsGearWideConnected className="text-orange-600" />
                              <p className="text-[16px]">{car?.gear}</p>
                            </div>
                            <div className="flex items-center gap-x-1.5">
                              <BsCalendar2Date className="text-orange-600" />
                              <p className="text-[16px]">{car?.modelYear}</p>
                            </div>
                            <div className="flex items-center gap-x-1.5">
                              <FaRoad className="text-orange-600" />
                              <p className="text-[16px]">4,000 km</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 place-content-center place-items-between mb-2">
                          <div className="flex items-center gap-x-1.5">
                            <BsFuelPumpDiesel className="text-orange-600" />
                            <p className="text-[16px]">{car?.fuel}</p>
                          </div>
                          <div className="flex items-center gap-x-1.5">
                            <IoLogoModelS className="text-orange-600" />
                            <p className="text-[16px]">{car?.type}</p>
                          </div>
                          <div className="flex items-center gap-x-1.5">
                            <BiColor className="text-orange-600" />
                            <p className="text-[16px]">{car?.color}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
             <div>
             <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginationList={paginationList}
              />
             </div>
            </>
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
      </div>
    </div>
  );
};

export default Cars;
