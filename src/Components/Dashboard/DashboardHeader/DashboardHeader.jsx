import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../Assests/Image/logo.png";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import useFirebase from "../../../../Hooks/UseFirebase";

const DashboardHeader = ({ open, setOpen }) => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="mb-16">
      <div className="h-16 text-white bg-gray-900 fixed left-0 top-0 w-full z-50 overflow-hidden flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-x-3">
            <div>
              <Link href="/" className="flex items-center gap-x-1">
                <Image
                  src={logo}
                  alt="Main Logo"
                  className="lg:w-20 md:w-20 w-32 pl-3"
                />
                <h4 className="text-xl text-white font-semibold lg:block md:block hidden">
                  <span className="text-orange-600">A</span>uto
                  <span className="text-orange-600">C</span>raft
                </h4>
              </Link>
            </div>
            <div>
              {open ? (
                <button
                  onClick={() => setOpen(false)}
                  className="text-left w-full text-2xl text-white bg-orange-600 flex justify-center items-center border border-orange-600 rounded-full p-1"
                >
                  <FaAngleDoubleLeft />
                </button>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="text-left w-full text-2xl text-orange-600 bg-white flex justify-center items-center border border-orange-600 rounded-full p-1"
                >
                  <FaAngleDoubleRight />
                </button>
              )}
            </div>
          </div>
          <div className="container mx-auto flex justify-end items-center gap-x-2">
            <img
              src={user?.photoURL}
              alt="User"
              className="h-12 w-12 border rounded-full lg:block md:block hidden"
            />
            <h4 className="text-md text-gray-300 font-semibold">
              {user?.displayName}
            </h4>

            <button
              onClick={handleSignOut}
              className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
              <span className="absolute w-full h-full"></span>
              <span className="relative flex items-center gap-x-1 group-hover:text-white transition duration-300 ease-in-out">
                <MdOutlineExitToApp className="text-2xl text-orange-500 group-hover:text-white" />
                <span>Logout</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
