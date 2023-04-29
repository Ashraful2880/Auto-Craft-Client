import Link from "next/link";
import React from "react";
import { FaCheck, FaList, FaShoppingCart } from "react-icons/fa";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";

const success = () => {
  return (
    <PrivateRoute>
      <div className="container mx-auto lg:min-h-screen md:min-h-screen h-auto flex justify-center lg:items-center md:items-center items-start">
        <div className="mx-2 max-w-lg w-full bg-white lg:px-[60px] md:px-[60px] px-0 lg:py-[60px] md:py-[60px] py-[30px] rounded-md border shadow-md flex flex-col justify-center items-center lg:my-0 md:my-0 my-5">
          <div className="rounded-full h-[200px] w-[200px] bg-[#2564eb28] flex justify-center items-center">
            <FaCheck className="text-[#2563eb] text-[100px] leading-[200px] animate-pulse" />
          </div>
          <h1 className="text-[#2563eb] text-[40px] font-bold mb-4">Success</h1>
          <p className="text-[#404f5ebf] text-[20px] m-0">
            We received your purchase request;
            <br /> well be in touch shortly!
          </p>
          <div className="flex items-center justify-center gap-x-4 w-full">
            <Link href="/dashboard/myOrder">
              <button className="text-white px-6 py-2.5 bg-orange-600 border border-orange-600 rounded-full flex justify-center items-center gap-x-1 hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out mt-5">
                <FaList />
                <span>View Order</span>
              </button>
            </Link>
            <Link href="/cars">
              <button className="text-white px-6 py-2.5 bg-[#2563eb] border border-[#2563eb] rounded-full flex items-center gap-x-1 hover:bg-white hover:text-[#2563eb] transition duration-300 ease-in-out mt-5">
                <FaShoppingCart />
                <span>Keep Purchase</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default success;
