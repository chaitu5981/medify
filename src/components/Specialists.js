import React from "react";
import doctor1 from "../images/doctor1.png";
import doctor2 from "../images/doctor2.png";
import doctor3 from "../images/doctor3.png";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "./Specialists.css";
const Specialists = () => {
  return (
    <div className="py-6 specialists">
      <h1 className="text-5xl text-center my-10 font-semibold text-[#1b3c74]">
        Our Medical Specialist
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={doctor1} alt="doctor" />
          <p>Dr. Ahmad Khan</p>
          <p>Neurologist</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="doctor" />
          <p>Dr. Heena Sachdeva</p>
          <p>Orthopaedics</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor3} alt="" />
          <p>Dr. Ankur Sharma</p>
          <p>Medicine</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor1} alt="" />
          <p>Dr. Ahmad Khan</p>
          <p>Neurologist</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="" />
          <p>Dr. Heena Sachdeva</p>
          <p>Orthopaedics</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor3} alt="" />
          <p>Dr. Ankur Sharma</p>
          <p>Medicine</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor1} alt="" />
          <p>Dr. Ahmad Khan</p>
          <p>Neurologist</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="" />
          <p>Dr. Heena Sachdeva</p>
          <p>Orthopaedics</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Specialists;
