import React from "react";
import logo from "../images/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

const socialLinks = [
  <FaFacebookF />,
  <FaTwitter />,
  <IoLogoYoutube />,
  <FaInstagram />,
];
const links = [
  "About Us",
  "Orthology",
  "About Us",
  "Our Pricing",
  "Neurology",
  "Our Pricing",
  "Our Gallery",
  "Dental Care",
  "Our Gallery",
  "Privacy Policy",
  "Cardiology",
  "Privacy Policy",
];
const Footer = () => {
  return (
    <div className="bg-[#1b3c74]">
      <div className="w-[75%] mx-auto pt-12 pb-6 flex flex-col gap-6">
        <div className="flex gap-8">
          <div className="w-[30%] self-stretch flex flex-col justify-between">
            <img src={logo} alt="" className="w-[8rem]" />
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <div
                  key={i}
                  className="bg-white w-fit p-2 rounded-full text-blue-400"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[70%]">
            <div className="grid grid-cols-3 text-white gap-y-8">
              {links.map((link, i) => (
                <div key={i}>{`>   ${link}`}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-[#7c889e]"></div>
        <p className="text-white">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
