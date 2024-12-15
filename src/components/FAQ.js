import React from "react";
import faqImg from "../images/faq-image.png";
import smiley from "../images/smiley.png";
import love from "../images/love.png";
const FAQ = () => {
  return (
    <div className="w-[75%] mx-auto py-8">
      <p className="text-center text-[#2aa7ff]">Get Your Answer</p>
      <p className="text-center text-5xl mt-4 mb-8 text-[#1b3074] font-semibold">
        Frequently Asked Questions
      </p>
      <div className="flex gap-20">
        <div className="w-[50%] relative">
          <img src={faqImg} alt="faq-image" />
          <div className="flex gap-3 w-fit p-2 absolute bottom-[25%] bg-white rounded-lg">
            <img
              src={smiley}
              alt="smiley"
              className="w-[3rem] h-[3rem] self-center"
            />
            <div className="space-y-2 ">
              <p className="text-3xl font-semibold">84k+</p>
              <p className="text-gray-400">Happy Patients</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-full absolute top-[35%] right-0">
            <img src={love} alt="" />
          </div>
        </div>
        <div className="w-[50%]  flex flex-col gap-14 text-[#1b3074] font-semibold text-lg justify-center self-stretch">
          <div className="flex  gap-6">
            <p className="w-[24rem]">Why choose our medical for your family?</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex  gap-6">
            <p className="w-[24rem]">Why we are different from others?</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex  gap-6">
            <p className="w-[24rem]">Trusted & experience senior care & love</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex items-center gap-6">
            <p className="w-[24rem] ">
              How to get appointment for emergency cases?
            </p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
