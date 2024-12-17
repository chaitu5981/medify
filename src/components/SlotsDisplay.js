import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { enqueueSnackbar } from "notistack";
import { preReleaseLabel } from "@mui/material";
import { calc } from "antd/es/theme/internal";

const SlotsDisplay = ({ slots, dayIndex, hospitalIndex, setSlotsDayWise }) => {
  const { appointments, setAppointments, hospitals } = useContext(AppContext);
  const date = new Date();
  date.setDate(date.getDate() + dayIndex);
  const slots1 = slots.map((slot) => {
    const h = Number(slot.split(":")[0]);
    const m = Number(slot.split(":")[1]);
    let date2 = new Date(date);
    date2.setHours(h);
    date2.setMinutes(m);
    return date2;
  });

  let morningSlots = [],
    afternoonSlots = [],
    eveningSlots = [];
  slots.forEach((slot, index) => {
    const h = Number(slot.split(":")[0]);
    const m = Number(slot.split(":")[1]);
    const m1 = m < 10 ? "0" + m : "" + m;
    if (h < 12) morningSlots.push([slot + " AM", index]);
    else if (h < 17)
      afternoonSlots.push([
        h > 12 ? `0${h - 12}:${m1} PM` : `${h}:${m1} PM`,
        index,
      ]);
    else eveningSlots.push([`0${h - 12}:${m1} PM`, index]);
  });

  const addAppointment = (index) => {
    const appointment = {
      hospital: hospitals[hospitalIndex],
      date: slots1[index],
    };
    setAppointments([...appointments, appointment]);
    setSlotsDayWise((prevSlotsDayWise) => {
      const prevSlotsDayWise1 = [...prevSlotsDayWise];
      prevSlotsDayWise1[dayIndex] = prevSlotsDayWise1[dayIndex].filter(
        (s, i) => i !== index
      );
      return prevSlotsDayWise1;
    });
    enqueueSnackbar("Appointment added", { variant: "success" });
  };
  return (
    <div className="mt-10 flex flex-col gap-6 text-sm">
      <div className="flex gap-8">
        <p className="w-[6rem] text-left">Morning</p>
        <div className="flex flex-wrap  gap-8 w-[38vw]">
          {morningSlots.map((slot) => (
            <div
              key={slot}
              className="border-2 border-[#79C8FF] px-1 py-1 w-[6rem] cursor-pointer"
              onClick={() => addAppointment(slot[1])}
            >
              {slot[0]}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8">
        <p className="w-[6rem] text-left">Afternoon</p>
        <div className="flex flex-wrap w-[38vw] gap-8">
          {afternoonSlots.map((slot) => (
            <div
              key={slot}
              className="border-2 border-[#79C8FF] py-1 w-[6rem] cursor-pointer"
              onClick={() => addAppointment(slot[1])}
            >
              {slot[0]}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8">
        <p className="w-[6rem] text-left">Evening</p>
        <div className="flex flex-wrap w-[38vw] gap-8">
          {eveningSlots.map((slot) => (
            <div
              key={slot}
              className="border-2 border-[#79C8FF] px-2 py-1 w-[6rem] cursor-pointer"
              onClick={() => addAppointment(slot[1])}
            >
              {slot[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotsDisplay;
