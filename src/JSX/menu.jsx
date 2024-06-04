import { useContext, useEffect, useState } from "react";
import menuCard from "../APIs/menuCard";
import Shimmer from "./shimmer";
import location from "../APIs/context";
import MenuCardData from "./menuCardData";
import { useParams } from "react-router-dom";
import MenuCardData2 from "./menuCardData2";
import MenuCarousel from "./menuCarousel";

const Menu = () => {
  let { currLocation, coordinates } = useContext(location);

  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    async function cards() {
      const data = await menuCard(id, coordinates.lat, coordinates.lng);
      setMenuData(data);
      console.log(data);
    }
    cards();
  }, [id]);

  if (menuData === null) return <Shimmer />;
  if (
    menuData.statusMessage === "Oops!! Something Went Wrong"
    // cards.data.cards[0].card.card.title === "Location Unserviceable"
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

  console.log(menuData);
  const title = menuData?.data?.cards[0]?.card?.card?.text;
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    cuisines,
    feeDetails,
    sla,
    availabilityServiceabilityMessage,
    city,
  } = menuData?.data?.cards[2]?.card?.card?.info;
  const offers =
    menuData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const cards =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let offerLogo =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/";

  return (
    <div className="bg-[#f1f1f174] px-[320px] ">
      <div className="py-[20px]">
        <span className="text-[10px] font-nun text-slate-500">
          Home / {city} /
        </span>
        <span className="text-[10px] font-nun text-slate-700"> {title}</span>
      </div>

      <h1 className="font-[600] py-[20px] text-[23px] ml-[16px]">{title}</h1>
      <div className="lg w-full flex items-center justify-center ">
        <div className="bg-white w-[768px] h-[190px] border-[1px] border-gray-300 mx-[16px] mb-[16px] rounded-3xl">
          <div className="mt-[20px] ml-[16px] font-nun font-bold text-[15px] flex items-center">
            <img
              src="/assets/star.png"
              alt=""
              className="h-[18px] w-[18px] mr-[4px]"
            />
            <span className="">
              {avgRating} ({totalRatingsString})
            </span>
            <span>
              <span className="text-[gray] text-[8px] mx-[5px]">&#8226;</span>
              {costForTwoMessage}
            </span>
          </div>
          <div className="my-[8px] ml-[20px] text-[14px] font-nun font-bold underline text-[#F15700]">
            <span>{cuisines[0]},</span>
            <span> {cuisines[1]}</span>
          </div>
          <div className="py-[4px] pl-[20px] h-[48px] flex items-center">
            <div className="flex flex-col items-center ">
              <div className="h-[7px] w-[7px] rounded-full bg-[#C4C4C4]"></div>
              <div className="h-[23px] w-[1px] bg-[#C4C4C4]"></div>
              <div className="h-[7px] w-[7px] rounded-full bg-[#C4C4C4]"></div>
            </div>
            <div className="ml-[12px] font-bold font-nun text-[13.5px]">
              <div>
                <span className="mr-[10px]">Outlet </span>
                <span className="font-[300] text-[gray] ">{locality}</span>
              </div>
              <div className="mt-[10px]">
                <span>{sla.slaString}</span>
              </div>
            </div>
          </div>
          <hr className="my-[12px]" />
          <div className="ml-[16px] flex items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
              alt=""
              className="h-[20px] w-[20px]"
            />
            <span className="font-[300] text-[gray] text-[13px] ml-2">
              {feeDetails.message || availabilityServiceabilityMessage}
            </span>
          </div>
        </div>
      </div>

      <h1 className="mt-[24px] mb-[16px] ml-[16px] font-[600] text-[20px]">
        Deals for you
      </h1>

      <div className="h-[76px] flex overflow-y-hidden items-center hide">
        {offers.map(({ info }) => {
          return (
            <div className="p-[12px] min-w-[300px] h-[75px] border flex items-center rounded-[19px] mr-[16px]">
              <div>
                <img
                  src={
                    info.logoBottom
                      ? offerLogo + info.logoBottom
                      : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
                  }
                  alt=""
                  className="h-[48px] w-[48px] mr-[10px]"
                />
              </div>
              <div>
                <h1 className="font-[600]">{info.header}</h1>
                <h1 className="text-[#02060C73] text-[13px]">
                  {info.couponCode}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-[32px] pb-[16px] text-center flex items-center justify-center">
        <img src="/assets/vintage.png" alt="" className="h-[50px] w-[50px]" />
        <span className="mx-[4px] tracking-[4px] text-[#02060C73] text-sm">
          MENU
        </span>
        <img src="/assets/vintage.png" alt="" className="h-[50px] w-[50px]" />
      </div>

      <button className="text-[gray] text-center w-full h-[48px] bg-[#F0F0F5] rounded-xl relative mb-[50px]">
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
              <>
                {x?.card?.card?.categories ? (
                  <MenuCardData2 x={x} />
                ) : x?.card?.card?.carousel ? (
                  <MenuCarousel x={x} />
                ) : (
                  <>
                    <MenuCardData x={x} />
                    <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
                  </>
                )}
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Menu;
