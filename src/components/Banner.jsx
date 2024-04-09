import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./slide.css";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-6">
      <SwiperSlide>
        <div className="slide slide1 bg-opacity-50"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide2"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide3"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
