import React, { useContext, useState } from "react";
import Signup from "./signup";
import location from "../APIs/context";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { app } from "../APIs/firebase";

const LogIn = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [animate, setAnimate] = useState("slideInLeft2 0.4s ease-in-out");
  const [num, setNum] = useState(null);
  const { setDis2, dis2 } = useContext(location);

  // const auth = getAuth(app);
  // auth.languageCode = "it";
  // const phoneNumber = "9056316104";
  // const appVerifier = window.recaptchaVerifier;

  // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //   .then((confirmationResult) => {
  //     // SMS sent. Prompt user to type the code from the message, then sign the
  //     // user in with confirmationResult.confirm(code).
  //     window.confirmationResult = confirmationResult;
  //     // ...
  //     console.log(confirmationResult);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div
      className={`h-[100vh] w-[100vw] bg-[#282c3fb3] fixed z-[999] top-0 ${dis2} `}>
      <div
        className={` w-[522px]  h-full bg-white absolute right-0 `}
        style={{ animation: animate }}>
        <div className="w-full h-[376px] pl-[40px] pr-[120px] flex flex-col pt-[30px]">
          <div className="flex">
            <div>
              <i
                className="material-icons cursor-pointer text-[25px]"
                onClick={() => {
                  setAnimate("slideInRight2 0.2s ease-in-out");
                  setTimeout(() => {
                    setDis2("hidden");
                    setAnimate("slideInLeft2 0.4s ease-in-out");
                  }, 200);
                }}>
                close
              </i>
              <h1 className="mt-[20px] text-[28px] font-nun">
                {signUp ? "Sign up" : "Login"}
              </h1>
              <span className="text-[12.5px]">or </span>
              <span
                className="text-[#ff5200] text-[12.5px] cursor-pointer"
                onClick={() => setSignUp(!signUp)}>
                {signUp ? "login to your account" : "create an account"}
              </span>
              <div className="w-[30px] border border-solid border-black mt-[17px]"></div>
            </div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
              className="w-[100px] h-[105px] absolute left-[300px] top-[73px]"
            />
          </div>
          <form action="">
            {!signUp ? (
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
            ) : (
              <Signup />
            )}
            <button
              type="submit"
              className="mt-[20px] h-[50px] w-full bg-[#ff5200] text-white font-bold text-[13px]">
              {signUp ? "CONTINUE" : "LOGIN"}
            </button>
            <div className="mt-[6px] text-[11px] text-[#686b78]">
              By clicking on Login, I accept the{" "}
              <a
                href="https://www.swiggy.com/terms-and-conditions"
                className="text-[#282c3f]">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a
                href="https://www.swiggy.com/privacy-policy"
                className="text-[#282c3f] ">
                Privacy Policy
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
