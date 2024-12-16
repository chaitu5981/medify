import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./BookingInterface.css";
import { slotDays } from "../utils";
import SlotsDisplay from "./SlotsDisplay";
import { AppContext } from "../App";
const BookingInterface = ({ hospitalIndex, hospital }) => {
  const { appointments } = useContext(AppContext);
  const [slotDayIndex, setSlotDayIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  const [slotsDayWise, setSlotsDayWise] = useState([]);
  useEffect(() => {
    const slotDays1 = slotDays.map((row) => [...row]);
    const bookings = appointments.filter(
      (appointment) =>
        appointment.hospital["Provider ID"] === hospital["Provider ID"]
    );
    bookings.forEach((b) => {
      const bookingDate = new Date(b.date);
      const today = new Date();
      let bookingDayIndex;
      if (bookingDate >= today) {
        bookingDayIndex = Math.ceil(
          (bookingDate - today) / (1000 * 60 * 60 * 24)
        );
        const bookingTime = new Date(bookingDate).toLocaleTimeString("en-in", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        console.log(bookingTime);
        slotDays1[bookingDayIndex] = slotDays1[bookingDayIndex].filter((s) => {
          console.log(s, bookingTime);
          return s !== bookingTime;
        });
      }
    });
    setSlotsDayWise(slotDays1);
  }, []);

  const handleNavNext = () => {
    setViewIndex(viewIndex + 1);
    setSlotDayIndex(slotDayIndex + 1);
  };

  const handleNavPrev = () => {
    setViewIndex(viewIndex - 1);
    setSlotDayIndex(slotDayIndex - 1);
  };
  const getDay = (index) => {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    const date = new Date();
    const date1 = new Date(date.setDate(date.getDate() + index));
    const month = date1.toLocaleDateString("en-us", { month: "short" });
    const weekDay = date1.toLocaleDateString("en-us", { weekday: "short" });
    const day = date1.toLocaleDateString("en-us", { day: "numeric" });
    return `${weekDay}, ${day} ${month}`;
  };

  return (
    <div className="booking-carousel mt-4">
      <div className="w-[4rem] h-[5px] bg-[#20B020] rounded mx-auto my-6"></div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onNavigationNext={handleNavNext}
        onNavigationPrev={handleNavPrev}
        // spaceBetween={40}
      >
        {slotsDayWise.map((slot, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                setSlotDayIndex(index);
              }}
              className="cursor-pointer"
            >
              <p className="font-semibold">{getDay(index)}</p>
              <p className="text-green-500 text-sm">
                {slotsDayWise[index].length + " Slots Available"}
              </p>
              {slotDayIndex === index ? (
                <div className="bg-[#36ABFE] w-[10rem] h-[4px] mx-auto rounded"></div>
              ) : null}
            </div>
            {slotDayIndex === index && (
              <div
                className="flex"
                style={{ marginLeft: `-${(index - viewIndex) * 16}rem` }}
              >
                <SlotsDisplay
                  slots={slotsDayWise[index]}
                  dayIndex={index}
                  hospitalIndex={hospitalIndex}
                  setSlotsDayWise={setSlotsDayWise}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookingInterface;
