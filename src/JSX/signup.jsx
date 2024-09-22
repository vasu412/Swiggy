import React from "react";
import { useState } from "react";

const Signup = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <>
      <div className="input-container border border-solid border-[#d4d5d9] w-[360px] h-[70px] mt-[40px] px-[20px] pt-[22px] z-10">
        <label
          htmlFor="input"
          className={`text-[#93959f] relative transition-all duration-300 z-40 ${
            login ? "text-[11px] top-[-15px]" : "text-[15px] top-0"
          } `}>
          Phone number
        </label>
        <input
          type="text"
          id="input"
          className="w-full outline-none h-[40px] z-0 relative top-[-20px]"
          autoFocus
          onFocus={() => setLogin(true)}
          onBlur={() => setLogin(false)}
        />
      </div>
      <div className="input-container border border-solid border-[#d4d5d9] w-[360px] h-[70px] px-[20px] pt-[22px] border-t-0 z-10">
        <label
          htmlFor="input"
          className={`text-[#93959f] relative transition-all duration-300 z-40 ${
            name ? "text-[11px] top-[-15px]" : "text-[15px] top-0"
          } `}>
          Name
        </label>
        <input
          type="text"
          id="input"
          className="w-full outline-none h-[40px] z-0 relative top-[-20px]"
          onFocus={() => setName(true)}
          onBlur={() => setName(false)}
        />
      </div>
      <div className="input-container border border-solid border-[#d4d5d9] w-[360px] h-[70px] px-[20px] pt-[22px] border-t-0 z-10">
        <label
          htmlFor="input"
          className={`text-[#93959f] relative transition-all duration-300 z-40 ${
            email ? "text-[11px] top-[-15px]" : "text-[15px] top-0"
          } `}>
          Email
        </label>
        <input
          type="text"
          id="input"
          className="w-full outline-none h-[40px] z-0 relative top-[-20px]"
          onFocus={() => setEmail(true)}
          onBlur={() => setEmail(false)}
        />
      </div>
      <button className="mt-[30px] text-[#5d8ed5] cursor-pointer text-[13.6px]">
        Have a referral code?
      </button>
    </>
  );
};

export default Signup;
