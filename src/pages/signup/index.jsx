import React from "react";
import logo from "../../Assests/Image/logo.png";
import Image from "next/image";
import Link from "next/link";
import useFirebase from "../../../Hooks/UseFirebase";

const index = () => {
  const { handleEmail, handleName, handlePassword, handleRegister } = useFirebase();

  return (
    <div className="min-h-screen register-background">
      <div className="flex items-center min-h-[75vh] lg:p-4 md:p-4 lg:justify-center">
        <div className="border flex flex-col overflow-hidden bg-white rounded-md shadow-md max md:flex-row md:flex-1 lg:max-w-screen-lg">
          <div className="px-4 py-6 text-white footer-container md:w-1/2 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Main Logo"
                  className="lg:w-32 md:w-32 w-24 mx-auto"
                />
              </Link>
              <h1 className="my-3">
                <span className="text-orange-600">A</span>UTO
                <span className="text-orange-600">C</span>RAFT
              </h1>
            </div>
            <p className="mt-4 font-normal text-gray-400 md:mt-0 text-start lg:px-6 px-2">
              With the power of AUTO CRAFT, you can now focus only on
              functionaries for your digital products, while leaving the UI
              design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already Registered?</span>
              <Link
                href="/login"
                className="text-white my-2 px-4 py-2 bg-orange-600 border border-orange-600 rounded-md hover:text-orange-600 hover:bg-white duration-300 transition ease-in-out"
              >
                Please Log in
              </Link>
            </p>
          </div>
          <div className="lg:p-5 md:p-5 p-2 bg-white md:flex-1">
            <h3 className="lg:mt-4 md:mt-4 mt-2 lg:mb-10 md:mb-10 mb-5 text-3xl font-semibold text-gray-700 text-center">
              Please Create an Account
            </h3>
            <form
              onSubmit={handleRegister}
              className="flex flex-col space-y-5 px-2"
            >
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  onChange={handleName}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handleEmail}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  onChange={handlePassword}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white hover:text-[#2563eb] transition-colors duration-300 bg-[#2563eb] rounded-md shadow hover:bg-white focus:outline-none focus:ring-blue-200 focus:ring-4 border border-[#2563eb]"
                >
                  Create Account
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
