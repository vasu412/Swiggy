import React from "react";

const CartLogin = () => {
  return (
    <div className="mr-[30px] w-[804px]">
      <div>
        <div className="bg-white ml-[25px] mb-[20px] px-[40px] pb-[39px] pt-[35px] w-[780px]">
          <div className="text-[#282c3f]">Account</div>
          <div>
            <div className="text-[#7e808c] text-[14px]">
              To place your order now, log in to your existing account or sign
              up.
            </div>
            <div className="flex mt-[36px] ">
              <div className="mr-[20px] border border-solid border-[#60b246] px-[33px] pt-[8px] text-[#60b246]  w-[172px] h-[50px] text-center cursor-pointer">
                <div className="text-[11px]">Have an account?</div>
                <div className="font-bold text-[13px]">LOG IN</div>
              </div>
              <div className="mr-[20px] border border-solid px-[33px] pt-[8px]  w-[172px] h-[50px] text-center bg-[#60b246] text-white cursor-pointer">
                <div className="text-[11px] tracking-wide">New to Swiggy?</div>
                <div className="font-bold text-[13px]">SIGN UP</div>
              </div>
            </div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
              className="w-[147px] h-[140px] absolute right-[560px] top-[150px]"
            />
          </div>
        </div>
        <div className="bg-white ml-[25px] mb-[20px] px-[40px] pb-[39px] pt-[35px] w-[780px]">
          <div className="text-[#93959f]">Delivery address</div>
        </div>
        <div className="bg-white ml-[25px] mb-[20px] px-[40px] pb-[39px] pt-[35px] w-[780px]">
          <div className="text-[#93959f]">Payment</div>
        </div>
      </div>
    </div>
  );
};

export default CartLogin;
