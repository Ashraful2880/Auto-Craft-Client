import React,{useState} from "react";
import { useRouter } from "next/router";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import logo from "../../../Assests/Image/logo.png";
import Image from "next/image";
import avater from "../../../Assests/Image/avater.png";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import useFirebase from "../../../../Hooks/UseFirebase";

const MobileNavbar = () => {
  const router = useRouter();
  const { handleSignOut, user } = useFirebase();
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    setOpen(false);
    handleSignOut();
  };
  return (
    <div className="lg:hidden block mb-14">
      {!router?.asPath.includes("/dashboard") && (
        <nav className="bg-black fixed top-0 left-0 z-10 w-full">
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center justify-between w-full">
              {/* Left column for logo */}
              <div className="flex justify-between items-center w-full py-2 px-4 sm:px-6 lg:px-8">
                <div>
                  <Link href="/">
                    <Image src={logo} alt="Logo" className="w-20" />
                  </Link>
                </div>
                <div>
                  {user?.email && (
                    <div className="flex gap-x-2 items-center justify-between">
                      <div>
                        <img
                          className="w-9 h-9 rounded-full border border-white"
                          src={user?.photoURL || avater}
                          alt="Profile"
                        />
                      </div>
                      <div>
                        {user?.displayName && (
                          <p className="text-white text-sm">
                            {user?.displayName}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {open === false ? (
                  <button
                    onClick={() => setOpen(true)}
                    className="text-2xl text-white "
                  >
                    <FaBars className="" />
                  </button>
                ) : (
                  <button
                    onClick={() => setOpen(false)}
                    className="text-2xl text-orange-600"
                  >
                    <FaTimes className="" />
                  </button>
                )}
              </div>
              {open && (
                <div
                  className={`w-full bg-black min-h-screen px-4 sm:px-6 lg:px-8 openAnimation border-t border-t-gray-500`}
                >
                  <div className="flex flex-col w-full text-center pt-4">
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/">Home</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/cars">Cars</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/bookService">Book Service</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/about">About</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/ourServices">Our Services</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/branches">Our Branches</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/blogs">Blogs</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/contact">Contact</Link>
                    </button>
                    <button
                      className="text-lg text-white font-medium w-full px-3 py-2 my-3 border border-gray-500 rounded-md duration-300 focus:bg-orange-600 focus:border-orange-600"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-full mx-auto">
                    {!user?.email ? (
                      <div className="flex justify-center items-center gap-x-2 w-full">
                        <button
                          className="text-lg font-medium text-white w-1/2 my-3 px-6 py-2 bg-[#2563eb] border border-[#2563eb] rounded-[3px] duration-300 focus:bg-[#2563eb] focus:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <Link
                            href="/login"
                            className="flex justify-center items-center gap-x-2"
                          >
                            <span>Login</span>
                            <AiOutlineLogin className="text-xl" />
                          </Link>
                        </button>
                        <button
                          className="text-lg font-medium text-[#2563eb] w-1/2 my-3 px-6 py-2 bg-white border border-[#2563eb] rounded-[3px] duration-300 focus:bg-[#2563eb] focus:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <Link
                            href="/signup"
                            className="flex justify-center items-center gap-x-2"
                          >
                            <span>Signup</span>
                            <AiOutlineLogout className="text-xl" />
                          </Link>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleLogOut}
                        className="text-white bg-orange-600 px-5 py-2 text-lg font-medium border-orange-600 my-3 w-full flex justify-center items-center gap-x-2"
                      >
                        <span>Logout</span>
                        <AiOutlineLogout className="text-xl" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
