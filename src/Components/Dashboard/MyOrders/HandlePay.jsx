import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
interface PaymentProps {
  id: string;
  setShowModal: (showModal: any) => void;
}

const HandlePay: FC<PaymentProps> = ({ id, setShowModal }) => {
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[70vw] sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label>Name</label>
            <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
            <label>Url</label>
            <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button
              onClick={() => setShowModal("")}
              type="button"
              className="py-2 px-4 text-white bg-orange-500 hover:text-orange-600 hover:bg-white border border-orange-600 rounded-md flex items-center gap-x-2 transition duration-300 ease-in-out"
            >
              <FaTimes />
              <p> Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandlePay;
