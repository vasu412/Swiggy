import React, { useContext, useEffect } from "react";
import Shimmer from "./shimmer";
import Items from "./items";
import TopRestaurants from "./topRestaurants";
import ResList from "./resList";
import loadMoreRestaurants from "../APIs/data";
import location from "../APIs/context";

const Body = () => {
  const { cards, setCards } = useContext(location);

  useEffect(() => {
    async function fetchData() {
      const cardData = await loadMoreRestaurants(31.3260152, 75.57618289999999);
      setCards(cardData);
    }
    fetchData();
  }, []);

  if (cards === null) {
    return <Shimmer />;
  }
  const items =
    cards?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const title = cards?.data?.cards[0]?.card?.card?.header?.title;
  const topRes =
    cards?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const topResTitle = cards?.data?.cards[1]?.card?.card?.header?.title;
  const resTitle = cards?.data?.cards[2]?.card?.card?.title;
  const res =
    cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="bg-[#f1f1f18c] px-[180px] ">
      <Items items={items} title={title} />
      <TopRestaurants topRes={topRes} topResTitle={topResTitle} />
      <ResList resTitle={resTitle} res={res} />
    </div>
  );
};

export default Body;
