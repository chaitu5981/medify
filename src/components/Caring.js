import React from "react";
import caring1 from "../images/caring1.png";
import caring2 from "../images/caring2.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
const Caring = () => {
  return (
    <div className="bg-[#EFF5FF] px-8 py-12 flex gap-14 ">
      <div className="items-end w-[50%]  relative h-[30rem]">
        <div className="">
          <img src={caring1} alt="caring " className="absolute right-0" />
        </div>
        <div className="">
          <img
            src={caring2}
            alt="caring"
            className="absolute bottom-0 right-20"
          />
        </div>
        <div className="bg-white rounded-md px-4 py-3 w-fit absolute left-[12rem] top-[6rem]">
          <div className="flex gap-2 ">
            <button className="bg-[#2AA7FF] py-2 px-2 rounded text-white">
              <FaPhoneVolume />
            </button>
            <p className="font-semibold">Free Consultation</p>
          </div>
          <p className="text-gray-400">Consultation with the best</p>
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-7 self-center">
        <p className="text-blue-400 font-semibold">
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <p className="text-5xl font-semibold">
          <span className="text-[#1b3c74]">Patient</span>
          <span className="text-[#2aa7ff]"> Caring</span>
        </p>
        <p className="text-[#77829d] text-[18px]">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className="flex gap-3 items-center text-xl">
          <HiBadgeCheck className="text-blue-400 text-2xl" />
          <p className="text-[#1b3c74]">Stay Updated About Your Health</p>
        </div>
        <div className="flex gap-3 items-center text-xl">
          <HiBadgeCheck className="text-blue-400 text-2xl" />
          <p>Check Your Results Online</p>
        </div>
        <div className="flex gap-3 items-center text-xl">
          <HiBadgeCheck className="text-blue-400 text-2xl" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default Caring;
