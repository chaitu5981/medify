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
      <h1 className="text-2xl text-center my-6 font-semibold">
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
          <img src={doctor1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doctor2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Specialists;
