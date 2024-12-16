import React from "react";
import smallDoc from "../images/small-doctor.png";
import detox from "../images/detox.png";
const Blog = () => {
  return (
    <div className="w-[75%] mx-auto py-8 flex flex-col gap-7">
      <p className="text-center text-[#37acff] text-[18px] font-semibold">
        Blog & News
      </p>
      <p className="text-center text-[#1b3c74] text-5xl font-semibold">
        Read Our Latest News
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <div className="flex flex-col w-[20rem]">
          <img src={detox} alt="detox" className="w-full h-full" />
          <div className="p-2 border-2 border-gray-100 flex flex-col gap-4">
            <p className="text-[#7b86a0]">
              <span className="pr-4 border-r-2 border-r-gray-200">Medical</span>
              <span className="pl-4">March 31,2022</span>
            </p>
            <p className="text-[18px]">
              6 Tips To Protect Your Mental Health When You’re Sick
            </p>
            <div className="flex gap-2 items-center">
              <img src={smallDoc} alt="doc" className="w-[30px] h-[30px]" />
              <span>Rebecca Lee</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[20rem] ">
          <img src={detox} alt="detox" className="w-full h-full" />
          <div className="p-2 border-2 border-gray-100 flex flex-col gap-4">
            <p className="text-[#7b86a0]">
              <span className="pr-4 border-r-2 border-r-gray-200">Medical</span>
              <span className="pl-4">March 31,2022</span>
            </p>
            <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
            <div className="flex gap-2 items-center">
              <img src={smallDoc} alt="doc" className="w-[30px] h-[30px]" />
              <span>Rebecca Lee</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[20rem]">
          <img src={detox} alt="detox" className="w-full h-full" />
          <div className="p-2 border-2 border-gray-100 flex flex-col gap-4">
            <p className="text-[#7b86a0]">
              <span className="pr-4 border-r-2 border-r-gray-200">Medical</span>
              <span className="pl-4">March 31,2022</span>
            </p>
            <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
            <div className="flex gap-2 items-center">
              <img src={smallDoc} alt="doc" className="w-[30px] h-[30px]" />
              <span>Rebecca Lee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
