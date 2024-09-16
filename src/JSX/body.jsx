import React, { useContext, useEffect } from "react";
import Shimmer from "./shimmer";
import Items from "./items";
import TopRestaurants from "./topRestaurants";
import ResList from "./resList";
import loadMoreRestaurants from "../APIs/data";
import location from "../APIs/context";
import Footer from "./footer";
import AllRestaurants from "./allRes";

const Body = () => {
  const { cards, setCards, coordinates } = useContext(location);

  useEffect(() => {
    async function fetchData() {
      try {
        const cardData = await loadMoreRestaurants(
          coordinates.lat,
          coordinates.lng
        );
        setCards(cardData);
        console.log(cardData);
      } catch (err) {
        console.log(err);
        setCards(null);
      }
    }
    fetchData();
  }, []);

  if (!cards || cards.statusMessage === "Lat or Lng is missing") {
    return <Shimmer />;
  }

  if (
    cards.statusMessage === "Oops!! Something went wrong" ||
    cards.data.cards[0].card.card.title === "Location Unserviceable"
  ) {
    return (
      <div className="flex items-center justify-center flex-col mt-[10%]">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
          alt=""
          className="h-[238px] w-[238px]"
        />
        <h1 className="font-[600] my-[10px]">Location Unserviceable</h1>
        <p className="text-[14px] mx-[40%] text-center text-[gray]">
          We don’t have any services here till now. Try changing location.
        </p>
      </div>
    );
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
    <div className="bg-[#f1f1f18c]">
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
