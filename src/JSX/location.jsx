import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { getAddress } from "../APIs/currLocation";
import getCoordinates from "../APIs/coordinates";

const Location = () => {
  const [display, setDisplay] = useState("block");

  return (
    <div
      className="w-[522px] h-[100vh] flex flex-col bg-white  justify-between fixed z-[999] top-0 loc"
      style={{ display: display }}>
      <div className="pl-[120px] pr-[40px] flex flex-col mt-[32px]">
        <div className="mb-[30px] ">
          <i
            className="material-icons cursor-pointer"
            onClick={() => setDisplay("none")}>
            close
          </i>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for area, street name.."
            className="w-[360px] h-[50px] pl-[20px] pr-[72px] border-[1px] border-[rgb(118, 118, 118)] font-nun"
          />
        </div>
        <div
          className="mt-[28px] group cursor-pointer"
          onClick={async () => {
            const address = await getAddress();
            console.log(address);
          }}>
          <div className="px-[24px] py-[22px] border-[rgb(118, 118, 118)] border-[1px] flex">
            <span className="mr-[10px]">
              <i className="material-icons">my_location</i>
            </span>
            <span>
              <p className="font-nun font-[500] group-hover:text-[#FC8019]">
                Get current location
              </p>
              <p className="text-xs text-slate-400">Using GPS</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Location };
