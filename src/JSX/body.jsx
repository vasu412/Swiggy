import React, { useContext, useEffect } from "react";
import Shimmer from "./shimmer";
import Items from "./items";
import TopRestaurants from "./topRestaurants";
import ResList from "./resList";
import loadMoreRestaurants from "../APIs/data";
import location from "../APIs/context";
import Footer from "./footer";
import AllRestaurants from "./allRes";
import Unservice from "./unservice";
import Addons from "./addons";

const Body = () => {
  const { cards, setCards, coordinates } = useContext(location);

  useEffect(() => {
    if (coordinates) {
      async function fetchData() {
        try {
          const cardData = await loadMoreRestaurants(
            coordinates.lat,
            coordinates.long
          );
          setCards(cardData);
          console.log(cardData);
        } catch {
          console.log("error");
        }
      }
      fetchData();
    }
  }, [coordinates]);

  if (!cards || cards.statusMessage === "Lat or Lng is missing") {
    return <Shimmer />;
  }

  if (
    cards.statusMessage === "Oops!! Something went wrong" ||
    cards.data.cards[0].card.card.title === "Location Unserviceable"
  ) {
    return <Unservice />;
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
    <div className="bg-[#FFFFFF]">
      <div className=" px-[180px]">
        <Items items={items} title={title} />
        <TopRestaurants topRes={topRes} topResTitle={topResTitle} />
        <ResList resTitle={resTitle} res={res} />
      </div>
      <AllRestaurants cards={cards} key={"allRes"} />
      <Footer />
    </div>
  );
};

export default Body;
