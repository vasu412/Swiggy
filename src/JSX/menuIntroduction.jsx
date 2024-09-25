import React from "react";

const MenuIntroduction = ({ props }) => {
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    areaName,
    cuisines,
    feeDetails,
    sla,
    menuData,
  } = props;
  const regex = /<b>(.*?)<\/b> \| (.*)/;
  let offerLogo =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/";

  const offers =
    menuData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <>
      <div className="lg w-full flex items-center justify-center ">
        <div className="bg-white w-[768px] pb-[15px] border-[1px] border-gray-300 mx-[16px] mb-[16px] rounded-3xl">
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
            <span>{cuisines[0]}</span>
            <span>{cuisines[1] ? ", " + cuisines[1] : ""}</span>
          </div>
          <div className="py-[4px] pl-[20px] h-[48px] flex items-center">
            <div className="flex flex-col items-center ">
              <div className="h-[7px] w-[7px] rounded-full bg-[#C4C4C4]"></div>
              <div className="h-[23px] w-[1px] bg-[#C4C4C4]"></div>
              <div className="h-[7px] w-[7px] rounded-full bg-[#C4C4C4]"></div>
            </div>
            <div className="ml-[12px]  font-bold font-nun text-[13.5px]">
              <div>
                <span className="mr-[10px]">Outlet </span>
                <span className="font-[300] text-[gray] ">
                  {areaName || locality}
                </span>
              </div>
              <div className="mt-[10px]">
                <span>{sla.slaString}</span>
              </div>
            </div>
          </div>
          {feeDetails && (
            <>
              <hr className="my-[12px]" />
              <div className="ml-[16px] flex items-center">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                  alt=""
                  className="h-[20px] w-[20px]"
                />
                <span className="font-[300] text-[gray] text-[13px] ml-2">
                  {feeDetails.message.match(regex)[1] +
                    " | " +
                    feeDetails.message.match(regex)[2]}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <h1 className="mt-[24px] mb-[16px] ml-[16px] font-[600] text-[20px]">
        Deals for you
      </h1>

      <div className="h-[76px] w-full flex overflow-y-hidden items-center hide ">
        {offers.map(({ info }) => {
          const idx = info.offerIds[0];
          return (
            <div
              className="p-[12px] !min-w-[300px] h-[75px] border border-solid border-gray-300 flex items-center rounded-[19px] mr-[16px]"
              key={idx}>
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
    </>
  );
};

export default MenuIntroduction;
