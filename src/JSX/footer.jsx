const Footer = () => {
  return (
    <>
      <div
        className="mt-[34px] flex items-center justify-center h-[104px] "
        style={{
          backgroundColor: "rgb(240, 240, 245)",
        }}>
        <div className="my-[20px] mr-[96px]">
          <h1
            className="font-[600] text-[24px] w-[408px]"
            style={{ color: "rgba(2, 6, 12, 0.75)" }}>
            For better experience,download the Swiggy app now
          </h1>
        </div>
        <div className="flex">
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt=""
              className="h-[64px] w-[201px] rounded-md mx-[12px]"
            />
          </a>
          <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt=""
              className="h-[64px] w-[201px] rounded-md mx-[12px]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
