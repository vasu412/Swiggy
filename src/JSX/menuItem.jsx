const MenuItem = ({ item }) => {
  let src = "";
  let color = "";
  return (
    <>
      <hr className="my-[20px] border-[#d3d3d3b8] w-[108px]" />

      {item.map((x, idx) => {
        const { info } = x.card;
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
        src =
          Number(ratings.aggregatedRating.rating) < 3
            ? "/assets/yellow.png"
            : Number(ratings.aggregatedRating.rating) < 4
            ? "/assets/lgreen.png"
            : "/assets/green.png";

        color =
          Number(ratings.aggregatedRating.rating) < 3
            ? "#E6A408"
            : Number(ratings.aggregatedRating.rating) < 4
            ? "#1BA672"
            : "#116649";
        return (
          <div key={id}>
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
                    <img
                      src={src}
                      alt=""
                      className="h-[14px] w-[14px] mr-[4px]"
                    />
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
                    className="w-[156px] h-[144px] rounded-xl ml-[60px]"
                  />
                  <button
                    className="w-[120px] h-[38px] absolute bg-white rounded-lg right-[15px] bottom-[33px] font-[600] text-[18px] border"
                    style={{ color: "rgb(27, 166, 114)" }}>
                    ADD
                  </button>
                  {addons && (
                    <p className="text-[12px] absolute bottom-[11px] right-[35px] text-[gray]">
                      Customisable
                    </p>
                  )}
                </div>
              )}
            </div>
            {/* <div className=""> */}
            {/* </div> */}
            {idx < item.length - 1 && (
              <hr className="my-[20px] border-[#d3d3d3b8]" />
            )}
          </div>
        );
      })}
    </>
  );
};

export default MenuItem;
