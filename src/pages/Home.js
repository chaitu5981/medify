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

const Home = () => {
  return (
    <div className="min-h-full">
      <div className="h-[35rem] bg-[#EAF2FF] relative">
        <div className="w-[75%] mx-auto flex py-8 justify-between">
          <div className="w-[25rem] flex flex-col gap-3">
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
          <div className="h-[25rem]">
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
    </div>
  );
};

export default Home;
