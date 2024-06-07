import { Link } from "react-router-dom";

const Dish = ({ data }) => {
  const { info, restaurant } = data;
  const { sla, id, name, avgRating } = restaurant.info;
  return (
    <div className="mt-[20px] w-[410px] h-[276px] px-[16px] pt-[22px] pb-[8px] rounded-[19px] bg-[white]">
      <div>
        <Link key={id} to={"menu/" + id}>
          <div className="flex justify-between">
            <div className="text-[#686b78] ">
              <p className="text-[13px] font-[600]">By {name}</p>
              <div className="flex items-center text-[12px]">
                <p className="mt-[3px] mr-[5px]">
                  <i className="material-icons text-[17px]">star</i>
                </p>
                <p>{avgRating}</p>
                <p className="mx-[5px]">.</p>
                <p>{sla.slaString}</p>
              </div>
            </div>
            <div>
              <i className="material-icons">arrow_forward</i>
            </div>
          </div>
        </Link>
        <hr className="mt-[16px] mb-[20px] h-0 border border-dashed" />
        <div className="flex justify-between">
          <div className="w-[162px]">
            <img src="" alt="" />
            <h1 className="font-[600] text-[17px]">{info.name}</h1>
            <p className="text-[15px] font-regular">₹{info.price / 100}</p>
            <button className="border mt-[12px] py-[4px] px-[8px] text-[12px] text-[#686b78] rounded-[15px] flex items-center">
              More Details
              <i className="material-icons text-[17px] ">chevron_right</i>
            </button>
          </div>
          <div className="ml-[60px] h-[164px] w-[156px] relative">
            {info.imageId && (
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  info.imageId
                }
                alt=""
                className="h-[144px] w-[100%] rounded-md"
              />
            )}
            {info.imageId ? (
              <button
                className="w-[120px] h-[38px] absolute bg-white rounded-lg right-[15px] bottom-[3px] font-[600] text-[18px] border "
                style={{ color: "rgb(27, 166, 114)" }}>
                ADD
              </button>
            ) : (
              <button
                className="w-[120px] h-[38px] absolute bg-white rounded-lg right-[15px] bottom-[80px] font-[600] text-[18px] border "
                style={{ color: "rgb(27, 166, 114)" }}>
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
