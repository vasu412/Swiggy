import MenuItem from "./menuItem";
import { useState } from "react";

const MenuCardData = ({ x }) => {
  const [showItems, setShowItems] = useState(true);
  const { title, itemCards } = x.card.card;
  return (
    <>
      <div
        className="flex justify-between mx-[17px] my-[20px] cursor-pointer"
        onClick={() => {
          setShowItems(!showItems);
        }}>
        <h1 className=" font-[600] text-[16px]">
          {title} ({itemCards.length})
        </h1>
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="mx-[17px]">
        {showItems && <MenuItem item={itemCards} key={title} />}
      </div>
    </>
  );
};

export default MenuCardData;
