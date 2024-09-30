import { useContext, useState } from "react";
import MenuCardData3 from "./menuCardData3";
import location from "../APIs/context";

const MenuCardData2 = ({ x, restaurantInfo }) => {
  const { title, categories } = x.card.card;
  const [showIndex, setShowIndex] = useState(null);

  const { filters } = useContext(location);
  let searchResults = [];

  x.card.card.categories.forEach((category) => {
    const filteredItems = category?.itemCards.filter((ele) => {
      const { isVeg, isBestseller, isGuiltfree } = ele.card.info;

      // Apply filter conditions
      if (filters.veg && isVeg !== 1) return false;
      if (filters.nonVeg && isVeg === 1) return false;
      if (filters.bestSeller && !isBestseller) return false;
      if (filters.guiltFree && !isGuiltfree) return false;

      return true;
    });

    if (filteredItems && filteredItems.length > 0) {
      searchResults = [...searchResults, ...filteredItems]; // Append filtered results
    }
  });

  // Don't render if no items match the filters
  if (searchResults.length === 0) {
    return null;
  }

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
