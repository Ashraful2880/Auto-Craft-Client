import React from "react";
import SideBar from "./Sidebar/SideBar";
import MobileMenu from "./Sidebar/MobileMenu";

const Dashboard = ({ open, setOpen }) => {
  return (
    <>
      <div className="lg:block hidden">
        <SideBar open={open} />
      </div>
      {open === true && (
        <div
          className={`lg:hidden block fixed left-0 top-16 min-h-screen w-full z-50 bg-gray-900 text-white`}
        >
          <MobileMenu setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
