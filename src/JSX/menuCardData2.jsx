import { useState } from "react";
import MenuItem from "./menuItem";

const MenuCardData2 = ({ x }) => {
  const { title, categories } = x.card.card;
  const [showIndex, setShowIndex] = useState(null);
  return (
    <>
      <h1 className=" font-[600] text-[16px] mx-[15px] my-[24px]">{title}</h1>
      {categories.map((item, idx) => {
        let showItems = idx === showIndex ? true : false;
        return (
          <div key={idx}>
            <div className="flex flex-col">
              <div
                className="flex justify-between mx-[17px] cursor-pointer"
                onClick={() => {
                  setShowIndex(idx);
                }}>
                <h1 className="font-nun font-bold text-[16px]">
                  {item.title} ({item.itemCards?.length})
                </h1>
                {showItems ? (
                  <i className="material-icons ">keyboard_arrow_up</i>
                ) : (
                  <i className="material-icons ">keyboard_arrow_down</i>
                )}
              </div>
              <div className="mx-[17px]">
                {showItems && <MenuItem item={item.itemCards} key={title} />}
              </div>
            </div>
            {idx === categories.length - 1 ? (
              <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
            ) : (
              <hr className="my-[24px] mx-[16px] border-[#d3d3d3b8]" />
            )}
          </div>
        );
      })}
    </>
  );
};

export default MenuCardData2;
