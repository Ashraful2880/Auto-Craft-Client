import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHeader from "../Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex">
      <Dashboard open={open} setOpen={setOpen} />
      <div className="w-full">
        <DashboardHeader open={open} setOpen={setOpen} />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
