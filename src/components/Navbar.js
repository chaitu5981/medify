import React from "react";
import logo from "../images/logo.png";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
  return (
    <div className="bg-[#EAF2FF]">
      <div className="bg-[#2AA7FF] h-fit text-center text-white">
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="flex  w-[75%] m-auto justify-between items-center py-2">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[2rem]" />
        </Link>
        <div className="gap-6 hidden xl:flex">
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
        <Menu items={items} className="xl:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
