import React, { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { useAlert } from "react-alert";
import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";
import AdminRoute from "../../../PrivateRoute/AdminRoute";

const MakeAdmin = () => {
  const alert = useAlert();
  const [adminEmail, setAdminEmail] = useState("");

  const handleAdminEmail = (event) => {
    setAdminEmail(event.target.value);
  };

  const handleMakeAdmin = (event) => {
    event.preventDefault();
    const admin = { email: adminEmail };
    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/users/admin`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert.success("Admin Added Successful");
          setAdminEmail("");
        }
      });
  };

  return (
    <DashboardLayout>
      <AdminRoute>
        <div className="min-h-screen makeAdmin-background">
          <div
            className="container mx-auto grid grid-cols-1 place-content-center place-items-center lg:pt-60 pt-10"
            data-aos="slide-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="border-2 p-6 rounded-3xl border-gray-500 bg-[#00000085]">
              <form onSubmit={handleMakeAdmin}>
                <div className="text-center h-28 w-28 bg-white rounded-full mx-auto flex justify-center items-center p-2 mb-7">
                  <FaUserCog className="text-7xl text-orange-600 text-center w-full" />
                </div>
                <h2 className="text-white text-2xl font-semibold text-center">
                  Make an <span className="text-orange-600">Admin</span>
                </h2>
                <p className="text-gray-400 text-center mt-0.5 mb-5">
                  Enter a Valid Email to Make Admin
                </p>
                <div>
                  <input
                    onBlur={handleAdminEmail}
                    className="w-full p-3 rounded-sm border-1 my-2 focus:outline focus:outline-2 focus:outline-orange-600"
                    type="email"
                    placeholder="New Admin Email"
                    required
                  />
                  <input
                    className="w-full px-2 py-2 mb-3 rounded-md border-1 my-2  bg-orange-600 font-semibold text-white hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer"
                    type="submit"
                    value="Confirm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </AdminRoute>
    </DashboardLayout>
  );
};

export default MakeAdmin;
