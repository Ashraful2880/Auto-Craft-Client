import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import avater from "../../Assests/Image/avater.png";
import Image from "next/image";
import { BsFillSendFill } from "react-icons/bs";
import { RxReset } from "react-icons/rx";

const Feedback = () => {
  const alert = useAlert();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Image Upload On Cloudinary
  const handleImageUpload = async (files) => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "UploadFromWebsite");
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_IMAGE_API_PATH}/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    if (file) {
      setImage(file?.secure_url);
      setValue("image", file?.secure_url);
      setLoading(false);
    }
  };

  // Submit User Rating
  const onSubmit = async (data) => {
    const submitData = { ...data, rating: rating };
    if (image) {
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST_URL}/addRating`, submitData)
        .then((resp) => {
          if (resp?.data?.acknowledged) {
            alert.success("Rating Added Succesful");
            reset();
          }
        })
        .catch((error) => {
          alert.error(error?.message);
        });
    }
  };

  return (
    <DashboardLayout>
      <div className="feedback-background">
        <div className="container mx-auto flex justify-center items-center min-h-screen">
          <div className="lg:w-[50%] md:w-[85%] w-[95%] border bg-[#f8fafff2] rounded-2xl lg:px-10 md:px-10 px-4 pt-5 pb-8">
            {/*  <div
              className="text-3xl font-bold pb-2 text-center"
              data-aos="flip-down"
            >
              Leave a <span className="text-orange-600">Feedback</span>
            </div> */}
            <div className="text-center pt-4 pb-6" data-aos="flip-down">
              <h2 className="text-3xl font-bold font-[cursive]">
                Leave Your
                <span className="text-orange-500"> Feedback </span>
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" text-center">
                {!loading ? (
                  <div
                    className="mx-auto w-20 h-20 mb-2 border border-gray-300 rounded-full relative bg-gray-100"
                    data-aos="flip-down"
                  >
                    <Image
                      src={image || avater}
                      id="image"
                      className="object-cover w-full rounded-full"
                      width={100}
                      height={100}
                      alt="UserImage"
                    />
                  </div>
                ) : (
                  <>
                    <div role="status" className="pb-5">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mx-auto text-gray-200 animate-spin fill-orange-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  </>
                )}
                {!loading && (
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-[#EA580C] bg-white hover:bg-gray-100 font-medium"
                    data-aos="flip-down"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#EA580C"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        stroke="none"
                      ></rect>
                      <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                    Browse Photo
                  </label>
                )}

                <input
                  name="photo"
                  id="fileInput"
                  className="hidden"
                  type="file"
                  onChange={(e) => handleImageUpload(e.target.files)}
                />
              </div>
              <div className="mb-5" data-aos="flip-down">
                <label
                  htmlFor="name"
                  className="block mb-1 font-semibold text-gray-500"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  required
                />
              </div>
              <div className="mb-5" data-aos="flip-down">
                <label
                  htmlFor="profession"
                  className="block mb-1 font-semibold text-gray-500"
                >
                  Profession
                </label>
                <input
                  type="text"
                  className="border w-full px-4 py-3 rounded-md focus:outline focus:outline-2 focus:outline-orange-600"
                  placeholder="Enter Your Profession"
                  {...register("profession", { required: true })}
                  required
                />
              </div>
              <div data-aos="flip-down">
                <label
                  htmlFor="comment"
                  className="block mb-1 font-semibold text-gray-500"
                >
                  What was The work Experience?
                </label>
                <textarea
                  rows={4}
                  className="bg-white border shadow-md w-full rounded-[5px] mb-6 focus:outline focus:outline-2 focus:outline-orange-600 p-3"
                  placeholder="Leave Your Comment"
                  {...register("comment", { required: true })}
                  required
                ></textarea>
              </div>
              <div data-aos="flip-down">
                <p className="block mb-1 font-semibold text-gray-500">
                  Your Rating
                </p>
                <ul className="flex items-center gap-x-3">
                  <li
                    className={`flex flex-col text-sm texzt-[#60699a] bg-white border border-[#e6edff] rounded-[5px] justify-center items-center w-[97px] h-[103px] ${
                      rating === 1 && "activeStyle"
                    }`}
                  >
                    <div
                      onClick={() => setRating(1)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_33)">
                          <path
                            d="M16.5 18.3333H16.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.5 18.3333H27.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.4167 27.9583C18.0141 27.3486 18.7272 26.8642 19.5142 26.5335C20.3012 26.2028 21.1463 26.0324 22 26.0324C22.8537 26.0324 23.6988 26.2028 24.4858 26.5335C25.2728 26.8642 25.9859 27.3486 26.5833 27.9583"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M32.2043 32.2777C31.7043 32.7922 31.3661 33.4422 31.2318 34.147C31.0976 34.8519 31.173 35.5806 31.4489 36.243C31.7248 36.9053 32.1889 37.4722 32.7838 37.8733C33.3788 38.2745 34.0783 38.4922 34.7958 38.4997C35.5132 38.5071 36.2171 38.3039 36.8202 37.9151C37.4233 37.5264 37.8991 36.9693 38.1886 36.3128C38.4782 35.6562 38.5687 34.9292 38.4491 34.2217C38.3294 33.5143 38.0048 32.8575 37.5155 32.3327L34.8333 29.3333L32.2043 32.2777V32.2777Z"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M38.2525 24.7812C38.414 23.8629 38.4968 22.9324 38.5 22C38.5 18.7366 37.5323 15.5465 35.7193 12.8331C33.9062 10.1197 31.3293 8.00484 28.3143 6.756C25.2993 5.50715 21.9817 5.18039 18.781 5.81705C15.5803 6.45371 12.6403 8.02518 10.3327 10.3327C8.02518 12.6403 6.45371 15.5803 5.81705 18.781C5.18039 21.9817 5.50715 25.2993 6.756 28.3143C8.00484 31.3293 10.1197 33.9062 12.8331 35.7193C15.5465 37.5323 18.7366 38.5 22 38.5C23.265 38.5 24.4933 38.3607 25.6667 38.093"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_33">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="mt-2">Terrible</span>
                    </div>
                  </li>
                  <li
                    className={`flex flex-col text-sm texzt-[#60699a] bg-white border border-[#e6edff] rounded-[5px] justify-center items-center w-[97px] h-[103px] ${
                      rating === 2 && "activeStyle"
                    }`}
                  >
                    <div
                      onClick={() => setRating(2)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_89)">
                          <path
                            d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 18.3333H16.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.5 18.3333H27.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.4167 27.9583C18.0141 27.3486 18.7272 26.8642 19.5142 26.5335C20.3012 26.2028 21.1463 26.0324 22 26.0324C22.8537 26.0324 23.6987 26.2028 24.4858 26.5335C25.2728 26.8642 25.9859 27.3486 26.5833 27.9583"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_89">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="mt-2">Bad</span>
                    </div>
                  </li>
                  <li
                    className={`flex flex-col text-sm texzt-[#60699a] bg-white border border-[#e6edff] rounded-[5px] justify-center items-center w-[97px] h-[103px]  ${
                      rating === 3 && "activeStyle"
                    }`}
                  >
                    <div
                      onClick={() => setRating(3)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_95)">
                          <path
                            d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 18.3333H16.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.5 18.3333H27.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 27.5H27.5"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_95">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="mt-2">Okay</span>
                    </div>
                  </li>
                  <li
                    className={`flex flex-col text-sm texzt-[#60699a] bg-white border border-[#e6edff] rounded-[5px] justify-center items-center w-[97px] h-[103px] activeStyl  ${
                      rating === 4 && "activeStyle"
                    }`}
                  >
                    <div
                      onClick={() => setRating(4)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_101)">
                          <path
                            d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
                            stroke="#121C51"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 18.3333H16.5183"
                            stroke="#121C51"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.5 18.3333H27.5183"
                            stroke="#121C51"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.4167 27.5C18.0141 28.1098 18.7272 28.5942 19.5142 28.9249C20.3012 29.2556 21.1463 29.4259 22 29.4259C22.8537 29.4259 23.6987 29.2556 24.4858 28.9249C25.2728 28.5942 25.9859 28.1098 26.5833 27.5"
                            stroke="#121C51"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_101">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="mt-2">Good</span>
                    </div>
                  </li>
                  <li
                    className={`flex flex-col text-sm texzt-[#60699a] bg-white border border-[#e6edff] rounded-[5px] justify-center items-center w-[97px] h-[103px]  ${
                      rating === 5 && "activeStyle"
                    }`}
                  >
                    <div
                      onClick={() => setRating(5)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_107)">
                          <path
                            d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 16.5H16.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.5 16.5H27.5183"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.3334 23.8333H14.6667M14.6667 23.8333C14.6667 25.7783 15.4393 27.6435 16.8146 29.0188C18.1898 30.3941 20.0551 31.1667 22 31.1667C23.9449 31.1667 25.8102 30.3941 27.1855 29.0188C28.5607 27.6435 29.3334 25.7783 29.3334 23.8333H14.6667Z"
                            stroke="#60699A"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_107">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="mt-2">Amazing</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex justify-end items-center gap-x-4 pt-8">
                <button
                  type="submit"
                  className="text-white hover:text-[#2563eb] font-semibold border border-[#2563eb] px-6 py-2 bg-[#2563eb] hover:bg-white rounded-[4px] flex items-center gap-x-2 transition duration-300 ease-in-out"
                >
                  <BsFillSendFill />
                  <p>Submit</p>
                </button>
                <button
                  type="reset"
                  className="text-white hover:text-orange-600 font-semibold border px-6 py-2 bg-orange-600 border-orange-600 hover:bg-white rounded-[4px] flex items-center gap-x-2 transition duration-300 ease-in-out"
                >
                  <RxReset />
                  <p> Cancel</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Feedback;
