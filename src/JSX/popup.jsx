import React, { useContext, useState } from "react";
import location from "../APIs/context";
import { useDispatch } from "react-redux";
import { addItem, clearItem } from "../APIs/slice";

const Popup = () => {
  const { setIsVisible, isVisible, setCustomize } = useContext(location);
  const dispatch = useDispatch();
  // Toggle the visibility of the popup
  const close = () => {
    setIsVisible({
      visible: false,
    });
  };

  const startFresh = () => {
    setIsVisible({
      visible: false,
    });

    dispatch(clearItem());

    if (!isVisible.addon) {
      dispatch(addItem({ ...isVisible?.dispatch, count: 1 }));
      isVisible.count2((prev) => prev + 1);
    } else {
      setCustomize({
        display: "block",
        addonData: isVisible?.addon,
        name: isVisible?.name,
        price:
          isVisible?.dispatch.price / 100 ||
          isVisible?.dispatch?.defaultPrice / 100,
        dispatch: isVisible?.dispatch,
        count2: isVisible.count2,
      });
    }
  };

  return (
    <div className="relative">
      {/* Popup container */}
      <div
        className={`fixed inset-x-0 bottom-0 mx-auto w-[520px] h-[204px] bg-white shadow-lg  transform transition-all duration-500 mb-[40px] ease-in-out p-[30px]  ${
          isVisible.visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
        {/* Popup content */}
        <p className="text-[17px] font-[600]">Items already in cart</p>
        <p className=" text-gray-600 text-[13px] mt-[5px]">
          Your cart contains items from another restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>

        {/* Buttons */}
        <div className="flex justify-around mt-[25px] text-[14px]">
          <button
            onClick={close}
            className="border-2 border-solid border-[#60b246] bg-white text-[#60b246] w-[216px] h-[46px] hover:shadow-lg font-black">
            NO
          </button>
          <button
            onClick={() => {
              startFresh();
            }}
            className="border-2 border-solid border-[#60b246] bg-[#60b246] text-white  w-[216px] h-[46px] hover:shadow-lg font-black">
            YES, START AFRESH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
