import React from "react";
import logo from "../../Assests/Image/logo.png";
import Image from "next/image";
import Link from "next/link";
import useFirebase from "../../../Hooks/UseFirebase";

const index = () => {
  const { handleEmail, handlePassword, googleSignIn, handleSignIn } =
    useFirebase();

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex items-center min-h-[75vh] lg:p-4 md:p-4 lg:justify-center">
        <div className="border flex flex-col overflow-hidden bg-white rounded-md shadow-md max md:flex-row md:flex-1 lg:max-w-screen-lg">
          <div className="lg:p-5 md:p-5 p-3 bg-white md:flex-1">
            <h4 className="text-xl font-sewmibold text-gray-400 text-center">
              Welcome Back
            </h4>
            <h3 className="mb-10 text-3xl font-semibold text-gray-700 text-center">
              Please Login
            </h3>
            <form
              onSubmit={handleSignIn}
              className="flex flex-col space-y-5 px-2"
            >
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
                  <Link
                    href="/resetPassword"
                    className="text-sm text-[#2563eb] hover:underline hover:text-blue-800 duration-300"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  onChange={handlePassword}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Repeat Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white hover:text-[#2563eb] transition-colors duration-300 bg-[#2563eb] rounded-md shadow hover:bg-white focus:outline-none focus:ring-blue-200 focus:ring-4 border border-[#2563eb]"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5 pb-6">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
              </div>
            </form>
            <div className="flex flex-col space-y-4">
              <button
                onClick={googleSignIn}
                className="flex items-center justify-center px-4 py-2 transition-colors duration-300 border shadow-md rounded-md group hover:bg-gray-800 focus:outline-none"
              >
                <span>
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="25px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                  Google
                </span>
              </button>
            </div>
          </div>
          <div className="p-4 py-6 text-white footer-container md:w-1/2 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 lg:text-4xl md:text-4xl text-2xl font-bold tracking-wider text-center">
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
            <p className="mt-4 font-normal text-gray-200 md:mt-0 text-start lg:px-6 px-2">
              With the power of AUTO CRAFT, you can now focus only on
              functionaries for your digital products, while leaving the UI
              design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Dont have an account?</span>
              <Link
                href="/signup"
                className="text-white my-2 px-4 py-2 bg-orange-600 border border-orange-600 rounded-md hover:text-orange-600 hover:bg-white duration-300 transition ease-in-out"
              >
                Get Started
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
