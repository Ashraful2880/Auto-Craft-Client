import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AdminRoute from "../../../PrivateRoute/AdminRoute";
import CardLoading from "@/Components/Shared/Loading/CardLoading";
import NoDataFound from "@/Components/Shared/NoDataFound/NoDataFound";
import DeleteOrder from "@/Components/Shared/Modal/DeleteOrder";
import EditProduct from "@/Components/Dashboard/ManageProducts/EditProduct";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [id, setId] = useState();
  const [updated, setUpdated] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/allCars`).then((resp) => {
      setAllProducts(resp?.data);
      setIsLoading(false);
    });
  }, [updated]);

  // Delete Order Detail Modal Function
  const handleDelete = (id) => {
    setShowModal(true);
    setId(id);
  };

  const handleEdit = (id) => {
    setEditModal(true);
    const idObject = { path: "car", id };
    setId(idObject);
  };

  return (
    <DashboardLayout>
      <AdminRoute>
        <div className="min-h-screen pb-12 lg:px-6 md:px-4 px-2 mx-auto">
          {/* <h1 className="text-3xl py-4 font-semibold text-orange-600 mb-5">
            Manage Products{" "}
            <span className="text-gray-600">({allProducts?.length || 0})</span>
            <div className="h-0.5 w-56 bg-orange-600 mt-3"></div>
          </h1> */}
          <div className="text-start pt-4 pb-6">
            <h2 className="text-2xl font-bold font-[cursive]">
              Manage All
              <span className="text-orange-500">
                {" "}
                Products ({allProducts?.length || 0})
              </span>
            </h2>
          </div>
          {/* Products Area */}
          {allProducts?.length > 0 ? (
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
              {allProducts?.map((product) => (
                <div
                  key={product?._id}
                  className="relative border shadow-md hover:scale-105 transition duration-300 ease-in-out"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={product?.image}
                    alt="Product_Image"
                    className="w-full max-h-48"
                  />
                  <div className="absolute top-1 left-1">
                    <h4 className="bg-red-700 text-white px-3 py-1 rounded-full">
                      Price:
                      <span className="font-semibold">${product?.price}</span>
                    </h4>
                  </div>
                  <div className="px-3 py-1">
                    <h3 className="text-lg font-semibold">
                      {product?.name} - ({product?.model})
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {product?.details?.slice(0, 75)}
                    </p>
                    <div className="flex items-center gap-x-4 pt-4 pb-3">
                      <button
                        onClick={() => handleEdit(product?._id)}
                        className="text-green-700 px-2 py-1 bg-white flex items-center gap-x-2 border border-green-700 rounded-[3px] hover:bg-green-700 hover:text-white transition duration-300 ease-out"
                      >
                        <FaEdit className="text-xl" />
                        <span>Update</span>
                      </button>
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="text-red-700 px-2 py-1 bg-white flex items-center gap-x-2 border border-red-700 rounded-[3px] hover:bg-red-700 hover:text-white transition duration-300 ease-out"
                      >
                        <FaTrash className="text-xl" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : isLoading ? (
            <>
              <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-x-6 w-full">
                {[...Array(10)]?.map((item, index) => (
                  <div key={index + 1}>
                    <CardLoading />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-screen w-full flex justify-center items-center">
              <NoDataFound />
            </div>
          )}
        </div>
        {showModal && (
          <DeleteOrder
            id={id}
            setShowModal={setShowModal}
            updated={updated}
            setUpdated={setUpdated}
          />
        )}
        {editModal && (
          <EditProduct
            id={id}
            setEditModal={setEditModal}
            updated={updated}
            setUpdated={setUpdated}
          />
        )}
      </AdminRoute>
    </DashboardLayout>
  );
};

export default ManageProducts;
