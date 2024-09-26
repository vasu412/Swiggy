import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartHeader from "./cartHeader";
import CartLogin from "./cartLogin";
import Unservice from "./unservice";
import { decreaseCount, increaseCount, updateItem } from "../APIs/slice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [nod, setNod] = useState(false);
  let total = 0;
  console.log(items);
  if (items.length === 0) return <Unservice />;
  const { offers, areaName, title, distance, deliveryFee, cloudinaryImageId } =
    items[0];
  return (
    <>
      <CartHeader />
      <div className="bg-[#e9ecee] h-fit pb-[150px]">
        <div className="pt-[30px]  flex mx-auto max-w-[1200px]">
          <CartLogin />
          <div>
            <div className="w-[366px] bg-white">
              <div className="px-[30px] py-[20px] w-[366px] flex cursor-pointer">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                  className="h-[50px] w-[50px]"
                />
                <div className="flex flex-col justify-between ml-[14px]">
                  <div className="text-[15px] text-[#282c3f] overflow-hidden text-ellipsis whitespace-nowrap ">
                    {title}
                  </div>
                  <div className="text-[#686b78] text-[11px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {areaName}
                  </div>
                  <div className="w-[40px] h-[2px] bg-[#282c3f] mt-[9px]"></div>
                </div>
              </div>
              <div
                style={{
                  maxHeight: "calc(100vh - 270px)",
                  overflow: "scroll",
                }}>
                <div className="w-full px-[30px] ">
                  {items.map((dish) => {
                    {
                      total +=
                        (dish.price / 100 || dish.defaultPrice / 100) *
                        dish.count;
                    }
                    return (
                      <div
                        className="py-[10px] w-full flex justify-between items-center relative"
                        key={dish.id}>
                        <div className="flex ">
                          <img
                            src={
                              dish.isVeg === 1
                                ? "/assets/veg.png"
                                : "/assets/nonVeg.png"
                            }
                            className="h-[16px] w-[16px] mt-[3px]"
                          />
                          <div className="ml-[10px] mr-[14px]">
                            <h1 className="text-[12px]">{dish.name}</h1>
                            {dish.addons && (
                              <h1 className="text-[10px] text-[#686b78] cursor-pointer">
                                Customize{" "}
                                <i className="material-icons text-[15px] absolute text-[#ff5200]">
                                  chevron_right
                                </i>
                              </h1>
                            )}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="border border-solid border-[#d4d5d9] text-[#60b246]  flex justify-around w-[68px] h-[28px] text-[13px] items-center font-bold">
                            <i
                              className="material-icons text-[12px] font-black cursor-pointer"
                              onClick={() =>
                                dispatch(decreaseCount(dish.name))
                              }>
                              remove
                            </i>
                            <div>{dish.count}</div>
                            <i
                              className="material-icons text-[12px] font-black cursor-pointer"
                              onClick={() =>
                                dispatch(increaseCount(dish.name))
                              }>
                              add
                            </i>
                          </div>
                          <div className="w-[60px] h-[28px] flex flex-col justify-start items-end text-[#535665]">
                            <h1 className="text-[10px] line-through">
                              ₹
                              {Math.floor(
                                (dish.price || dish.defaultPrice) / 100
                              ) * dish.count}
                            </h1>
                            <h1 className="text-[12px]">
                              ₹
                              {Math.floor(
                                (dish.price || dish.defaultPrice) / 100
                              ) *
                                dish.count -
                                15}
                            </h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="mt-[15px] h-[51px] w-[306px] p-[16px] pl-[40px] text-[#686b78] bg-[#f9f9f9]  relative">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5yr86ayeTk9oU_0LjSS-JK1HM1JAdxQupHx29xKNmNOQceb24JBJSaCoZmpE9fb3imA&usqp=CAU"
                      className="mix-blend-multiply w-[20px] h-[20px] absolute bottom-4 left-4"
                    />
                    <textarea
                      maxLength={140}
                      placeholder="Any suggestions? We will pass it on..."
                      className="bg-[#f9f9f9] resize-none w-full h-fit outline-none text-[12px] text-[#3d4152]"></textarea>
                  </div>

                  <div className="mt-[15px] border border-solid border-[#a9abb2] px-[15px] py-[5px] w-full flex items-start hover:shadow-md cursor-pointer">
                    <div
                      className={`w-[16px] h-[16px]  rounded-sm border-[#7e808c] mt-[4px] mr-[15px] ${
                        nod
                          ? "bg-[#60b246] "
                          : "bg-transparent border border-solid"
                      }`}
                      onClick={() => setNod(!nod)}>
                      {nod && (
                        <i className="material-icons absolute text-white text-[15px] font-black">
                          check
                        </i>
                      )}
                    </div>
                    <div className="w-[243px]">
                      <div className="text-[#3e4152] text-[13px] font-[600]">
                        Opt in for No-contact Delivery
                      </div>
                      <div className="text-[#282c3f] opacity-[0.6] leading-4 text-[12.2px]">
                        {!nod
                          ? "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"
                          : "Our delivery partner will call to confirm. Please ensure that your address has all the required details."}
                      </div>
                    </div>
                  </div>

                  <div className="mt-[17px] w-full pb-[21px] border-0 border-b-2 border-solid border-[#282c3f]">
                    <div className="mb-[10px] text-[12.7px] tracking-normal">
                      Bill Details
                    </div>
                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8]">
                      <div>Item Total</div>
                      <div>₹{total}</div>
                    </div>
                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8] mt-[10px]">
                      <div>Delivery Fee | {distance}</div>
                      <div>₹{deliveryFee / 100}</div>
                    </div>
                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8] mt-[10px]">
                      <div>Extra discount for you</div>
                      <div>-₹15</div>
                    </div>

                    <hr className="w-full mt-[17px] mb-[15px]" />

                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8]">
                      <div>Delivery Tip</div>
                      <div className="text-[#ff5200]">Add Tip</div>
                    </div>
                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8] mt-[10px]">
                      <div>Platform fee</div>
                      <div>₹6</div>
                    </div>
                    <div className="flex justify-between text-[11.7px] text-[#686b78] font-[300] opacity-[0.8] mt-[10px]">
                      <div>GST and Restaurant Charges</div>
                      <div>₹51.43</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full h-[60px] px-[30px] text-[#282c3f] text-center justify-between items-center font-[600] text-[14px]">
                <div>TO PAY</div>
                <div>
                  ₹
                  {items.reduce(
                    (acc, curr) =>
                      acc +
                      Math.floor((curr.price || curr.defaultPrice) / 100) *
                        curr.count,
                    0
                  ) +
                    (-15 + 6 + 51) +
                    deliveryFee / 100}
                </div>
              </div>
            </div>

            <div className="text-[#60b246] mt-[20px] text-[12px] px-[30px] flex items-center bg-[#dbe5dc] h-[40px] border border-solid border-[#60b246] ">
              Savings of ₹15
            </div>

            <div className="px-[30px] mt-[16px] h-[217px] flex items-center bg-white">
              <div className="p-[16px] pb-0 border border-solid border-[#e9e9eb]">
                <div className="font-[600] text-[14px] rounded-sm">
                  Review your order and address details to avoid cancellations
                </div>
                <div className="pt-[16px] text-[12px]">
                  Note: Please ensure your address and order details are
                  correct. This order, if cancelled, is non-refundable.
                </div>
                <a href="https://www.swiggy.com/refund-policy" target="blank">
                  <div className="mt-[16px] mb-[20px] underline  text-[13px] text-[#ff5200]">
                    Read policy
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
