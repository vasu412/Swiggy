import { useContext } from "react";
import location from "../APIs/context";
import { Link } from "react-router-dom";

const Header = () => {
  let { setDis, setAnimate, currLocation, setDis2 } = useContext(location);

  return (
    <div className="h-20 flex  items-center justify-around bg-white sticky top-0 px-[30px] z-50">
      <div
        className="flex justify-start items-center w-[300px] text-center"
        onClick={() => {
          setDis("block");
          setAnimate("slideInLeft 0.4s ease-out forwards");
        }}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt=""
          className="h-12 cursor-pointer hover:scale-[1.1] transition-all mr-[40px]"
        />
        <div className="group flex items-center hover:text-[#FC8019] hover:border-[#FC8019] cursor-pointer w-[370px]">
          <span className="border-b-2 border-black pb-[2px] font-mont text-sm font-bold mr-2 group-hover:border-[#FC8019]">
            Other
          </span>
          <span className=" font-nun tracking-widest text-xs font-thin text-slate-600 hover:text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden mr-[30px]">
            {localStorage.getItem("currLocation") || currLocation}
          </span>
          <i className="material-icons text-[#FC8019]">keyboard_arrow_down</i>
        </div>
      </div>

      <div className="flex justify-between w-[750px] text-[15px] ">
        <a href="">
          <p className="flex items-center justify-between w-[165px] hover:text-[#FC8019]">
            <img src="/assets/suitcase.png" alt="" className="h-6" />
            Swiggy Corporate
          </p>
        </a>
        <Link to={"search/"}>
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
        </Link>
        <a href="">
          <p className="flex items-center justify-between w-[100px] hover:text-[#FC8019]">
            <img src="/assets/offer.png" alt="" className="h-6" />
            Offers <sup className="text-[10px] text-[#fca919f6]">NEW</sup>
          </p>
        </a>
        <a href="">
          <p className="flex items-center justify-between w-[65px] hover:text-[#FC8019]">
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
        <Link to={"cart/"}>
          <p className="flex items-center justify-between w-[60px] hover:text-[#FC8019]">
            <img src="/assets/basket.png" alt="" className="h-5" />
            Cart
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
