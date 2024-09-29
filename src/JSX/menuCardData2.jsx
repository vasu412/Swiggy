import { useState } from "react";
import MenuCardData3 from "./menuCardData3";

const MenuCardData2 = ({ x, restaurantInfo }) => {
  const { title, categories } = x.card.card;
  const [showIndex, setShowIndex] = useState(null);
  return (
    <>
      <h1 className=" font-[600] text-[16px] mx-[15px] my-[24px]">{title}</h1>
      {categories.map((item, idx) => {
        return (
          <MenuCardData3
            props={{
              restaurantInfo,
              showIndex,
              setShowIndex,
              item,
              idx,
              categories,
              title,
            }}
            key={idx}
          />
        );
      })}
    </>
  );
};

export default MenuCardData2;
