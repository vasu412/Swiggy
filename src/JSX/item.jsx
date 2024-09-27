import { Link } from "react-router-dom";

const Item = ({ img, link }) => {
  const id = link.substring(link.indexOf("=") + 1);
  const arr = id.split("&");

  return (
    <div className="p-[16px] relative">
      <Link key={arr[0]} to={`food/${id}`}>
        <div className="relative min-w-[144px] h-[180px]">
          {/* Image with blending effect */}
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
              img
            }
            alt=""
            className="min-w-[144px] h-[180px] object-cover"
          />

          {/* Blend overlay */}
          <div className="absolute inset-0 bg-#f1f1f18c] opacity-50 mix-blend-multiply"></div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
