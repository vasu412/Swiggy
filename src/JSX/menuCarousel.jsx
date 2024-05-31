const MenuCarousel = ({ x }) => {
  return (
    <>
      <h1 className=" font-[600] text-[16px] mx-[15px] my-[24px]">
        {x?.card?.card?.title}
      </h1>
      <div className="flex overflow-scroll m-[16px] mb-[50px] hide">
        {x?.card?.card?.carousel.map((item) => {
          return (
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                item.creativeId
              }
              alt=""
              className="h-[295px] min-w-[288px] rounded-lg mr-[12px]"
            />
          );
        })}
      </div>
      <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
    </>
  );
};

export default MenuCarousel;
