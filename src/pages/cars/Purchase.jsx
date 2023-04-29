import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import axios from "axios";
import { BsSendFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import useFirebase from "../../../Hooks/UseFirebase";

const Purchase = ({ setOrder, carDetails }) => {
  const { user } = useFirebase();
  const router = useRouter();
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit The Form
  const onSubmit = (data) => {
    const submitData = {
      ...data,
      id: carDetails?._id,
      status: "Pending",
      email: user?.email,
    };
    {
      user?.email &&
        axios
          .post(`${process.env.NEXT_PUBLIC_HOST_URL}/makeOrder`, submitData)
          .then((resp) => {
            if (resp) {
              reset();
              alert.success("Order Added Successful");
              router.push("/success");
            }
          })
          .catch((error) => {
            alert.error(error?.message);
          });
    }
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle lg:w-1/2 w-full p-4">
          <div className="flex justify-end items-center">
            <button onClick={() => setOrder(false)}>
              <FaTimes className="text-2xl text-orange-600 hover:text-gray-900 duration-300 transition ease-out" />
            </button>
          </div>
          <div className="w-full container mx-auto">
            <h4 className="text-3xl text-center lg:py-0 md:py-0 py-3">
              You are Almost There
            </h4>
            <p className="text-gray-400 text-center text-xl">
              Just Form The Field
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border shadow-md mt-5 lg:px-6 md:px-6 px-2 pt-4 pb-3"
            >
              <div className="flex justify-between items-center gap-x-4 mb-5">
                <div className="w-full">
                  <label
                    htmlFor="userName"
                    className="block mb-1 font-semibold text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                    placeholder="Enter Your Name"
                    {...register("userName", { required: true })}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="number"
                    className="block mb-1 font-semibold text-gray-500"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                    placeholder="Enter Your Number"
                    {...register("number", { required: true })}
                    onKeyPress={(event) => {
                      const value = event.target.value;
                      if (value.length >= 11) {
                        event.preventDefault();
                      }
                    }}
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                  placeholder="Enter Your Email"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="block mb-1 font-semibold text-gray-500"
                >
                  Current Address
                </label>
                <textarea
                  rows={4}
                  className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                  placeholder="Enter Current Address"
                  {...register("address", { required: true })}
                  required
                />
              </div>
              <div className="flex items-center gap-x-4 mb-5">
                <button
                  type="submit"
                  className="text-white px-4 py-3 rounded-md bg-[#2563eb] border border-[#2563eb] hover:bg-white hover:text-[#2563eb] cursor-pointer transition duration-300 ease-in-out flex justify-center items-center gap-x-2"
                >
                  <p>Confirm Purchase</p>
                  <BsSendFill />
                </button>

                <button
                  onClick={() => setOrder(false)}
                  type="reset"
                  className="text-white px-4 py-3 rounded-md bg-orange-600 border border-orange-600 hover:bg-white hover:text-orange-600 cursor-pointer transition duration-300 ease-in-out flex justify-center items-center gap-x-2"
                >
                  <p>Cancel</p>
                  <FaTimes />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
