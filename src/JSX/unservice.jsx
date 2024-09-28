import React from "react";
import { useNavigate } from "react-router-dom";

const Unservice = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[10%]">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
        alt=""
        className="h-[238px] w-[238px]"
      />
      <h1 className="font-[600] my-[10px]">Location Unserviceable</h1>
      <p className="text-[14px] mx-[40%] text-center text-[gray]">
        We don’t have any services here till now. Try changing location.
      </p>
    </div>
  );
};

export const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFFFFF] h-[88vh] w-full">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0 "
        className="h-[256px] w-[271px]"
      />
      <div className="text-center">
        <div className="text-[#535665] font-black text-[16px] mt-[24px] tracking-wide">
          Your cart is empty
        </div>
        <div className="text-[#7e808c] mt-[8px] text-[14px]">
          You can go to home page to view more restaurants
        </div>
      </div>
      <div
        className="bg-[#ff5200] mt-[30px] py-[11px] px-[20px] text-white font-black text-[15px] tracking-normal cursor-pointer"
        onClick={() => navigate("/")}>
        {"See restaurants near you".toUpperCase()}
      </div>
    </div>
  );
};

export default Unservice;
