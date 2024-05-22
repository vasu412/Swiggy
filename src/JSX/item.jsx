const Item = ({ img }) => {
  return (
    <div className="p-[16px] ">
      <div>
        <a href="">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
              img
            }
            alt=""
            className="min-w-[144px] h-[180px] mix-blend-multiply"
          />
        </a>
      </div>
    </div>
  );
};

export default Item;
