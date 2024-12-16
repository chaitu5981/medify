import React, { useState } from "react";
import logo from "../images/logo.png";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SmallForm from "./SmallForm";
const items = [
  {
    label: <MenuOutlined />,
    children: [
      {
        label: <button className="h-fit py-1">Find Doctors</button>,
      },
      {
        label: <button className="h-fit py-1">Hospitals</button>,
      },
      {
        label: <button className="h-fit py-1">Medicines</button>,
      },
      {
        label: <button className="h-fit py-1">Surgeries</button>,
      },
      {
        label: <button className="h-fit py-1">Software for Provider</button>,
      },
      {
        label: <button className="h-fit py-1">Facilities</button>,
      },
      {
        label: (
          <Link
            to="/bookings"
            className="bg-[#2AA7Ff] py-1 px-2  appearance-none text-white w-fit h-fit rounded"
          >
            {" "}
            My Bookings
          </Link>
        ),
      },
    ],
  },
];
const Navbar = () => {
  const [showSmallForm, setShowSmallForm] = useState(false);
  const [type, setType] = useState();
  const navigate = useNavigate();
  const handleMyBookings = () => {
    setShowSmallForm(true);
    setType("bookings");
    navigate("/bookings");
  };

  const handleHome = () => {
    setShowSmallForm(false);
    navigate("/");
  };
  return (
    <div className="bg-[#EAF2FF]">
      <div className="bg-[#2AA7FF] h-fit text-center text-white">
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="flex  w-[75%] m-auto justify-between items-center py-2">
        <div onClick={handleHome}>
          <img src={logo} alt="logo" className="h-[2rem]" />
        </div>
        <div className="gap-6 hidden xl:flex">
          <button className="h-fit py-1">Find Doctors</button>
          <button className="h-fit py-1">Hospitals</button>
          <button className="h-fit py-1">Medicines</button>
          <button className="h-fit py-1">Surgeries</button>
          <button className="h-fit py-1">Software for Provider</button>
          <button className="h-fit py-1">Facilities</button>
          <button
            onClick={handleMyBookings}
            className="bg-[#2AA7FF] py-1 px-2 text-white w-fit h-fit rounded"
          >
            My Bookings
          </button>
        </div>
        <Menu items={items} className="xl:hidden" />
      </div>
      {showSmallForm && <SmallForm type={type} />}
    </div>
  );
};

export default Navbar;
