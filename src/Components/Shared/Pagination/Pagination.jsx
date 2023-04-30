import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  paginationList,
}) => {
  return (
    <div>
      <div className="flex lg:flex-1 md:flex-1 items-center justify-between mb-8 pt-2">
        <nav className="isolate flex lg:justify-end md:justify-end justify-center w-full rounded-md gap-x-2">
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className="relative inline-flex items-center rounded-l-lg px-2 py-2 border border-gray-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 focus:z-20 transition duration-300 ease-in-out"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {[...Array(paginationList)].map((item, index) => (
            <button
              onClick={() => setCurrentPage(index + 1)}
              key={index + 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 focus:z-20 transition duration-300 ease-in-out ${
                currentPage === index + 1 &&
                "bg-orange-600 text-white border-orange-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              currentPage !== paginationList && setCurrentPage(currentPage + 1)
            }
            className="relative inline-flex items-center rounded-r-lg px-2 py-2 border border-gray-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 focus:z-20 transition duration-300 ease-in-out"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
