import React from "react";

const Pagination = () => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="bg-white rounded-xl shadow-sm p-2 flex items-center gap-2">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          Previous
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              page === 1
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
