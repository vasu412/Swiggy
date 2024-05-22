import { useEffect } from "react";
import getCurrentLocation from "../APIs/currLocation";
import getCoordinates from "../APIs/coordinates";

const Location = () => {
  // Call the function to get the current location
  useEffect(() => {
    // getCurrentLocation();
    // getCoordinates("chandigarh");
    // data();
  }, []);

  return (
    <div className="w-[522px] h-[100vh] flex flex-col bg-white border-r-2 justify-between">
      <div className="pl-[120px] pr-[40px] flex flex-col ">
        <div className="mb-[30px]">
          <i className="material-icons">close</i>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for area, street name.."
            className="w-[360px] h-[50px] pl-[20px] pr-[72px] border-[1px] border-[rgb(118, 118, 118)] font-nun"
          />
        </div>
        <div className="mt-[28px] group">
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

export default Location;
