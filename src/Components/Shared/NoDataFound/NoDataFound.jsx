import React from "react";
import noDataFound from "../../../Assests/Image/noData.png";
import Image from "next/image";

const NoDataFound = () => {
  return (
    <div className="w-[750px] mx-auto my-[40px] bg-white shadow-md rounded-md">
      <div className="p-[48px] flex flex-col items-center">
        <div className="w-[200px] h-[200px] flex justify-center items-center rounded-[200px] shadow-md bg-[#f7fafc] overflow-hidden">
          <Image src={noDataFound} alt="No data Found" className="" />
        </div>
        <div className="text-orange-600 text-[1.5rem] font-bold mt-[0.85rem]">
          No Data Found.
        </div>
        <div className="text-[#a2a5b9] text-[0.875rem]">
          Add a new record by simpley clicking the button on top right side.
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;
