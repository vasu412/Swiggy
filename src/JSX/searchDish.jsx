import { useState } from "react";
import Restaurant from "./restaurant";
import Dish from "./dish";

const SearchDish = ({ submitDishData, submitRestaurantData }) => {
  const [isDish, setIsDish] = useState(false);
  const [isRes, setIsRes] = useState(true);
  const dishes = submitDishData?.groupedCard?.cardGroupMap?.DISH?.cards;
  const restaurants =
    submitRestaurantData?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
  console.log(dishes, submitRestaurantData);
  return (
    <>
      <button
        className="px-[12px] border mr-[8px] rounded-3xl text-[12px] font-[600] h-[34px] ml-[290px]"
        onClick={() => {
          setIsRes(true);
          setIsDish(false);
        }}
        style={{
          color: isRes ? "#fff" : "#1B1E24",
          backgroundColor: isRes ? "#3e4152" : "transparent",
        }}>
        Restaurants
      </button>
      <button
        className="px-[12px] border mr-[8px] rounded-3xl text-[12px] font-[600] h-[34px] text-[#1B1E24]"
        onClick={() => {
          setIsDish(true);
          setIsRes(false);
        }}
        style={{
          color: isDish ? "#fff" : "#1B1E24",
          backgroundColor: isDish ? "#3e4152" : "transparent",
        }}>
        Dishes
      </button>
      <div className="mx-[290px]  bg-[#e9eaeed2] h-[70.9vh] overflow-scroll hide">
        <div className="flex flex-wrap justify-center items-center">
          {isRes &&
            restaurants.map((x) => (
              <Restaurant
                data={x?.card?.card?.info}
                key={x?.card?.card?.info?.id}
              />
            ))}
        </div>
        <div className="flex flex-wrap justify-around items-center">
          {isDish &&
            dishes.map((x, idx) => {
              return (
                idx > 0 && (
                  <Dish data={x?.card?.card} key={x?.card?.card?.info?.id} />
                )
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchDish;
