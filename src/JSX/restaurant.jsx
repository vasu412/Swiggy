import { Link } from "react-router-dom";

const Restaurant = ({ data }) => {
  const {
    cuisines,
    name,
    avgRating,
    costForTwoMessage,
    sla,
    aggregatedDiscountInfoV3,
    cloudinaryImageId,
    id,
  } = data;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`;
  return (
    <Link key={id} to={"menu/" + id}>
      <div className="w-[400px] h-[156px] py-[20px] ml-[4px] mt-[20px] bg-[#fff]">
        <div className="h-[116px] w-[400px] px-[16px] pb-[8px] flex">
          <div className="relative ">
            <img
              src={imageUrl}
              alt=""
              className="w-[88px] h-[96px] rounded-lg"
            />
            {aggregatedDiscountInfoV3 && (
              <div
                className="w-[76px] h-[32px]  border-[0.5px] text-[#ed5e0e] bg-[#fff] flex flex-col items-center absolute left-[5px] bottom-[4px] rounded-[6px]"
                style={{ boxShadow: "0 0 8px rgba(40, 44, 63, .2)" }}>
                <p className="text-[12px] font-[600]">
                  {aggregatedDiscountInfoV3.header}
                </p>
                <p className="text-[10px] font-regular">
                  {" . " + aggregatedDiscountInfoV3.subHeader + " . "}
                </p>
              </div>
            )}
          </div>
          <div className="ml-[16px] flex flex-col  justify-center">
            <p className="text-[15px] font-bold font-nun">{name}</p>
            <div className="flex items-center text-[12px] text-[#686b78]">
              <span className="mt-[3px] mr-[5px]">
                <i className="material-icons text-[17px]">star</i>
              </span>
              <span>{avgRating}</span>
              <span className="text-[gray] text-[15px] mx-[5px]">&#8226;</span>
              <span>{sla.slaString}</span>
              <span className="text-[gray] text-[15px] mx-[5px]">&#8226;</span>
              <span>{costForTwoMessage.toLowerCase()}</span>
            </div>
            <p className="text-[#686b78b0] text-[12px]  overflow-hidden text-ellipsis whitespace-nowrap w-[260px]">
              {cuisines.map(String).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
