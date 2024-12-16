import React from "react";
import mobile2 from "../images/mobile2.png";
import mobile1 from "../images/mobile1.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
const Mobile = () => {
  return (
    <div className="bg-[#eef4ff] pt-10 h-[34rem] overflow-hidden">
      <div className="w-[75%] mx-auto flex ">
        <div className="w-[50%] relative">
          <img src={mobile2} alt="mobile" className="absolute left-[12rem]" />
          <img
            src={mobile1}
            alt="mobile"
            className="absolute left-[12.5rem] top-10 rounded-xl"
          />
          <img
            src={mobile2}
            alt="mobile"
            className="absolute left-[0rem] top-[5rem]"
          />
          <img
            src={mobile1}
            alt="mobile"
            className="absolute left-[0.5rem] top-[7rem]"
          />
        </div>
        <div className="w-[50%]  flex flex-col justify-center h-[28rem] gap-5">
          <p className="text-[#1b3c74] text-5xl font-semibold w-[23rem] leading-[4rem]">
            Download the <span className="text-[#2aa7ff]">Medify</span> App
          </p>
          <p className="text-[#414146]">Get the link to download the app</p>
          <div className="flex">
            <div className="p-4 bg-white border-r-2 border-r-gray-100">+91</div>
            <input
              type="text"
              placeholder="Enter phone number"
              className="p-4 w-[20rem] rounded-r-md outline-none"
            />
            <button className="bg-blue-400 rounded-xl px-4 py-2 text-white ml-6">
              Send SMS
            </button>
          </div>
          <div className="flex mt-6 gap-6">
            <div className="flex bg-black text-white items-center px-6 py-4 rounded-xl text-xl gap-2">
              <FaGooglePlay />
              <p>Google Play</p>
            </div>
            <div className="flex bg-black text-white items-center px-6 py-4 rounded-xl text-xl gap-2">
              <FaApple />
              <p>App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
