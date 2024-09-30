import React, { useContext } from "react";
import location from "../APIs/context";

const MenuFilters = () => {
  const { filters, setFilters } = useContext(location);

  return (
    <div className="flex items-center justify-start mx-[5px] select-none">
      <div className="mr-[8px] cursor-pointer px-[16px] rounded-full border border-solid w-[70px] h-[32px] border-[#02060C26] flex items-center relative">
        <div
          className={`absolute ${
            filters.veg ? "left-[33px]" : "left-[12px]"
          }  w-[20px] h-[20px] transition-all duration-300 ease-linear`}
          onClick={() =>
            setFilters((prev) => ({ ...prev, veg: !prev.veg, nonVeg: false }))
          }>
          <img src="/assets/veg2.jpg" className="h-full w-full " />
        </div>

        <div
          className={`h-[12px] w-full ${
            filters.veg ? "bg-[#60b246]" : "bg-[#02060C26]"
          } rounded-[16px]`}></div>
      </div>

      <div className="mr-[8px] cursor-pointer px-[16px] rounded-full border border-solid w-[70px] h-[32px] border-[#02060C26] flex items-center relative">
        <div
          className={`absolute ${
            filters.nonVeg ? "left-[33px]" : "left-[12px]"
          }  w-[20px] h-[20px] transition-all duration-300 ease-linear`}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              nonVeg: !prev.nonVeg,
              veg: false,
            }))
          }>
          <img src="/assets/nonVeg2.jpg" className="h-full w-full " />
        </div>

        <div
          className={`h-[12px] w-full ${
            filters.nonVeg ? "bg-[#E53554]" : "bg-[#02060C26]"
          } rounded-[16px]`}></div>
      </div>

      <div
        className={`mr-[8px] cursor-pointer px-[16px] rounded-full border border-solid w-fit h-[32px] flex items-center justify-center relative text-[13px] ${
          !filters.bestSeller
            ? "bg-transparent border-[#02060C26]"
            : "bg-[#F0F0F5] border-[#02060CBE]"
        }`}
        onClick={() =>
          setFilters((prev) => ({ ...prev, bestSeller: !prev.bestSeller }))
        }>
        <div>Bestseller</div>

        {filters.bestSeller && (
          <i
            className="material-icons text-[16px] ml-[5px] "
            onClick={() =>
              setFilters((prev) => ({ ...prev, bestSeller: false }))
            }>
            close
          </i>
        )}
      </div>

      <div
        className={`mr-[8px] cursor-pointer px-[16px] rounded-full border border-solid w-fit h-[32px] flex items-center relative text-[13px] ${
          !filters.guiltFree
            ? "bg-transparent border-[#02060C26]"
            : "bg-[#F0F0F5] border-[#02060CBE]"
        }`}
        onClick={() =>
          setFilters((prev) => ({ ...prev, guiltFree: !prev.guiltFree }))
        }>
        <div>Guiltfree</div>

        {filters.guiltFree && (
          <i
            className="material-icons text-[16px] ml-[5px] "
            onClick={() =>
              setFilters((prev) => ({ ...prev, guiltFree: false }))
            }>
            close
          </i>
        )}
      </div>
    </div>
  );
};

export default MenuFilters;
