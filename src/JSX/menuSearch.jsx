import React, { useState } from "react";
import MenuItem2 from "./menuItem2";

const MenuSearch = ({ menuData, restaurantInfo, setOpenSearch }) => {
  const title = menuData?.data?.cards[0]?.card?.card?.text;

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  console.log(menuData);

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setSearch("");
      setSearchData([]);
      return;
    }
    setSearch(searchValue);

    const cards =
      menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    console.log(cards);
    let searchResults = []; // Temporary array to store search results

    cards?.forEach((x, idx) => {
      if (idx > 1 && idx < cards.length - 3) {
        // Categories check
        if (x?.card?.card?.categories) {
          x.card.card.categories.forEach((category) => {
            const filteredItems = category?.itemCards?.filter((dish) =>
              dish?.card?.info?.name?.toLowerCase().includes(searchValue)
            );
            searchResults = [...searchResults, ...filteredItems]; // Append results
          });
        }
        // Direct items check
        if (x?.card?.card?.itemCards) {
          const filteredItems = x.card.card.itemCards.filter((dish) =>
            dish?.card?.info?.name?.toLowerCase().includes(searchValue)
          );
          searchResults = [...searchResults, ...filteredItems]; // Append results
        }
      }
    });

    console.log(searchResults);
    setSearchData(searchResults); // Update state with final search results
  };

  return (
    <div
      className={`bg-[#f1f1f174] px-[320px] min-h-[88vh] pb-[48px] pt-[20px]`}>
      <div className="w-[full] h-[52px] border-0 border-b border-solid border-[#e9e9eb] sticky top-0 flex items-center justify-between text-[#3d4152]">
        <div className="flex ">
          <i
            className="material-symbols-outlined text-[27px] p-[16px] cursor-pointer"
            onClick={() => setOpenSearch(false)}>
            keyboard_backspace
          </i>
          <input
            type="text"
            className=" outline-none bg-transparent text-[13px] w-[600px]"
            placeholder={`Search in ${title}`}
            value={search}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="h-[20px] w-[20px] bg-[#d8d8d8] rounded-full  ">
          <i className="material-icons text-[14px] ml-[3px] mb-[2px]">close</i>
        </div>
      </div>
      <div className="ml-[18px] mt-[10px]">
        {searchData.map((x, idx) => (
          <MenuItem2
            x={x}
            idx={idx}
            restaurantInfo={restaurantInfo}
            item={searchData}
            key={x?.card?.info?.id}
            id={x?.card?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSearch;
