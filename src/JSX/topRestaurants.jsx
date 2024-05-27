import Box from "./resBox";

const TopRestaurants = ({ topRes, topResTitle }) => (
  <div>
    <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px] mb-[15px]">
      {topResTitle}
    </h1>
    <div className="flex overflow-y-hidden items pb-[20px] items-start">
      {topRes.map((x) => {
        return (
          <Box
            data={x.info}
            key={x.info.id}
            height={"182px"}
            width={"273px"}
            top={"150px"}
          />
        );
      })}
    </div>
    <hr className="my-[32px] border-[1px]" />
  </div>
);

export default TopRestaurants;
