import React, { useContext, useState } from "react";
import MenuItem from "./menuItem";
import location from "../APIs/context";

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
  const { filters } = useContext(location);

  const filteredItems = item?.itemCards.filter((ele) => {
    const { isVeg, isBestseller, isGuiltfree } = ele.card.info;

    // Apply filter conditions
    if (filters.veg && isVeg !== 1) return false;
    if (filters.nonVeg && isVeg === 1) return false;
    if (filters.bestSeller && !isBestseller) return false;
    if (filters.guiltFree && !isGuiltfree) return false;

    return true;
  });

  // Don't render if no items match the filters
  if (filteredItems.length === 0) {
    return null;
  }

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
            {item.title} ({filteredItems?.length})
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
              item={filteredItems}
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
