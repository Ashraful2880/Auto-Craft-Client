import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";

const DeleteOrder = ({
  id,
  setShowModal,
  updated,
  setUpdated,
}) => {
  const alert = useAlert();

  // Delete An Order By ID
  const handleDelete = async () => {
    setShowModal("");
    await axios
      .delete(`${process.env.NEXT_PUBLIC_HOST_URL}/deleteOrder/${id}`)
      .then((resp) => {
        if (resp?.data?.deletedCount > 0) {
          alert.success("Deleted Successful!");
          setUpdated(updated + 1);
        }
      })
      .catch((error) => {
        alert.error(error?.message);
      });
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="inline-block align-middle h-screen"></span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle lg:w-96 md:w-96 w-full">
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="p-4 mt-5 rounded bg-white max-w-sm text-center mx-auto text-gray-700 pt-0">
              <span className="bg-orange-600 text-white p-4 rounded-full inline-flex -mt-8 mb-2">
                <svg
                  className="fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                </svg>
              </span>
              <h3 className="font-bold text-2xl text-black mb-2">
                Delete Your Data?
              </h3>
              <p>You Will permanently Loose Your Data</p>
              <p>Or Click to Cancel</p>
              <div className="flex pt-8 gap-x-3">
                <button
                  onClick={handleDelete}
                  className="text-white font-medium w-1/2 bg-orange-600 py-2 px-4 border border-orange-600 rounded hover:bg-white hover:text-red-700 transition duration-300 ease-in-out"
                >
                  Sure! Delete
                </button>
                <button
                  onClick={() => setShowModal("")}
                  className="text-gray-600 font-medium w-1/2 bg-white py-2 px-4 border border-gray-400 rounded hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;
