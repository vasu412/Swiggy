import Box from "./resBox";
import { Link } from "react-router-dom";
import ResFilter from "./resFilter";

const ResList = ({ resTitle, res }) => {
  return (
    <div>
      <h1 className="font-[600] text-[21px] pt-[15px] pl-[15px] mb-[20px]">
        {resTitle}
      </h1>
      <ResFilter />
      <div className="flex overflow-y-hidden ml-[16px] flex-wrap gap-y-[8px] ">
        {res.map((x) => {
          return (
            <Link key={x.info.id} to={"menu/" + x.info.id}>
              <Box
                data={x.info}
                key={x.info.id}
                height={"159px"}
                width={"238px"}
                top={"130px"}
              />
            </Link>
          );
        })}
      </div>
      <hr className="my-[32px] border-[1px]" />
    </div>
  );
};

export default ResList;
