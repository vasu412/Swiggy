import React, { useContext } from "react";
import location from "../APIs/context";

const Addons = () => {
  const { customize, setCustomize } = useContext(location);
  console.log(customize.addonData);
  return (
    <div
      className={`h-[100vh] w-[100vw] fixed  flex items-center justify-center z-[9999] ${customize.display}`}
      style={{ backgroundColor: "rgba(2, 6, 12, 0.6)" }}>
      <div className="relative bg-[#f0f0f5] max-h-[80vh] w-[600px] rounded-[24px] shadow-sm">
        <div
          className="absolute bg-[#FFFFFF] w-[28px] h-[28px] top-[20px] right-[20px] shadow-sm rounded-[50%] text-center cursor-pointer"
          onClick={() =>
            setCustomize((prev) => ({
              display: "hidden",
              addonData: prev.addonData,
              name: prev.name,
              price: prev.price,
            }))
          }>
          <i className="material-icons text-[18px] mt-[5px]">close</i>
        </div>
        <div className="m-[16px] mt-[32px] border-0 border-b border-solid border-[#02060C26] static">
          <div
            className="flex items-center text-[13px]"
            style={{ color: "rgba(2, 6, 12, 0.6)" }}>
            <div>{customize.name}</div>
            <div className="mx-[8px]">&#8226;</div>
            <div>₹{customize.price}</div>
          </div>
          <div
            className="mt-[4px] mb-[12px] font-black text-[17px]"
            style={{ color: "rgba(2, 6, 12, 0.75)" }}>
            Customise as per your taste
          </div>
        </div>
        <div className="px-[16px] pb-[20px] max-h-[420px] overflow-scroll hide">
          <div className="mb-[16px]">
            {customize.addonData &&
              customize.addonData.map((x) => (
                <>
                  <div className="pt-[8px] pb-[16px] text-[15px] font-[600]">
                    <span>{x.groupName}</span>
                    <span className="ml-[8px] text-[#02060C99]">
                      (0/{x.maxAddons})
                    </span>
                  </div>
                  <div className="bg-[#FFFFFF] rounded-[16px] mb-[20px] px-[16px] pt-[20px] h-fit">
                    {x.choices.map((extra) => (
                      <div key={extra.id}>
                        <div className="flex pb-[20px] justify-between text-[14.7px] text-[#02060C99]">
                          <div className="flex items-center ">
                            <img
                              src={
                                extra.isVeg === 1
                                  ? "/assets/veg.png"
                                  : "/assets/nonVeg.png"
                              }
                              className="h-[20px] w-[20px] mr-[12px]"
                            />
                            <span>{extra.name}</span>
                          </div>
                          <div className="flex items-center">
                            {extra.price && (
                              <span className="mr-[15px]">
                                + ₹{extra.price / 100}
                              </span>
                            )}
                            <div className="h-[17px] w-[17px] border-[1.5px] border-solid rounded-[4px]"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className="p-[16px] rounded-t-[16px] rounded-r-[16px] rounded-l-[24px] rounded-b-[24px] bg-[#FFFFFF] static">
          <div className="pt-[8px] pb-[16px] mb-[16px] border-0 border-b border-solid border-[#02060C26] text-[#02060C99] text-[12.5px]">
            <div>Double Cheese Slice</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-black">
              <div className="text-[17px] tracking-normal">₹99.00</div>
              <div className="text-[#FF5200] text-[12px]">
                Hide Customized Item
              </div>
            </div>
            <div className="w-[312px] h-[44px] text-white bg-[#1BA672] rounded-[12px] font-[600] text-[14px] flex items-center justify-center">
              Add item to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addons;
