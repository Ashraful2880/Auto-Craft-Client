import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../Assests/Image/logo.png";
import Image from "next/image";
import avater from "../../../Assests/Image/avater.png";
import { MdAdminPanelSettings, MdOutlineExitToApp } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";
import TopHeader from "./TopHeader";
import useFirebase from "../../../../Hooks/UseFirebase";

const Header = () => {
  const router = useRouter();
  const { handleSignOut, user } = useFirebase();

  return (
    <>
      {!router?.asPath.includes("/dashboard") && (
        <div className="border-b">
          <TopHeader />
          <div className="lg:block hidden container mx-auto">
            <nav className="z-10 w-full">
              <div className="flex items-center justify-between py-3">
                {/* Left column for logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center gap-x-2">
                    <Image
                      src={logo}
                      alt="Logo"
                      className="w-24 bounce-animation3"
                    />
                  </Link>
                </div>

                {/* Right column for menu */}
                <div className="flex items-center gap-x-2">
                  <Link
                    href="/"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Home
                    </span>
                  </Link>

                  <Link
                    href="/cars"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Cars
                    </span>
                  </Link>
                  <Link
                    href="/bookService"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Book Service
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      About Us
                    </span>
                  </Link>
                  <Link
                    href="/ourServices"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Services
                    </span>
                  </Link>
                  <Link
                    href="/branches"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Branches
                    </span>
                  </Link>
                  <Link
                    href="/blogs"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Blogs
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                    <span className="absolute w-full h-full"></span>
                    <span className="relative group-hover:text-white transition duration-300 ease-in-out">
                      Contact
                    </span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-white px-2 py-1 text-lg font-semibold duration-300 bg-orange-600 border border-orange-600 rounded-[4px] flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                  >
                    <MdAdminPanelSettings className="text-2xl" />
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="flex items-center gap-x-2">
                  {user?.email && (
                    <img
                      className="w-9 h-9 rounded-full border border-orange-600"
                      src={user?.photoURL || avater}
                      alt="Profile"
                    />
                  )}
                  {user?.displayName && (
                    <p className="text-md font-semibold">{user?.displayName}</p>
                  )}
                  {user?.email ? (
                    <button
                      onClick={handleSignOut}
                      className="relative justify-center px-3 py-1 overflow-hidden font-semibold rounded-[4px] group text-lg duration-300 flex items-center gap-x-1 hover:bg-white hover:text-orange-600 focus:text-orange-600 focus:border-orange-600"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-48 group-hover:h-56"></span>
                      <span className="absolute w-full h-full"></span>
                      <span className="relative flex items-center gap-x-1 group-hover:text-white transition duration-300 ease-in-out">
                        <MdOutlineExitToApp className="text-2xl" />
                        <span>Logout</span>
                      </span>
                    </button>
                  ) : (
                    <div className="flex items-center ml-4">
                      <Link
                        href="/login"
                        className="px-3 py-1 text-lg font-medium duration-300 border border-transparent bg-white rounded-[3px] hover:bg-orange-600 text-black hover:text-white focus:border-b focus:border-b-orange-600 flex items-center gap-x-2"
                      >
                        <FaLock className="text-xl" />
                        <span>Login</span>
                      </Link>
                      <Link
                        href="/signup"
                        className="px-3 py-1 text-lg font-medium duration-300 border border-transparent bg-white rounded-[3px] hover:bg-orange-600 text-orange-600 hover:text-white focus:border-b focus:border-b-orange-600 flex items-center gap-x-2"
                      >
                        <FaUserAlt className="text-xl" />
                        <span>Signup</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
