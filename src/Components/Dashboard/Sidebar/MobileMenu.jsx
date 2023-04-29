import React, { FC } from "react";
import Link from "next/link";

const MobileMenu = ({ setOpen }) => {
  return (
    <div className="text-center py-8 mx-6 openSidebar">
      <ul className="flex flex-col gap-y-5">
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2 "
          >
            <Link href="/dashboard">
              <p>Dashboard Home</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2 "
          >
            <Link href="/dashboard/myOrder">
              <p>My Orders</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/manageOrder">
              <p>Manage Orders</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/addProduct">
              <p>Add Product</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/manageProducts">
              <p>Manage Product</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/requestedService">
              <p>Requested Service</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/feedback">
              <p>Rate Us</p>
            </Link>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpen(false)}
            className="text-orange-600 font-semibold w-[80%] bg-white border border-orange-600 rounded-md py-2"
          >
            <Link href="/dashboard/makeAdmin">
              <p>Make Admin</p>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
