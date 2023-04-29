import React from "react";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import DashboardHome from "@/Components/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "@/Components/DashboardLayout/DashboardLayout";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <PrivateRoute>
        <DashboardLayout>
          <DashboardHome />
        </DashboardLayout>
      </PrivateRoute>
    </div>
  );
};

export default Dashboard;
