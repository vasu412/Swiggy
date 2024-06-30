// Shimmer.js
import React from "react";

const MenuShimmer = () => {
  return (
    <div className="animate-pulse space-y-4 p-4 px-[320px]">
      <div className="h-2 bg-gray-200 rounded w-full"></div>
      <div className="h-2 bg-gray-200 rounded w-[100px]"></div>

      {/* First Box */}
      <div className="flex">
        <div className="flex space-x-4">
          <div className="w-[400px] h-[300px] bg-gray-200 rounded-md"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        {/* Second Box */}
        <div className="flex space-x-4">
          <div className="w-[400px] h-[300px] bg-gray-200 rounded-md"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Additional Lines Outside Boxes */}
      <div className="space-y-4">
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default MenuShimmer;
