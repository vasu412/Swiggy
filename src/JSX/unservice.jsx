import React from "react";

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

export default Unservice;
