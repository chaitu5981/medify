import React, { useState } from "react";
import doctorsImg from "../images/doctors.png";
import SearchForm from "../components/SearchForm";
import Carousel from "../components/Carousel";
import Specialities from "../components/Specialities";
import Specialists from "../components/Specialists";
import Caring from "../components/Caring";
import Blog from "../components/Blog";
import Data from "../components/Data";
import FAQ from "../components/FAQ";
import Mobile from "../components/Mobile";

const Home = () => {
  return (
    <div className="min-h-full">
      <div className="lg:h-[35rem] bg-[#EAF2FF] lg:relative">
        <div className="w-[75%] mx-auto flex flex-col lg:flex-row py-8 justify-between">
          <div className=" w-full lg:w-[50%] flex flex-col gap-3">
            <p className="text-2xl">Skip the travel! Find Online</p>
            <p className="text-5xl font-bold">Medical Centers</p>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className="bg-[#2AA7FF] py-1 px-6 text-white w-fit h-fit rounded">
              Find Centers
            </button>
          </div>
          <div className=" w-full h-[25rem] lg:w-[50%]">
            <img src={doctorsImg} alt="doctors" className="h-full" />
          </div>
        </div>
        <SearchForm />
      </div>
      <Carousel />
      <Specialities />
      <Specialists />
      <Caring />
      <Blog />
      <Data />
      <FAQ />
      <Mobile />
    </div>
  );
};

export default Home;
