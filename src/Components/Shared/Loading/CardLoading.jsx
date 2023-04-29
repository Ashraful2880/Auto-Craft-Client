import React from "react";

const CardLoading = () => {
  return (
    <div className="w-full">
      <div className="animate-pulse w-full">
        <div className="mb-5">
          <div className="bg-gray-200 h-64 w-full rounded-md"></div>
        </div>
        <div className="mb-6">
          <div className="h-9 bg-gray-200 w-full mb-3"></div>
        </div>
        <div className="mb-5">
          <div className="h-5 bg-gray-200 w-full mb-1"></div>
          <div className="h-5 bg-gray-200 w-1/2"></div>
        </div>
        <div className="mb-3">
          <div className="h-14 bg-gray-200 w-full"></div>
        </div>
        <div className="mb-6">
          <div className="h-9 bg-gray-200 w-24 mb-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
