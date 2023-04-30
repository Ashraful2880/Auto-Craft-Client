import React from "react";
import { useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";


const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="container mx-auto">
      <div className="border lg:my-14 my-10 boxShadow py-9">
        <div className="lg:w-2/3 w-full mx-auto">
          <p className="text-sm text-orange-600 text-center">Information</p>
          <h2 className="text-3xl font-semibold text-[#2E4B7B] text-center">
            Drop Us a Message For any Query
          </h2>
          <form onSubmit={onSubmit} className="lg:mt-14 mt-10 lg:px-0 md:px-0 px-4">
            <div className="lg:flex md:flex block justify-between items-center lg:gap-x-6 md:gap-x-6 gap-x-2 mb-4">
              <div className="w-full">
                <label className="block mb-1">Enter Name</label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-md focus:outline-orange-600"
                />
              </div>
              <div className="w-full lg:mt-0 md:mt-0 mt-3">
                <label className="block mb-1">Enter Email</label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-md focus:outline-orange-600"
                />
              </div>
            </div>
            <div className="lg:flex md:flex block justify-between items-center lg:gap-x-6 md:gap-x-6 gap-x-2 mb-4">
              <div className="w-full">
                <label className="block mb-1">Enter Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border rounded-md focus:outline-orange-600"
                />
              </div>
              <div className="w-full lg:mt-0 md:mt-0 mt-3">
                <label className="block mb-1">Enter Subject</label>
                <input
                  {...register("subject", { required: true })}
                  placeholder="Your Subject"
                  className="w-full px-4 py-3 border rounded-md focus:outline-orange-600"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block mb-1">Enter Message</label>
              <textarea
                rows={6}
                {...register("message", { required: true })}
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-md focus:outline-orange-600"
              />
            </div>
            <div className="w-full flex justify-center items-center pb-5">
              <button
                type="submit"
                className="relative inline-block lg:text-lg md:text-lg text-sm group lg:mt-8 mt-6"
              >
                <span className="relative z-10 block text-white lg:px-6 md:px-6 px-4 lg:py-3 md:py-2.5 py-2.5 overflow-hidden font-semibold leading-tight transition-colors duration-300 ease-out border-2 border-orange-600 hover:border-orange-600 rounded-lg group-hover:text-orange-600">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 bg-orange-600"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                  <span className="relative flex items-center gap-x-2">
                    <span>Send Message</span>
                    <BsFillSendFill />
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-2 -mr-2 transition-all duration-200 ease-linear lg:bg-black md:bg-black bg-white rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
