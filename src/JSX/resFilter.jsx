const ResFilter = () => {
  return (
    <div className="mb-[35px] flex items-center ml-[15px]">
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26] flex items-center">
        Filter
        <i className="material-symbols-outlined text-[15px] ml-[5px]">
          page_info
        </i>
        {/* <i className="material-icons">page_info</i> */}
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26] flex items-center ">
        Sort By
        <i className="material-symbols-outlined text-[15px] ml-[5px]">
          keyboard_arrow_down
        </i>
        {/* <i className="material-icons">page_info</i> */}
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Fast Delivery
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        New on Swiggy
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Ratings 4.0+
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Pure Veg
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Offers
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Rs. 300-Rs. 600
      </div>
      <div className="mr-[8px] cursor-pointer text-[13px] px-[12px] py-[9px] shadow-md border-solid rounded-3xl leading-[1.2] border-[1px] border-[#02060c26]">
        Less Than Rs. 300
      </div>
    </div>
  );
};

export default ResFilter;
