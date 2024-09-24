import React from "react";

const CartHeader = () => {
  return (
    <div className="h-20 flex  items-center justify-around bg-white sticky top-0 px-[30px] z-50 shadow-md">
      <div
        className="flex justify-start items-center w-[300px] text-center"
        onClick={() => {
          setDis("block");
          setAnimate("slideInLeft 0.4s ease-out forwards");
        }}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt=""
          className="h-12 cursor-pointer hover:scale-[1.1] transition-all mr-[25px]"
        />
        <div className="group flex items-center  w-[370px]">
          <span className=" pb-[2px] font-mont text-[14px] font-bold mr-2 ">
            SECURE CHECKOUT
          </span>
        </div>
      </div>

      <div className="flex justify-end w-[750px] text-[15px] ">
        <a href="">
          <p className="flex items-center mr-[40px] justify-between w-[65px] hover:text-[#FC8019]">
            <img src="/assets/help.png" alt="" className="h-6" />
            Help
          </p>
        </a>
        <p
          className="flex items-center justify-between w-[75px] hover:text-[#FC8019] cursor-pointer"
          onClick={() => setDis2("block")}>
          <img src="/assets/people.png" alt="" className="h-5" />
          Sign In
        </p>
      </div>
    </div>
  );
};

export default CartHeader;
