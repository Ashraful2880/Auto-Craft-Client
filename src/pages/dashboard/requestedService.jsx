import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import TableLoading from "@/Components/Shared/Loading/TableLoading";
import NoDataFound from "@/Components/Shared/NoDataFound/NoDataFound";
import axios from "axios";
import React, { useState, useEffect } from "react";

const requestedService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/service`)
      .then((resp) => {
        setServices(resp?.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="min-h-screen">
        <div className="lg:px-6 md:px-4 px-2 mx-auto">
          {services?.length > 0 ? (
            <div>
              <div className="text-start pt-4 pb-6">
                <h2 className="text-2xl font-bold font-[cursive]">
                  My All
                  <span className="text-orange-500"> Requested Service </span>
                </h2>
              </div>
              <div className="inline-block w-full shadow-md rounded-lg overflow-scroll">
                <table className="min-w-full leading-normal">
                  <thead data-aos="flip-down">
                    <tr className="border-b-2 border-gray-200 bg-gray-900 text-white text-center text-sm font-semibold uppercase tracking-wider">
                      <th className="px-2 py-3">SL</th>
                      <th className="px-2 py-3">Name</th>
                      <th className="px-2 py-3">Email</th>
                      <th className="px-2 py-3">Phone</th>
                      <th className="px-2 py-3">Servicing Date</th>
                      <th className="px-2 py-3">Service Details</th>
                      <th className="px-2 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody data-aos="flip-up">
                    {services?.map((service, index) => (
                      <tr
                        className="text-md border-b border-gray-200 bg-white hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer text-gray-900 whitespace-no-wrap text-center"
                        key={service?._id}
                      >
                        <td className="py-5">{index + 1}</td>
                        <td className="py-5">{service?.name}</td>
                        <td className="py-5 flex flex-nowrap lg:w-full md:w-full justify-center">
                          {service?.email}
                        </td>
                        <td className="py-5">{service?.phone}</td>
                        <td className="py-5">{service?.date}</td>
                        <td className="py-5">{service?.details}</td>
                        <td className="py-5">
                          {service?.status === "Pending" ? (
                            <span className="bg-yellow-300 px-2 py-1 rounded-full">
                              {service?.status}
                            </span>
                          ) : (
                            <span className="bg-green-500 px-2 py-1 rounded-full">
                              {service?.status}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : isLoading ? (
            <div className="pt-20">
              <TableLoading />
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default requestedService;
