import React, { useContext, useState } from "react";
import hospitalImg from "../images/hospital.png";
import { BiSolidLike } from "react-icons/bi";
import BookingInterface from "./BookingInterface";
import { AppContext } from "../App";
import { getTime, getDate } from "../utils";
const HospitalCard = ({ hospital, hospitalIndex, type, date }) => {
  const { state, city } = useContext(AppContext);
  const [showBookInterfaceIndex, setShowBookInterfaceIndex] = useState();

  return (
    <div key={hospital["Provider ID"]} className="p-6  bg-white rounded-xl">
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="bg-[#8BCFFF] p-5 rounded-full w-[7rem] h-[7rem]">
          <img src={hospitalImg} alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-[#14BEF0] font-semibold mb-4">
            {hospital["Hospital Name"]}
          </h1>
          <p className="font-semibold">
            {city},{state}
          </p>
          <p>{hospital["Hospital Type"]}</p>
          {type === "book" && (
            <p className="flex gap-2 mt-2">
              <span className="text-[#05A14B] font-bold">FREE</span>
              <span className="line-through">$50</span>
              <span>Consultation fee at clinic</span>
            </p>
          )}
          <p className="text-gray-200 ">-------</p>
          <button className="px-2 py-1 rounded w-[4rem] flex items-center gap-1 bg-[#00AF00] text-white">
            <BiSolidLike className="text-2xl" />
            <p className="text-[#80D280] font-semibold">5</p>
          </button>
        </div>
        {type === "book" ? (
          <div className="self-end flex flex-col items-center gap-4">
            <p className="text-[#05A14B] font-semibold">Available Today</p>
            <button
              onClick={() => setShowBookInterfaceIndex(hospitalIndex)}
              className="bg-[#2AA7FF] px-4 py-2 text-white rounded-md"
            >
              Book FREE Center Visit
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="border-2 border-blue-400 px-2 py-1 h-fit">
              {getTime(date)}
            </div>
            <div className="border-2 border-green-400 px-2 py-1 h-fit">
              {getDate(date)}
            </div>
          </div>
        )}
      </div>
      {type === "book" && hospitalIndex === showBookInterfaceIndex && (
        <BookingInterface hospitalIndex={hospitalIndex} hospital={hospital} />
      )}
    </div>
  );
};

export default HospitalCard;
