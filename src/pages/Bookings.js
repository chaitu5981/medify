import React, { useContext } from "react";
import { AppContext } from "../App";
import HospitalCard from "../components/HospitalCard";

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
        <div className="w-[28%] bg-white rounded-xl h-[10rem]"></div>
      </div>
    </div>
  );
};

export default Bookings;
