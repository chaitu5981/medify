import React, { useContext } from "react";
import { AppContext } from "../App";
import HospitalCard from "../components/HospitalCard";
import oral from "../images/oral.png";
import FAQ from "../components/FAQ";
import Mobile from "../components/Mobile";

const Bookings = () => {
  const { appointments } = useContext(AppContext);
  console.log(appointments);
  return (
    <div className="bg-[#EAF2FF] min-h-[100vh] pt-[5rem] pb-[2rem]">
      <div className="w-[75%] mx-auto flex gap-3">
        <div className="w-[72%] flex flex-col gap-5">
          {appointments.map((appointment, index) => (
            <HospitalCard
              key={index}
              type="view"
              hospital={appointment.hospital}
              date={appointment.date}
            ></HospitalCard>
          ))}
        </div>
        <div className="w-[28%] bg-white rounded-xl h-[10rem]">
          <img src={oral} alt="oral" className="w-full" />
        </div>
      </div>
      <FAQ />
      <Mobile />
    </div>
  );
};

export default Bookings;
