import ViewOrder from "@/Components/Dashboard/MyOrders/ViewOrder";
import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import TableLoading from "@/Components/Shared/Loading/TableLoading";
import DeleteOrder from "@/Components/Shared/Modal/DeleteOrder";
import NoDataFound from "@/Components/Shared/NoDataFound/NoDataFound";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import useFirebase from "../../../Hooks/UseFirebase";

const MyOrder = () => {
  const { user } = useFirebase();
  const [updated, setUpdated] = useState(0);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState("");
  const [id, setId] = useState("");
  const [ordersId, setOrdersId] = useState();
  const [orderDetails, setOrderDetails] = useState();

  // Get Order By User Email
  useEffect(() => {
    setIsLoading(true);
    if (user?.email) {
      setIsLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_HOST_URL}/myOrders/${user.email}`)
        .then((resp) => {
          setOrders(resp?.data);
          setOrdersId(resp?.data?.map((item) => item?.id));
          setIsLoading(false);
        });
    }
  }, [user?.email, updated]);

  // Find Order Details By Id
  useEffect(() => {
    setIsLoading(true);
    if (ordersId?.length > 0) {
      setIsLoading(false);
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST_URL}/findOrder`, ordersId)
        .then((resp) => {
          setOrderDetails(resp?.data);
          setIsLoading(false);
        });
    }
  }, [ordersId]);

  const allOrders = (id) => {
    return orderDetails?.find((item) => item?._id === id);
  };

  // View Order Detail Modal Function
  const handleView = (id) => {
    setShowModal({ data: id, status: "view" });
    setId(id?._id);
  };

  // Edit Order Detail Modal Function
  const handlePay = (id) => {
    setShowModal("payment");
    setId(id);
  };

  // Delete Order Detail Modal Function
  const handleDelete = (id) => {
    setShowModal("delete");
    setId(id);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen">
        <div className="lg:px-6 md:px-4 px-2 mx-auto">
          {orders?.length > 0 ? (
            <div>
              <div className="text-start pt-4 pb-6">
                <h2 className="text-2xl font-bold font-[cursive]">
                  My All
                  <span className="text-orange-500"> Orders </span>
                </h2>
              </div>
              <div className="inline-block w-full shadow-md rounded-lg overflow-scroll">
                <table className="min-w-full leading-normal">
                  <thead data-aos="flip-down">
                    <tr className="border-b-2 border-gray-200 bg-gray-900 text-white text-center text-sm font-semibold uppercase tracking-wider">
                      <th className="px-5 py-3">SL</th>
                      <th className="px-5 py-3">Name</th>
                      <th className="px-5 py-3">Model</th>
                      <th className="px-5 py-3">Model Year</th>
                      <th className="px-5 py-3">Color</th>
                      <th className="px-5 py-3">Price</th>
                      <th className="px-5 py-3">Image</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody data-aos="flip-up">
                    {orders?.map((order, index) => (
                      <tr
                        className="text-md border-b border-gray-200 bg-white hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer text-gray-900 whitespace-no-wrap text-center"
                        key={order?._id}
                      >
                        <td className="p-5">{index + 1}</td>
                        <td className="p-5">{allOrders(order?.id)?.name}</td>
                        <td className="p-5">{allOrders(order?.id)?.model}</td>
                        <td className="p-5">
                          {allOrders(order?.id)?.modelYear}
                        </td>
                        <td className="p-5">
                          <div className="flex justify-center items-center gap-x-2">
                            <p>{allOrders(order?.id)?.color}</p>
                            <div
                              className={`w-7 h-5 border`}
                              style={{
                                background: `${allOrders(order?.id)?.color}`,
                              }}
                            ></div>
                          </div>
                        </td>
                        <td className="p-5">${allOrders(order?.id)?.price}</td>
                        <td className="p-5">
                          <img
                            src={allOrders(order?.id)?.image}
                            alt="ProductImage"
                            className="w-16 rounded-md mx-auto"
                          />
                        </td>
                        <td className="p-5">
                          {order?.status === "Pending" ? (
                            <span className="bg-yellow-300 px-2 py-1 rounded-full">
                              {order?.status}
                            </span>
                          ) : (
                            <span className="bg-green-500 px-2 py-1 rounded-full">
                              {order?.status}
                            </span>
                          )}
                        </td>
                        <td className="p-5">
                          <div className="flex justify-center items-center gap-x-3">
                            <button
                              onClick={() => handleView(allOrders(order?.id))}
                              className="text-white bg-gray-600 py-1 px-2 border border-gray-600 rounded-[3px] flex items-center gap-x-2 hover:text-gray-600 hover:bg-white transition duration-300 ease-in-out"
                            >
                              <FaEye />
                              <p>View</p>
                            </button>
                            {/*   <button
                              onClick={() => handlePay(order?._id)}
                              className="text-white bg-[#2563eb] py-1 px-2 border border-[#2563eb] rounded-[3px] flex items-center gap-x-2 hover:text-[#2563eb] hover:bg-white transition duration-300 ease-in-out lg:w-auto md:w-auto w-[120px]"
                            >
                              <BsCreditCardFill />
                              <p>Pay Now</p>
                            </button> */}
                            <button
                              onClick={() => handleDelete(order?._id)}
                              className="text-white bg-orange-600 py-1 px-2 border border-orange-600 rounded-[3px] flex items-center gap-x-2 hover:text-orange-600 hover:bg-white transition duration-300 ease-in-out"
                            >
                              <FaTrash />
                              <p>Delete</p>
                            </button>
                          </div>
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
        {showModal?.status === "view" && (
          <ViewOrder showModal={showModal} setShowModal={setShowModal} />
        )}
        {/*  {showModal === "payment" && (
          <HandlePay
            id={id}
            setShowModal={setShowModal}
          />
        )} */}
        {showModal === "delete" && (
          <DeleteOrder
            id={id}
            setShowModal={setShowModal}
            updated={updated}
            setUpdated={setUpdated}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyOrder;
