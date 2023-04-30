import React from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HiArrowNarrowRight } from "react-icons/hi";

const index = () => {
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit Total Form
  const onSubmit = async (data) => {
    const submitData = { ...data, status: "Pending" };
    axios
      .post(`${process.env.NEXT_PUBLIC_HOST_URL}/service`, submitData)
      .then((resp) => {
        if (resp?.data?.acknowledged) {
          alert.success("Service Request Send Successful");
          reset();
        }
      });
  };

  return (
    <div className="container mx-auto min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-2/3 w-full mx-auto rounded-lg bg-white mt-10 border boxShadow"
      >
        <div className="text-center lg:py-6 md:py-3 py-0">
          <h2 className="text-3xl font-bold">
            Need any <span className="text-orange-500">Servicing</span>
          </h2>
          <h2 className="text-xl text-center text-gray-500">
            Book Your Service
          </h2>
        </div>
        <div className="lg:px-8 md:px-8 px-3 py-4">
          <div className="lg:flex md:flex block mb-4 gap-x-6">
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <label
                className="block text-sm font-bold text-orange-600"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="w-full p-3 rounded-sm border border-gray-300 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                required
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <label
                className="block text-sm font-bold text-orange-600"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="w-full p-3 rounded-sm border border-gray-300 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                required
              />
            </div>
          </div>
          <div className="lg:flex md:flex gap-x-6 block mb-4">
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <label
                className="block text-sm font-bold text-orange-600"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full p-3 rounded-sm border border-gray-300 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                type="number"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                required
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <label
                className="block text-sm font-bold text-orange-600"
                htmlFor="color"
              >
                Service Date
              </label>
              <input
                className="w-full p-3 rounded-sm border border-gray-300 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                type="date"
                placeholder="Service Date"
                {...register("date", { required: true })}
                required
              />
            </div>
          </div>
          <div className="lg:flex md:flex gap-x-6 block mb-3">
            <div className="w-full">
              <label
                className="block text-sm font-bold text-orange-600"
                htmlFor="details"
              >
                Description
              </label>
              <textarea
                rows={6}
                className="w-full p-3 rounded-sm border border-gray-300 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                placeholder="Service Details"
                {...register("details", { required: true })}
                required
              />
            </div>
          </div>
          <button className="relative inline-block lg:text-lg md:text-lg text-sm group mb-6">
            <span className="relative lg:z-10 md:z-10 z-0 block text-white lg:px-6 md:px-6 px-4 lg:py-3 md:py-2.5 overflow-hidden font-semibold leading-tight transition-colors duration-300 ease-out border-2 border-orange-600 hover:border-orange-600 rounded-lg group-hover:text-orange-600 py-2.5">
              <span className="absolute inset-0 w-full h-full px-5 py-3 bg-orange-600"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
              <span className="relative flex items-center gap-x-2">
                <span>Send Request</span>
                <HiArrowNarrowRight />
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0 lg:block md:block hidden"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
