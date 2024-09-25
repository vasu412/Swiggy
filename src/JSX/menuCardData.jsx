import MenuItem from "./menuItem";
import { useState } from "react";

const MenuCardData = ({ x, showItems, setShowIndex, restaurantInfo }) => {
  const { title, itemCards } = x.card.card;
  //const [show, setShow] = useState(true);
  return (
    <>
      <div
        className="flex justify-between mx-[17px] my-[20px] cursor-pointer"
        onClick={() => {
          setShowIndex();
          //setShow(!show);
        }}>
        <h1 className=" font-[600] text-[16px]">
          {title} ({itemCards.length})
        </h1>
        {showItems ? (
          <i className="material-icons">keyboard_arrow_up</i>
        ) : (
          <i className="material-icons ">keyboard_arrow_down</i>
        )}
      </div>
      <div className="mx-[17px]">
        {showItems && (
          <MenuItem item={itemCards} restaurantInfo={restaurantInfo} />
        )}
      </div>
    </>
  );
};

export default MenuCardData;
