import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import disImg1 from "../images/discount-img1.png";
import disImg2 from "../images/discount-img2.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="h-[18rem] w-[75%] mx-auto discounts-carousel">
      <div className="mt-40">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={disImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={disImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={disImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={disImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={disImg1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
