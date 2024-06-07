import { useState } from "react";

const Place = ({ text, link }) => (
  <a href={link} key={text}>
    {text !== "Best Restaurants in Thiruvananthapuram" && (
      <div className="py-[16px] border-[#02060C1A] border-[1.5px] m-[16px] mt-0 min-w-[277px] rounded-[15px]  text-center text-[14.4px]">
        {text}
      </div>
    )}
  </a>
);

const BestPlaces = ({ bestPlaces }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-wrap">
      {bestPlaces.map(({ text, link }, idx) => {
        if (idx === 11)
          return (
            <div
              className="py-[16px] border-[#02060C1A] border-[1.5px] m-[16px] mt-0 min-w-[277px] rounded-[15px]  text-center text-[14.4px] flex items-center justify-center cursor-pointer"
              onClick={(e) => (
                setShowMore(true), (e.target.style.display = "none")
              )}>
              Show More <i className="material-icons">keyboard_arrow_down</i>
            </div>
          );
        if (idx >= 12) return showMore && <Place text={text} link={link} />;
        return <Place text={text} link={link} />;
      })}
    </div>
  );
};
export default BestPlaces;
