import { useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("Location");
  return (
    <div className="h-20 flex px-5 items-center justify-around bg-white sticky">
      <div className="flex justify-between items-center w-[300px] text-center">
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt=""
          className="h-12"
        />
        <div className="flex items-center">
          <span className="border-b-2 border-black pb-[2px] font-mont text-sm font-bold mr-2 ">
            Other
          </span>
          <span className=" font-nun tracking-widest text-xs font-thin text-slate-700 hover:text-slate-400">
            Jalandhar,Punjab,India
          </span>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>

      <div className="flex justify-between w-2/4 text-[15px]">
        <p>
          <img src="../assets/suitcase.png" alt="" />
          Swiggy Corporate
        </p>
        <p className="flex items-center justify-between w-[80px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Search
        </p>
        <p>
          Offers <sup className="text-[10px]">NEW</sup>
        </p>
        <p>Help</p>
        <p>Sign In</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
