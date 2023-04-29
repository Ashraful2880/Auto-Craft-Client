import CardLoading from "@/Components/Shared/Loading/CardLoading";
import React from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ViewOrder = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(null);
  };

  return (
    <div className="fixed z-10 overflow-y-auto lg:top-0 md:top-0 top-16 w-full left-0">
      <div className="flex items-center justify-center min-h-screen h-auto pt-4 lg:px-4 md:px-4 px-2 pb-20 text-center sm:block sm:p-0 container mx-auto">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle lg:w-[70vw] md:w-[70vw] w-full pb-4 lg:px-5 md:px-5 px-2 lg:h-auto md:h-auto h-[80vh] py-5 overflow-y-scroll">
          {showModal?.data ? (
            <>
              <div className="absolute right-0 top-0 px-2 lg:pt-5 md:pt-5 pt-2 flex justify-end items-center">
                <button
                  onClick={handleClose}
                  className="text-white bg-orange-600 px-4 py-2 border flex items-center gap-x-2 border-orange-600 rounded-md hover:text-orange-600 hover:bg-white transition duration-300 ease-in-out"
                >
                  <FaTimes />
                  <span>Close</span>
                </button>
              </div>
              <div className="lg:px-5 md:px-5 px-0 py-4">
                <div className="w-full mx-auto lg:flex md:flex block">
                  <img
                    alt="single Order"
                    className="lg:w-1/2 w-full object-cover object-center rounded lg:mt-0 md:mt-0 mt-5"
                    src={showModal?.data?.image}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      ON SALE
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {showModal?.data?.name}
                    </h1>
                    <p>{showModal?.data?.model}</p>

                    <p className="leading-relaxed pt-5 pb-2 text-gray-600">
                      {showModal?.data?.details}
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex items-center">
                        <span className="mr-3">Color</span>
                        <div className="border border-gray-300 flex items-center gap-x-2 p-2">
                          <button
                            className="border-2 ml-1 rounded-full w-6 h-6 focus:outline-none"
                            style={{
                              background: `${showModal?.data?.color}`,
                              borderColor: `${showModal?.data?.color}`,
                            }}
                          ></button>
                          <p>{showModal?.data?.color}</p>
                        </div>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Type</span>
                        <div className="relative">
                          <div className="rounded border appearance-none border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base">
                            {showModal?.data?.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="title-font font-medium text-2xl text-gray-900">
                      Price: ${showModal?.data?.price}
                    </span>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex items-center">
                        <span className="mr-3">Fuel</span>
                        <p className="border border-gray-300 px-4 py-2">
                          {showModal?.data?.fuel}
                        </p>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Model Year</span>
                        <div className="relative">
                          <div className="rounded border appearance-none border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base">
                            {showModal?.data?.modelYear}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-4 py-4">
                      {/* {path === "user" && (
                          <button
                            onClick={() => handlePay(showModal?.data?._id)}
                            className="text-white bg-[#2563eb] py-1 px-2 border border-[#2563eb] rounded-[3px] flex items-center gap-x-2 hover:text-[#2563eb] hover:bg-white transition duration-300 ease-in-out"
                          >
                            <BsCreditCardFill />
                            <p>Pay Now</p>
                          </button>
                        )} */}
                      <button
                        onClick={handleClose}
                        className="flex py-2 px-4 text-white bg-orange-500 hover:text-orange-600 hover:bg-white border border-orange-600 rounded-md items-center gap-x-2 transition duration-300 ease-in-out"
                      >
                        <FaTimes />
                        <p> Close</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="conatiner mx-auto grid grid-cols-2 gap-x-6 w-full p-20">
              {[...Array(6)]?.map((item) => (
                <>
                  <CardLoading />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
