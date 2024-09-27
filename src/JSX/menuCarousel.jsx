const MenuCarousel = ({ x }) => {
  return (
    <>
      <h1 className="font-[600] text-[16px] mx-[15px] my-[24px]">
        {x?.card?.card?.title}
      </h1>
      <div className="relative overflow-hidden">
        {/* The outer container */}
        <div className="flex w-max animate-scroll gap-[12px]">
          {/* Original set of items */}
          {x?.card?.card?.carousel.map((item) => (
            <div key={item.bannerId} className="flex-shrink-0 ">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                  item.creativeId
                }
                alt=""
                className="h-[295px] min-w-[288px] rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate the same items to create a seamless scroll */}
          {x?.card?.card?.carousel.map((item) => (
            <div key={item.bannerId + "-duplicate"} className="flex-shrink-0">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                  item.creativeId
                }
                alt=""
                className="h-[295px] min-w-[288px] rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-[24px] mx-[16px] border-[8px] border-[#f0f0f0]" />
    </>
  );
};

export default MenuCarousel;
