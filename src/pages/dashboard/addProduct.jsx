import React, { useState } from "react";
import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import { useForm, Controller } from "react-hook-form";
import { useAlert } from "react-alert";
import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";

const AddProduct = () => {
  const router = useRouter();
  const alert = useAlert();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const carTypeOptions = [
    { value: "Sports", label: "Sports" },
    { value: "Classic", label: "Classic" },
  ];
  const gearTypeOptions = [
    { value: "Auto", label: "Auto" },
    { value: "Manual", label: "Manual" },
  ];
  const fuelTypeOptions = [
    { value: "Octane", label: "Octane" },
    { value: "Petrol", label: "Petrol" },
    { value: "LPG", label: "LPG" },
  ];

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

  // Submit Total Form
  const onSubmit = async (data) => {
    if (image) {
      try {
        const resp = await axios.post(
          `${process.env.NEXT_PUBLIC_HOST_URL}/addProduct`,
          data
        );
        if (resp?.data?.acknowledged) {
          alert.success("Product Added Succesful");
          reset();
          router.push("/dashboard/manageProducts");
        }
      } catch (error) {
        alert.error(error?.message);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="add-Car-background min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center items-center min-h-screen">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-2/3 w-full mx-auto lg:border md:borer border-gray-700 rounded-lg bg-[#0000002e]"
              data-aos="flip-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              {/* <h1 className="text-3xl text-white text-center font-semibold lg:pt-12 md:pt-12 pt-5 lg:pb-6 md:pb-6 pb-3">
                Add New <span className="text-orange-600">Product</span>
              </h1> */}
              <div className="text-center pt-4 pb-6">
                <h2 className="text-3xl text-white font-bold font-[cursive]">
                  Add a New
                  <span className="text-orange-500"> Product </span>
                </h2>
              </div>
              <div className="lg:px-8 md:px-8 px-3 py-4">
                <div className="lg:flex md:flex block mb-4 gap-x-6">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="name"
                    >
                      Brand Name
                    </label>
                    <input
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="text"
                      placeholder="Enter Car Brand Name"
                      {...register("name", { required: true })}
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="model"
                    >
                      Model Name
                    </label>
                    <input
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="text"
                      placeholder="Enter Car Model Name"
                      {...register("model", { required: true })}
                      required
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-x-6 block mb-4">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="modelYear"
                    >
                      Model Year
                    </label>
                    <input
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="number"
                      placeholder="Car Model Year"
                      {...register("modelYear", { required: true })}
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="type"
                    >
                      Car Type
                    </label>
                    <Controller
                      name="type"
                      control={control}
                      defaultValue={null}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              width: "100%",
                              padding: "5px ",
                              borderRadius: "0.125rem",
                              borderWidth: "1px",
                              marginTop: "0.5rem",
                              marginBottom: "0.5rem",
                              "&:focus": {
                                outline: "2px solid orange",
                                outlineOffset: "2px",
                              },
                            }),
                          }}
                          options={carTypeOptions}
                          value={carTypeOptions.find(
                            (option) => option.value === value
                          )}
                          onChange={(selectedOption) => {
                            onChange(selectedOption.value);
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-x-6 block mb-4">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="gear"
                    >
                      Gear Type
                    </label>
                    <Controller
                      name="gear"
                      control={control}
                      defaultValue={null}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              width: "100%",
                              padding: "5px ",
                              borderRadius: "0.125rem",
                              borderWidth: "1px",
                              marginTop: "0.5rem",
                              marginBottom: "0.5rem",
                              "&:focus": {
                                outline: "2px solid orange",
                                outlineOffset: "2px",
                              },
                            }),
                          }}
                          options={gearTypeOptions}
                          value={gearTypeOptions.find(
                            (option) => option.value === value
                          )}
                          onChange={(selectedOption) => {
                            onChange(selectedOption.value);
                          }}
                        />
                      )}
                    />
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600 z-0"
                      htmlFor="fuel"
                    >
                      Fuel Type
                    </label>
                    <Controller
                      name="fuel"
                      control={control}
                      defaultValue={null}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              width: "100%",
                              padding: "5px ",
                              borderRadius: "0.125rem",
                              borderWidth: "1px",
                              marginTop: "0.5rem",
                              marginBottom: "0.5rem",
                              "&:focus": {
                                outline: "2px solid orange",
                                outlineOffset: "2px",
                              },
                            }),
                          }}
                          options={fuelTypeOptions}
                          value={fuelTypeOptions.find(
                            (option) => option.value === value
                          )}
                          onChange={(selectedOption) => {
                            onChange(selectedOption.value);
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-x-6 block mb-4">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="color"
                    >
                      Car Color
                    </label>
                    <input
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="text"
                      placeholder="Enter Car Color"
                      {...register("color", { required: true })}
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="price"
                    >
                      Car Price
                    </label>
                    <input
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="number"
                      placeholder="Enter Car Price"
                      {...register("price", { required: true })}
                      required
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-x-6 block mb-4">
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="price"
                    >
                      Car Image
                    </label>

                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {!loading ? (
                            <>
                              {!image ? (
                                <svg
                                  aria-hidden="true"
                                  className="w-10 h-10 mb-3 text-gray-400"
                                  fill="none"
                                  stroke="#EA580C"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                              ) : (
                                <p>{image}</p>
                              )}
                            </>
                          ) : (
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
                          )}
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to Upload
                            </span>
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF Car Image
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files)}
                          defaultValue={image}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full">
                    <label
                      className="block text-grey-darker text-sm font-bold text-orange-600"
                      htmlFor="details"
                    >
                      Description
                    </label>
                    <textarea
                      rows={6}
                      className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                      type="text"
                      placeholder="Enter Car Details"
                      {...register("details", { required: true })}
                      required
                    />
                  </div>
                </div>
                <input
                  className="w-40 px-2 py-3 mb-3 rounded-md border-1 my-2 bg-orange-600 font-semibold text-white hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer tracking-wider"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
