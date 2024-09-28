import React, { useState } from "react";

const AddonItems = ({
  extra,
  setItemCount,
  idx,
  setShowCustomizedItems,
  arr,
  groupName,
}) => {
  const [isCheck, setIscheck] = useState(false);
  const handleCheck = () => {
    if (!isCheck) {
      setItemCount((prev) => {
        const newItemCount = [...prev];
        newItemCount[idx] += 1;
        return newItemCount;
      });
      setShowCustomizedItems((prev) => {
        const arr = [...prev.data, extra.name];
        const price = [...prev.totalPrice, extra.price ? extra.price / 100 : 0];
        return {
          display: prev.display,
          data: arr,
          totalPrice: price,
        };
      });
      arr((prev) => {
        const newArr = prev.filter((x) => x != groupName);
        return newArr;
      });
    } else {
      setItemCount((prev) => {
        const newItemCount = [...prev];
        newItemCount[idx] -= 1;
        return newItemCount;
      });

      setShowCustomizedItems((prev) => {
        const arr = prev.data.filter((x) => x !== extra.name);
        const price = prev.totalPrice.filter(
          (x) => x !== (extra.price ? extra.price / 100 : 0)
        );
        return {
          display: prev.display,
          data: arr,
          totalPrice: price,
        };
      });

      arr((prev) => [...prev, groupName]);
    }
    setIscheck(!isCheck);
  };
  return (
    <div key={extra.id}>
      <div className="flex pb-[20px] justify-between text-[14.7px] text-[#02060C99]">
        <div className="flex items-center ">
          <img
            src={extra.isVeg === 1 ? "/assets/veg.png" : "/assets/nonVeg.png"}
            className="h-[20px] w-[20px] mr-[12px]"
          />
          <span>{extra.name}</span>
        </div>
        <div className="flex items-center">
          {extra.price && (
            <span className="mr-[15px]">+ ₹{extra.price / 100}</span>
          )}
          <div
            className={`h-[17px] w-[17px] ${
              !isCheck
                ? "border-[1.5px] border-solid"
                : "bg-[#FF5200] text-white"
            } rounded-[4px] text-center cursor-pointer select-none`}
            onClick={handleCheck}>
            {isCheck && (
              <i className="material-icons text-[15px] font-black">check</i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonItems;
