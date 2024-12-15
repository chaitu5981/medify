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
      <div className="flex gap-10 ">
        <div className="w-[50%]">
          <img src={faqImg} alt="faq-image" />
          <div>
            <img src={smiley} alt="smiley" />
            <p>84k+</p>
            <p>Happy Patients</p>
          </div>
          <div></div>
        </div>
        <div className="w-[50%]  flex flex-col gap-14 text-[#1b3074] font-semibold text-lg justify-center self-stretch">
          <div className="flex  gap-6">
            <p className="w-[20rem]">Why choose our medical for your family?</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex  gap-6">
            <p className="w-[20rem]">Why we are different from others?</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex  gap-6">
            <p className="w-[20rem]">Trusted & experience senior care & love</p>
            <button className="self-start text-[#2aa7ff] text-2xl">+</button>
          </div>
          <div className="flex items-center gap-6">
            <p className="w-[20rem] ">
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
