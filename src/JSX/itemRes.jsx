import { Link, useParams } from "react-router-dom";
import itemRes from "../APIs/itemRes";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import Box from "./resBox";

const ItemRes = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function items() {
      const data = await itemRes(id);
      setData(data);
    }
    items();
  }, [id]);

  if (data === null || data.statusMessage === "") return <Shimmer />;

  console.log(data);
  const { title, description } = data?.data?.cards[0]?.card?.card;
  const text =
    data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.text;
  return (
    <div className="px-[90px] bg-[#f1f1f174] min-h-[88vh]">
      <div className="pt-[60px] pl-[18px] pb-[8px]">
        <h1 className="font-sharif font-[600] text-[38px]">{title}</h1>
        <p className="mt-[8px] text-[#02060C99] text-[16px]">{description}</p>
      </div>
      <div className="mx-[17px] my-[20px]">
        <h2 className="font-[600] text-[22px]">Restaurants to explore</h2>
      </div>
      <div className="flex mx-[17px] mt-[10px] flex-wrap gap-y-[28px] gap-x-[5px]">
        {data?.data?.cards.map((item, index) => {
          const idx = item?.card?.card?.info?.id;
          if (index > 2)
            return (
              <Link key={idx} to={"menu/" + idx}>
                <Box
                  data={item?.card?.card?.info}
                  height={"182px"}
                  width={"273px"}
                  top={"150px"}
                />
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default ItemRes;
