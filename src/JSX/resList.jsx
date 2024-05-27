import Box from "./resBox";
const ResList = ({ resTitle, res }) => (
  <div>
    <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px] mb-[25px]">
      {resTitle}
    </h1>
    <div className="flex overflow-y-hidden ml-[16px] flex-wrap gap-y-[8px] ">
      {res.map((x) => {
        return (
          <Box
            data={x.info}
            key={x.info.id}
            height={"159px"}
            width={"238px"}
            top={"130px"}
          />
        );
      })}
    </div>
    <hr className="my-[32px] border-[1px]" />
  </div>
);

export default ResList;
