import MenuItem2 from "./menuItem2";

const MenuItem = ({ item, restaurantInfo }) => {
  return (
    <>
      <hr className="my-[20px] border-[#d3d3d3b8] w-[108px]" />
      {item.map((x, idx) => (
        <MenuItem2
          x={x}
          idx={idx}
          restaurantInfo={restaurantInfo}
          item={item}
          key={x?.card?.info?.id}
          id={x?.card?.info?.id}
        />
      ))}
    </>
  );
};

export default MenuItem;
