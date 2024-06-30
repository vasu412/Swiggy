import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className=" bg-[#171a29] h-[344px] w-full flex flex-col">
        <div className="flex justify-center items-center w-[50px] h-[50px] mt-28 relative self-center mb-[60px]">
          {/* <div className="absolute -inset-4 border-4 border-gray-300 border-solid  rounded-full animate-pulse"></div> */}
          <div className="absolute -inset-4 border-t-4 border-gray-300  border-solid rounded-full animate-spin "></div>
          <img
            className="absolute inset-0 m-auto rounded-full "
            src="/assets/ice-cream.png"
            alt="shimmer"
          />
        </div>

        <h1 className="text-white self-center item-center text-[28px] font-regular">
          Looking for great food near you ...
        </h1>
      </div>
      <div className="flex flex-wrap justify-center  ">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" animate-pulse w-[264px] h-[230px] p-3 m-5  rounded-md bg-[#fdfdfd]">
              <div className="animate-pulse w-full h-[135px]  border-neutral-300 rounded-md bg-gray-100"></div>

              <p className="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              <p className="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              <p className="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
