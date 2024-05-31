import MenuItem from "./menuItem";

const MenuCardData = ({ x }) => {
  const { title, itemCards } = x.card.card;
  return (
    <>
      <div className="flex justify-between mx-[17px] my-[20px]">
        <h1 className=" font-[600] text-[16px]">
          {title} ({itemCards.length})
        </h1>
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <div className="mx-[17px]">
        <MenuItem item={itemCards} />
      </div>
    </>
  );
};

export default MenuCardData;
