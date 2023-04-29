import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";
import { useAlert } from "react-alert";
import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import AdminRoute from "../../../PrivateRoute/AdminRoute";
import TableLoading from "@/Components/Shared/Loading/TableLoading";
import NoDataFound from "@/Components/Shared/NoDataFound/NoDataFound";
import ViewOrder from "@/Components/Dashboard/MyOrders/ViewOrder";
import DeleteOrder from "@/Components/Shared/Modal/DeleteOrder";
import useFirebase from "../../../Hooks/UseFirebase";

const ManageOrder = () => {
  const alert = useAlert();
  const { user } = useFirebase();
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [ordersId, setOrdersId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const [path, setPath] = useState("");
  const [updated, setUpdated] = useState(0);
  const [showModal, setShowModal] = useState("");

  // Get All Orders
  useEffect(() => {
    setIsLoading(true);
    if (user?.email) {
      axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/orders`).then((resp) => {
        setOrders(resp?.data);
        setOrdersId(resp?.data?.map((item) => item?.id));
      });
    }
  }, [user?.email, updated]);

  // Find Order Details By Id
  useEffect(() => {
    setIsLoading(true);
    if (ordersId?.length > 0) {
      // setIsLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST_URL}/findOrder`, ordersId)
        .then((resp) => setOrderDetails(resp?.data));
      setIsLoading(false);
    }
  }, [ordersId]);

  const allOrders = (id) => {
    return orderDetails?.find((item) => item?._id === id);
  };

  // Approve Order Status
  const handleApprove = (id) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_HOST_URL}/status/${id}`)
      .then((resp) => {
        if (resp) {
          alert.success("Status Updated");
          setUpdated(updated + 1);
        }
      })
      .catch((error) => {
        alert.error(error?.message);
      });
  };

  // View Order Detail Modal Function
  const handleView = (id) => {
    setShowModal({ data: id, status: "view" });
    setId(id?._id);
  };
  // Delete Order Detail Modal Function
  const handleDelete = (id) => {
    setShowModal("delete");
    setId(id);
    setPath("deleteOrder");
  };

  return (
    <DashboardLayout>
      <AdminRoute>
        <div className="min-h-screen">
          <div className="lg:px-6 md:px-4 px-2 mx-auto">
            {orders?.length > 0 ? (
              <div>
                <div className="text-start pt-4 pb-6">
                  <h2 className="text-2xl font-bold font-[cursive]">
                    Manage All
                    <span className="text-orange-500"> Orders </span>
                  </h2>
                </div>
                <div className="inline-block w-full shadow-md rounded-lg overflow-scroll">
                  <table
                    className="min-w-full leading-normal"
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-900 text-center text-sm font-semibold text-white uppercase tracking-wider">
                        <th className="px-5 py-3">SL</th>
                        <th className="px-5 py-3">Name</th>
                        <th className="px-5 py-3">Model</th>
                        <th className="px-5 py-3">Model Year</th>
                        <th className="px-5 py-3">Price</th>
                        <th className="px-5 py-3">Customer Name</th>
                        <th className="px-5 py-3">Customer Email</th>
                        <th className="px-5 py-3">Status</th>
                        <th className="px-5 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
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
                            ${allOrders(order?.id)?.price}
                          </td>
                          <td className="p-5">{order?.userName}</td>
                          <td className="p-5">{order?.email}</td>
                          <td className="p-5">
                            {order?.status === "Pending" ? (
                              <span className="bg-yellow-300 px-3 py-1 rounded-full">
                                {order?.status}
                              </span>
                            ) : (
                              <span className="bg-green-300 px-3 py-1 rounded-full">
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
                              {order?.status === "Pending" ? (
                                <button
                                  onClick={() => handleApprove(order?.id)}
                                  className="text-white bg-[#2563eb] py-1 px-2 border border-[#2563eb] rounded-[3px] flex items-center gap-x-2 hover:text-[#2563eb] hover:bg-white transition duration-300 ease-in-out"
                                >
                                  <FaCheck />
                                  <p>Approve</p>
                                </button>
                              ) : (
                                <button
                                  disabled
                                  className="text-white bg-blue-400 py-1 px-2 border border-blue-400 rounded-[3px] flex items-center gap-x-2 cursor-not-allowed"
                                >
                                  <FaCheck />
                                  <p>Approved</p>
                                </button>
                              )}
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
              <div className="h-screen w-full flex justify-center items-center">
                <NoDataFound />
              </div>
            )}
          </div>
          {showModal?.status === "view" && (
            <ViewOrder setShowModal={setShowModal} showModal={showModal} />
          )}
          {showModal === "delete" && (
            <DeleteOrder
              id={id}
              path={path}
              setShowModal={setShowModal}
              updated={updated}
              setUpdated={setUpdated}
            />
          )}
        </div>
      </AdminRoute>
    </DashboardLayout>
  );
};

export default ManageOrder;
