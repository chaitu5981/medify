import React from "react";
import { IoIosSearch } from "react-icons/io";

const SmallForm = ({ type }) => {
  if (type === "bookings")
    return (
      <div className="bg-[#1c99f2] h-[5rem] rounded-md">
        <div className="w-[75%] mx-auto relative">
          <p className="text-2xl font-semibold text-white">My Bookings</p>
          <form className="bg-white p-3 flex gap-3 items-center rounded-xl absolute right-0 -bottom-[4.5rem] w-[55%]">
            <input
              type="text"
              placeholder="Search by Hospital"
              className="p-2 rounded-xl w-[75%] border-2 border-gray-200"
            />
            <button className="flex items-center bg-[#1c99f2] py-2 px-3 gap-2 text-white h-fit rounded-md">
              <IoIosSearch />
              Search
            </button>
          </form>
        </div>
      </div>
    );
};

export default SmallForm;
