import { useState, useEffect } from "react";
import { Location } from "./location";

const Header = () => {
  const [location, setLocation] = useState("Location");
  // function callBack() {
  //   loc.style.display = display;
  //   setDisplay("none");
  // }

  // useEffect(() => {
  //   loc = document.querySelector(".loc");
  // }, []);

  return (
    <div className="h-20 flex  items-center justify-around bg-white sticky top-0 px-[30px] z-50">
      <div className="flex justify-between items-center w-[300px] text-center">
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt=""
          className="h-12 cursor-pointer hover:scale-[1.1] transition-all"
        />
        <div className="group flex items-center hover:text-[#FC8019] hover:border-[#FC8019] cursor-pointer">
          <span className="border-b-2 border-black pb-[2px] font-mont text-sm font-bold mr-2 group-hover:border-[#FC8019]">
            Other
          </span>
          <span className=" font-nun tracking-widest text-xs font-thin text-slate-600 hover:text-slate-500">
            Jalandhar,punjab,India
          </span>
          <i className="material-icons text-[#FC8019]">keyboard_arrow_down</i>
        </div>
      </div>

      <div className="flex justify-between w-[750px] text-[15px] ">
        <a href="">
          <p className="flex items-center justify-between w-[165px] hover:text-[#FC8019]">
            <img src="../../src/assets/suitcase.png" alt="" className="h-6" />
            Swiggy Corporate
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[75px] hover:text-[#FC8019]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[100px] hover:text-[#FC8019]">
            <img src="../../src/assets/offer.png" alt="" className="h-6" />
            Offers <sup className="text-[10px] text-[#fca919f6]">NEW</sup>
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[65px] hover:text-[#FC8019]">
            <img src="../../src/assets/help.png" alt="" className="h-6" />
            Help
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[75px] hover:text-[#FC8019]">
            <img src="../../src/assets/people.png" alt="" className="h-5" />
            Sign In
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[60px] hover:text-[#FC8019]">
            <img src="../../src/assets/basket.png" alt="" className="h-5" />
            Cart
          </p>
        </a>
      </div>
      {/* <Location /> */}
    </div>
  );
};

export default Header;
