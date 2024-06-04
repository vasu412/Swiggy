import BestPlaces from "./bestPlaces";
const AllRestaurants = ({ cards }) => {
  const bestPlaces = cards?.data?.cards[6]?.card?.card?.brands;
  const bestCuisines = cards?.data?.cards[7]?.card?.card?.brands;
  const nearPlaces = cards?.data?.cards[8]?.card?.card?.brands;
  return (
    <>
      <div className="px-[94px] mt-[64px]">
        <h1 className="ml-[17px] mb-[16px] font-[600] text-[24px]">
          {cards?.data?.cards[6]?.card?.card?.title}
        </h1>
        <BestPlaces bestPlaces={bestPlaces} />
      </div>
      <div className="px-[94px] mt-[64px]">
        <h1 className="ml-[17px] mb-[16px] font-[600] text-[23px]">
          {cards?.data?.cards[7]?.card?.card?.title}
        </h1>
        <BestPlaces bestPlaces={bestCuisines} />
      </div>
      <div className="px-[94px] mt-[64px]">
        <h1 className="ml-[17px] mb-[16px] font-[600] text-[23px]">
          {cards?.data?.cards[8]?.card?.card?.title}
        </h1>
        <div className="flex flex-wrap gap-[16px]">
          {nearPlaces.map(({ text, link }) => (
            <a href={link}>
              <div className="py-[16px] border-[#02060C1A] border-[1.5px] m-[16px]  mt-0 min-w-[575px] rounded-[15px]  text-center text-[14.4px]">
                {text}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllRestaurants;
