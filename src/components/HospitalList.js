import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import hospitalImg from "../images/hospital.png";
import { BiSolidLike } from "react-icons/bi";
import BookingInterface from "./BookingInterface";
const HospitalList = () => {
  const { state, city, hospitals } = useContext(AppContext);
  const [showBookInterfaceIndex, setShowBookInterfaceIndex] = useState();
  return (
    <div className="flex gap-3 mt-8">
      <div className="w-[72%] flex flex-col gap-5">
        {hospitals.map((hospital, index) => (
          <div
            key={hospital["Provider ID"]}
            className="p-6 flex flex-col bg-white rounded-xl gap-4"
          >
            <div className="flex gap-4">
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
                <p className="flex gap-2 mt-2">
                  <span className="text-[#05A14B] font-bold">FREE</span>
                  <span className="line-through">$50</span>
                  <span>Consultation fee at clinic</span>
                </p>
                <p className="text-gray-200 ">-------</p>
                <button className="px-2 py-1 rounded w-[4rem] flex items-center gap-1 bg-[#00AF00] text-white">
                  <BiSolidLike className="text-2xl" />
                  <p className="text-[#80D280] font-semibold">5</p>
                </button>
              </div>
              <div className="self-end flex flex-col items-center gap-4">
                <p className="text-[#05A14B] font-semibold">Available Today</p>
                <button
                  onClick={() => setShowBookInterfaceIndex(index)}
                  className="bg-[#2AA7FF] px-4 py-2 text-white rounded-md"
                >
                  Book FREE Center Visit
                </button>
              </div>
            </div>
            <BookingInterface
              show={index === showBookInterfaceIndex}
              hospitalIndex={index}
            />
          </div>
        ))}
      </div>
      <div className="w-[28%] bg-white rounded-xl h-[10rem]"></div>
    </div>
  );
};

export default HospitalList;
