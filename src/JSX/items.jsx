import Item from "./item";

const Items = ({ items, title }) => {
  return (
    <div>
      <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px]">{title}</h1>
      <div className="flex overflow-y-hidden items">
        {items.map((x) => {
          return <Item img={x.imageId} key={x.id} />;
        })}
      </div>
      <hr className="my-[32px] border-[1px]" />
    </div>
  );
};
export default Items;
