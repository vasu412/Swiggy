const BestPlaces = ({ bestPlaces }) => {
  return (
    <div className="flex flex-wrap">
      {bestPlaces.map(({ text, link }) => (
        <a href={link} key={text}>
          {text !== "Best Restaurants in Thiruvananthapuram" && (
            <div className="py-[16px] border-[#02060C1A] border-[1.5px] m-[16px] mt-0 min-w-[277px] rounded-[15px]  text-center text-[14.4px]">
              {text}
            </div>
          )}
        </a>
      ))}
    </div>
  );
};
export default BestPlaces;
