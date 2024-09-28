import React, { useContext } from "react";
import { addItem, updateItem } from "../APIs/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import location from "../APIs/context";

const MenuItem2 = ({ x, idx, restaurantInfo, item }) => {
  const { setCustomize, setIsVisible, isVisible } = useContext(location);
  const { info } = x?.card;
  const {
    description,
    imageId,
    isVeg,
    isBestseller,
    inStock,
    name,
    ratings,
    id,
    addons,
  } = info;
  const src =
    Number(ratings.aggregatedRating.rating) < 3
      ? "/assets/yellow.png"
      : Number(ratings.aggregatedRating.rating) < 4
      ? "/assets/lgreen.png"
      : "/assets/green.png";

  const color =
    Number(ratings.aggregatedRating.rating) < 3
      ? "#E6A408"
      : Number(ratings.aggregatedRating.rating) < 4
      ? "#1BA672"
      : "#116649";

  const items = useSelector((state) => state.cart.items);
  const [count, setCount] = useState(() => {
    if (items.length === 0) return 0;

    const item = items.find((x) => x.name === name);
    return item ? item.count : 0;
  });

  const dispatch = useDispatch();

  const addToCart = () => {
    const updatedCount = count + 1;
    if (items.length === 0 || items[0].title === restaurantInfo.title) {
      if (addons) {
        setCustomize({
          display: "block",
          addonData: addons,
          name: name,
          price: info.price / 100 || info.defaultPrice / 100,
          dispatch: {
            ...info,
            ...restaurantInfo,
            count: updatedCount,
          },
          count2: setCount,
        });
      } else {
        setCount(updatedCount);
        dispatch(addItem({ ...info, ...restaurantInfo, count: updatedCount }));
      }
    } else if (items[0].title !== restaurantInfo.title) {
      setIsVisible({
        visible: true,
        dispatch: {
          ...info,
          ...restaurantInfo,
          count: updatedCount,
        },
        addon: addons,
        count2: setCount,
        name: name,
      });
    }
  };

  useEffect(() => {
    dispatch(updateItem({ name, count }));
  }, [count]);

  return (
    <div key={id} id={id}>
      <div className="flex py-[4px] h-[202px]">
        <div className="w-[552px] h-[74px]">
          <img
            src={isVeg === 1 ? "/assets/veg.png" : "/assets/nonVeg.png"}
            alt="veg/nonveg"
            className="h-[20px] w-[20px]"
          />
          <h1 className="font-nun font-bold text-[18px]">{name}</h1>
          <h1 className="text-[16px] font-regular">
            ₹{info.price / 100 || info.defaultPrice / 100}
          </h1>
          <div className="flex items-center">
            {ratings.aggregatedRating.rating ? (
              <img src={src} alt="" className="h-[14px] w-[14px] mr-[4px]" />
            ) : (
              ""
            )}
            <p
              className="my-[12px] text-[12px] pt-[3px]"
              style={{ color: color }}>
              {ratings.aggregatedRating.rating
                ? ratings.aggregatedRating.rating +
                  " " +
                  "(" +
                  ratings.aggregatedRating.ratingCountV2 +
                  ")"
                : ""}
            </p>
          </div>
          <p className="text-[#02060C99] text-[14.5px] container">
            {description}
          </p>
        </div>
        {imageId && (
          <div className="relative">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                imageId
              }
              alt=""
              className="w-[156px] h-[144px] rounded-xl ml-[60px] mix-blend-multiply"
            />

            {count === 0 ? (
              <button
                className="w-[120px] h-[38px] absolute bg-white rounded-lg right-[15px] bottom-[33px] font-[600] text-[18px] border flex justify-around items-center"
                style={{ color: "rgb(27, 166, 114)" }}
                onClick={addToCart}>
                {" "}
                ADD
              </button>
            ) : (
              <button
                className="w-[120px] h-[38px] absolute bg-white rounded-lg right-[15px] bottom-[33px] font-[600] text-[18px] border flex justify-around items-center"
                style={{ color: "rgb(27, 166, 114)" }}>
                <i
                  className="material-icons text-[14px] font-black cursor-pointer"
                  onClick={() => setCount((prev) => prev - 1)}>
                  remove
                </i>
                <div>{count}</div>
                <i
                  className="material-icons text-[14px] font-black cursor-pointer"
                  onClick={() => setCount((prev) => prev + 1)}>
                  add
                </i>
              </button>
            )}

            {addons && (
              <p className="text-[12px] absolute bottom-[11px] right-[35px] text-[gray]">
                Customisable
              </p>
            )}
          </div>
        )}
      </div>
      {idx < item.length - 1 && <hr className="my-[20px] border-[#d3d3d3b8]" />}
    </div>
  );
};

export default MenuItem2;
