import Link from "next/link";
import React from "react";
import { MdAdminPanelSettings, MdFeedback, MdLibraryAdd } from "react-icons/md";
import { BsBuildingFillGear, BsFillHouseGearFill } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const SideBar = ({ open }) => {
  return (
    <aside className={`flex z-50 min-h-screen h-full`}>
      <div
        className={`${
          open === true ? "w-60 duration-300" : "w-20 duration-300"
        }  min-h-screen h-full bg-gray-900`}
      >
        <div className="mb-20"></div>
        <div
          className={`${
            open === true
              ? "flex openMenuAnimation"
              : "block closeMenuAnimation"
          } bg-white`}
        >
          <div
            className={`flex-grow flex flex-col justify-between text-white min-h-screen h-full bg-gray-900 `}
          >
            <nav
              className={`flex flex-col mx-2 my-6 space-y-3 pb-5 fixed ${
                open === true ? "w-56" : "w-16"
              }`}
            >
              <Link
                href="/dashboard"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
              ${
                open ? "justify-start gap-x-4 px-4" : "justify-center"
              } duration-300`}
              >
                {open ? (
                  <>
                    <FaHome />
                    <h4>Dashboard Home</h4>
                  </>
                ) : (
                  <FaHome className="w-full" />
                )}
              </Link>
              <Link
                href="/dashboard/myOrder"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
              ${
                open ? "justify-start gap-x-4 pl-4" : "justify-center"
              } duration-300`}
              >
                {open ? (
                  <>
                    <GoListUnordered />
                    <h4>My Orders</h4>
                  </>
                ) : (
                  <GoListUnordered className="w-full" />
                )}
              </Link>
              {/* {admin && ( */}
              <Link
                href="/dashboard/manageOrder"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
              >
                {open ? (
                  <>
                    <BsBuildingFillGear />
                    <h4>Manage Orders</h4>
                  </>
                ) : (
                  <BsBuildingFillGear className="w-full" />
                )}
              </Link>
              <Link
                href="/dashboard/requestedService"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
              >
                {open ? (
                  <>
                    <BsBuildingFillGear />
                    <h4>Requested Service</h4>
                  </>
                ) : (
                  <BsBuildingFillGear className="w-full" />
                )}
              </Link>
              {/* {admin && ( */}
              <Link
                href="/dashboard/addProduct"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
              ${
                open ? "justify-start gap-x-4 pl-4" : "justify-center"
              } duration-300`}
              >
                {open ? (
                  <>
                    <MdLibraryAdd />
                    <h4>Add Products</h4>
                  </>
                ) : (
                  <MdLibraryAdd className="w-full" />
                )}
              </Link>
              {/* )} */}

              {/* {admin && ( */}
              <Link
                href="/dashboard/manageProducts"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
              ${
                open ? "justify-start gap-x-4 pl-4" : "justify-center"
              } duration-300`}
              >
                {open ? (
                  <>
                    <BsFillHouseGearFill />
                    <h4>Manage Products</h4>
                  </>
                ) : (
                  <BsFillHouseGearFill className="w-full" />
                )}
              </Link>
              {/* )} */}
              <Link
                href="/dashboard/feedback"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
              >
                {open ? (
                  <>
                    <MdFeedback />
                    <h4>Rate Us</h4>
                  </>
                ) : (
                  <MdFeedback className="w-full" />
                )}
              </Link>

              {/* {admin && ( */}
              <Link
                href="/dashboard/makeAdmin"
                className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-white focus:text-[#2563EB] focus:bg-white rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
              >
                {open ? (
                  <>
                    <MdAdminPanelSettings />
                    <h4>Make Admin</h4>
                  </>
                ) : (
                  <MdAdminPanelSettings className="w-full" />
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
