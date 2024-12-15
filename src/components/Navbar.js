import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#EAF2FF]">
      <div className="bg-[#2AA7FF] h-[1.5rem] text-center text-white">
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="flex  w-[75%] m-auto justify-between items-center py-2">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[2rem]" />
        </Link>
        <div className="flex gap-6">
          <button className="h-fit py-1">Find Doctors</button>
          <button className="h-fit py-1">Hospitals</button>
          <button className="h-fit py-1">Medicines</button>
          <button className="h-fit py-1">Surgeries</button>
          <button className="h-fit py-1">Software for Provider</button>
          <button className="h-fit py-1">Facilities</button>
          <Link
            to="/bookings"
            className="bg-[#2AA7FF] py-1 px-2 text-white w-fit h-fit rounded"
          >
            My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
