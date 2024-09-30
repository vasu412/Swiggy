import location from "../APIs/context";
import MenuItem from "./menuItem";
import { useContext, useState } from "react";

const MenuCardData = ({ x, idx, showItems, setShowIndex, restaurantInfo }) => {
  const { title, itemCards } = x.card.card;
  const { filters } = useContext(location);
  const [show, setShow] = useState(() => {
    if (idx == 2) return true;
    return false;
  });

  const filteredItems = itemCards.filter((ele) => {
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
    <>
      <div
        className="flex justify-between mx-[17px] my-[20px] cursor-pointer"
        onClick={() => {
          setShowIndex();
          setShow(!show);
        }}>
        <h1 className=" font-[600] text-[16px]">
          {title} ({filteredItems.length})
        </h1>
        {showItems && show ? (
          <i className="material-icons">keyboard_arrow_up</i>
        ) : (
          <i className="material-icons ">keyboard_arrow_down</i>
        )}
      </div>

      <div className="mx-[17px] menuItems">
        {showItems && show && (
          <MenuItem item={filteredItems} restaurantInfo={restaurantInfo} />
        )}
      </div>

      <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
    </>
  );
};

export default MenuCardData;
