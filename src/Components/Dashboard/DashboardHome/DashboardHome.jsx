import React from "react";
import useFirebase from "../../../../Hooks/UseFirebase";

const DashboardHome = () => {
  const { user, admin } = useFirebase();

  return (
    <div className="dashborad-home min-h-screen overflow-hidden pt-8">
      <div
        className="flex flex-col items-center justify-center w-full lg:h-[50vh] h-full"
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          src={user?.photoURL}
          className="rounded-full h-52 w-52"
          alt="User"
        />
        <div className="mt-5">
          <h1 className="text-white text-center text-4xl font-semibold">
            Hello{" "}
            <span className="text-orange-600 font-[cursive]">
              {user.displayName}
            </span>
          </h1>
          <h2 className="mt-2 text-2xl text-white text-center">Welcome to</h2>
          <h2 className="text-xl text-gray-300 text-center mt-2">
            <span className="text-orange-600 font-bold italic">A</span>uto{" "}
            <span className="text-orange-600 font-bold italic">C</span>raft
            <span className="font-semibold"> Dashboard </span>
          </h2>
          <p className="text-xl text-white text-center py-2">
            Your Current Role is
            {admin?.admin === true ? (
              <span className="text-2xl font-semibold text-orange-600 mx-2">
                Admin
              </span>
            ) : (
              <span className="text-2xl font-semibold text-orange-600 mx-2">
                User
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
