import React, { useState } from "react";
import MenuItem from "./menuItem";

const MenuCardData3 = ({ props }) => {
  const {
    restaurantInfo,
    categories,
    title,
    showIndex,
    setShowIndex,
    item,
    idx,
  } = props;
  let showItems = idx === showIndex ? true : false;
  const [show, setShow] = useState(false);
  return (
    <div key={idx}>
      <div className="flex flex-col">
        <div
          className="flex justify-between mx-[17px] cursor-pointer"
          onClick={() => {
            setShowIndex(idx);
            setShow(!show);
          }}>
          <h1 className="font-nun font-bold text-[16px]">
            {item.title} ({item.itemCards?.length})
          </h1>
          {showItems && show ? (
            <i className="material-icons ">keyboard_arrow_up</i>
          ) : (
            <i className="material-icons ">keyboard_arrow_down</i>
          )}
        </div>
        <div className="mx-[17px]">
          {showItems && show && (
            <MenuItem
              item={item.itemCards}
              key={title}
              restaurantInfo={restaurantInfo}
            />
          )}
        </div>
      </div>
      {idx === categories.length - 1 ? (
        <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
      ) : (
        <hr className="my-[24px] mx-[16px] border-[#d3d3d3b8]" />
      )}
    </div>
  );
};

export default MenuCardData3;
