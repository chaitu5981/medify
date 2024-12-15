import React from "react";
import happy from "../images/happy-icon.png";
import medDoc from "../images/medium-doc.png";
import smallHosp from "../images/small-hosp.png";
import labs from "../images/labs1.png";
const Data = () => {
  return (
    <div className="bg-[#eef4ff] py-12 ">
      <div className="w-[75%] mx-auto flex gap-12">
        <div className="w-[50%] flex flex-col gap-6 self-center">
          <p className="text-[#2aa7ff] font-semibold">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <p className="text-[#1b3c64] text-5xl font-semibold">Our Families</p>
          <p className="leading-10 text-[#77829d]">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="w-[50%] flex gap-8">
          <div className="flex-col flex gap-8">
            <div className="bg-white w-[15rem] h-[19rem] rounded-md  flex flex-col gap-6 justify-center items-center">
              <div className="bg-[#ebf7ff] rounded-full p-6 w-fit">
                <img src={happy} alt="happy" />
              </div>
              <p className="text-5xl font-semibold text-[#1b3c74]">5000+</p>
              <p className="text-[#808aa3] font-semibold">Happy Patients</p>
            </div>
            <div className="bg-white w-[15rem] h-[19rem] rounded-md flex flex-col gap-6 justify-center items-center">
              <div className="bg-[#fff7e6] rounded-full p-6 w-fit">
                <img src={labs} alt="labs" />
              </div>
              <p className="text-5xl font-semibold text-[#1b3c74]">10000+</p>
              <p className="text-[#808aa3] font-semibold">Laboratories</p>
            </div>
          </div>

          <div className="flex-col flex gap-8 pt-20">
            <div className="bg-white w-[15rem] h-[19rem] rounded-md flex flex-col gap-6 justify-center items-center">
              <div className="bg-[#fff2f0] rounded-full p-6 w-fit">
                <img src={smallHosp} alt="hospital" />
              </div>
              <p className="text-5xl font-semibold text-[#1b3c74]">200+</p>
              <p className="text-[#808aa3] font-semibold">Hospitals</p>
            </div>
            <div className="bg-white w-[15rem] h-[19rem] rounded-md flex flex-col gap-6 justify-center items-center">
              <div className="bg-[#ebfaf1] rounded-full p-6 w-fit">
                <img src={medDoc} alt="doctor" />
              </div>
              <p className="text-5xl font-semibold text-[#1b3c74]">700+</p>
              <p className="text-[#808aa3] font-semibold">Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
