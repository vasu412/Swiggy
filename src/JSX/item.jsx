import { Link } from "react-router-dom";

const Item = ({ img, link }) => {
  const id = link.substring(link.indexOf("=") + 1);
  const arr = id.split("&");
  return (
    <div className="p-[16px] ">
      <div>
        <Link key={arr[0]} to={`food/${id}`}>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
              img
            }
            alt=""
            className="min-w-[144px] h-[180px] mix-blend-multiply"
          />
        </Link>
      </div>
    </div>
  );
};

export default Item;
