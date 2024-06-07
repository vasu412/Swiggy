import { Link } from "react-router-dom";

const Suggestions = ({ searchTerm, handleSubmit }) => {
  {
    return searchTerm.map((x, idx) => {
      const { subCategory, cloudinaryId, text, cta } = x;
      return (
        <Link to={"search/" + text}>
          <div
            className="py-[14px] px-[16px] flex w-[844px] h-[92px] hover:bg-[#eaf1fad9] cursor-pointer"
            key={idx}
            onClick={() => handleSubmit(text, cta.link)}>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" +
                cloudinaryId
              }
              alt=""
              className="h-[64px] w-[64px]"
            />
            <div className="ml-[15px] flex flex-col justify-center">
              <p className="text-[14px] text-[#02060cda]">{text}</p>
              <p className="text-[#686B78] text-[13px]">{subCategory}</p>
            </div>
          </div>
        </Link>
      );
    });
  }
};

export default Suggestions;
