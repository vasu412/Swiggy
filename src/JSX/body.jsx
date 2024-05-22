import { useEffect, useState } from "react";
import Item from "./item";
import data from "../APIs/data";
import React from "react";
import Box from "./resBox";

const Body = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [topRes, setTopRes] = useState([]);
  const [topResTitle, setTopResTitle] = useState("");

  useEffect(() => {
    (async () => {
      const cards = await data();
      setItems(
        cards?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setTitle(cards?.data?.cards[0]?.card?.card?.header?.title);
      setTopRes(
        cards?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setTopResTitle(cards?.data?.cards[1]?.card?.card?.header?.title);
    })();
  }, []);

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }
  return (
    <div className="bg-stone-100 px-[180px]">
      <div>
        <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px]">{title}</h1>
        <div className="flex overflow-scroll">
          {items.map((x) => {
            return <Item img={x.imageId} key={x.id} />;
          })}
        </div>
        <hr className="my-[32px] border-[1px]" />
      </div>
      <div>
        <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px] mb-[15px]">
          {topResTitle}
        </h1>
        <div className="flex overflow-y-hidden ml-[16px]">
          {topRes.map((x) => {
            return <Box data={x.info} key={x.info.id} />;
          })}
        </div>
        <hr className="my-[32px] border-[1px]" />
      </div>
    </div>
  );
};

export default Body;
