import { useContext, useEffect, useState } from "react";
import menuCard from "../APIs/menuCard";
import location from "../APIs/context";
import MenuCardData from "./menuCardData";
import { Link, useParams } from "react-router-dom";
import MenuCardData2 from "./menuCardData2";
import MenuCarousel from "./menuCarousel";
import MenuShimmer from "./menuShimmer";
import MenuIntroduction from "./menuIntroduction";
import Unservice from "./unservice";
import { useSelector } from "react-redux";
import Popup from "./popup";
import MenuSearch from "./menuSearch";

const Menu = () => {
  let { coordinates } = useContext(location);

  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [showIndex, setShowIndex] = useState(2);
  const [openSearch, setOpenSearch] = useState(false);

  const offers =
    menuData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    async function cards() {
      const data = await menuCard(id, coordinates.lat, coordinates.lng);
      console.log(data);
      setMenuData(data);
    }
    cards();
  }, [id, coordinates]);

  if (menuData === null) return <MenuShimmer />;
  if (menuData.statusMessage === "Oops!! Something Went Wrong") {
    return <Unservice />;
  }

  const title = menuData?.data?.cards[0]?.card?.card?.text;
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    areaName,
    cuisines,
    feeDetails,
    sla,
    city,
    cloudinaryImageId,
  } = menuData?.data?.cards[2]?.card?.card?.info;
  const deliveryFee = feeDetails?.totalFee;

  const cards =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const regex = /<b>(.*?)<\/b> \| (.*)/;
  const distance = feeDetails?.message.match(regex)[1];

  if (openSearch)
    return (
      <MenuSearch
        menuData={menuData}
        restaurantInfo={{
          offers,
          areaName,
          title,
          distance,
          deliveryFee,
          cloudinaryImageId,
          id,
        }}
        setOpenSearch={setOpenSearch}
      />
    );

  return (
    <div className={`bg-[#f1f1f174] px-[320px] `}>
      <div className="py-[20px]">
        <span className="text-[10px] font-nun text-slate-500">
          Home / {city} /
        </span>
        <span className="text-[10px] font-nun text-slate-700">{title}</span>
      </div>

      <h1 className="font-[600] py-[20px] text-[23px] ml-[16px]">
        {" "}
        {" " + title}
      </h1>

      <MenuIntroduction
        props={{
          avgRating,
          totalRatingsString,
          costForTwoMessage,
          locality,
          areaName,
          cuisines,
          feeDetails,
          sla,
          menuData,
        }}
      />

      <div className="pt-[32px] pb-[16px] text-center flex items-center justify-center">
        <img src="/assets/vintage.png" alt="" className="h-[50px] w-[50px]" />
        <span className="mx-[4px] tracking-[4px] text-[#02060C73] text-sm">
          MENU
        </span>
        <img src="/assets/vintage.png" alt="" className="h-[50px] w-[50px]" />
      </div>

      <button
        className="text-[gray] text-center w-full h-[48px] bg-[#F0F0F5] rounded-xl relative mb-[50px]"
        onClick={() => setOpenSearch(true)}>
        Search for dishes
        <img
          src="/assets/search.png"
          alt=""
          className="h-[16px] w-[16px] absolute right-[10px] top-[15px]"
        />
      </button>
      <hr className="my-[24px] mx-[16px]" />

      <div>
        {cards.map((x, idx) => {
          if (idx === 0 || idx > cards.length - 3) return "";
          else {
            return (
              <div key={idx}>
                {x?.card?.card?.categories ? (
                  <MenuCardData2
                    x={x}
                    showItems={showIndex === idx ? true : false}
                    restaurantInfo={{
                      offers,
                      areaName,
                      title,
                      distance,
                      deliveryFee,
                      cloudinaryImageId,
                      id,
                    }}
                  />
                ) : x?.card?.card?.carousel ? (
                  <MenuCarousel
                    x={x}
                    restaurantInfo={{
                      offers,
                      areaName,
                      title,
                      distance,
                      deliveryFee,
                      cloudinaryImageId,
                      id,
                    }}
                  />
                ) : (
                  <>
                    <MenuCardData
                      x={x}
                      showItems={showIndex === idx ? true : false}
                      setShowIndex={() => setShowIndex(idx)}
                      restaurantInfo={{
                        areaName,
                        title,
                        distance,
                        deliveryFee,
                        offers,
                        cloudinaryImageId,
                        id,
                      }}
                      idx={idx}
                    />
                    <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
                  </>
                )}
              </div>
            );
          }
        })}
      </div>
      {items.length > 0 && (
        <Link to={"cart/"}>
          <div className="sticky bottom-0 w-full bg-[#60b246] flex h-[48px] text-white font-black justify-between items-center px-[20px] cursor-pointer">
            <div className="text-[13px]">
              {items.length} item{items.length > 1 ? "s" : ""} added
            </div>
            <div>
              <p className="flex items-center justify-between text-[14px]">
                <i className="material-symbols-outlined">shopping_cart</i>
                VIEW CART
              </p>
            </div>
          </div>
        </Link>
      )}
      <Popup />
    </div>
  );
};

export default Menu;
