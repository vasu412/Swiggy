const Box = (props) => {
  const {
    aggregatedDiscountInfoV3,
    areaName,
    avgRating,
    cloudinaryImageId,
    sla,
    name,
    cuisines,
  } = props.data;

  const { height, width, top } = props;

  let offer = "";
  if (aggregatedDiscountInfoV3 === undefined) {
    offer = "";
  } else {
    offer =
      aggregatedDiscountInfoV3.header +
      " " +
      aggregatedDiscountInfoV3.subHeader;
  }

  return (
    <a href="">
      <div className=" h-[283px] mr-[28px]" style={{ width: width }}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(27, 30, 36, 0) 70%, rgb(27, 30, 36) 92.21%),url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId})`,
            height: `${height}`,
            width: `${width}`,
          }}
          className="bg-cover bg-center rounded-[15px]">
          <h1
            className="text-[#fff] font-[900] text-[19px] ml-[10px] relative top-[150px]"
            style={{ top: `${top}` }}>
            {offer}
          </h1>
        </div>
        <div className="flex flex-col">
          <span className="text-[21px] overflow-hidden text-ellipsis whitespace-nowrap mr-[35px] font-medium">
            {name}
          </span>
          <span className="text-[15px] text-[600] font-[500] text-zinc-950">
            {avgRating + " . " + sla.slaString}
          </span>
          <span className="text-[15px] text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap mr-[30px]">
            {cuisines.map((x) => x).join(", ")}
          </span>
          <span className="text-[15px] text-gray-500">{areaName}</span>
        </div>
      </div>
    </a>
  );
};

export default Box;
