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
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper mb-6"
    >
      <SwiperSlide>
        <div className="slide slide1 bg-opacity-50 flex flex-col">
          <h3 className="text-2xl font-bold text-orange-500">
            Corporate Headquarters
          </h3>
          <p className="text-xl font-semibold text-orange-300">
            Elevate your corporate identity with our prestigious headquarters.
            Designed to embody sophistication and efficiency....
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide2 bg-opacity-50 flex flex-col">
          <h3 className="text-2xl font-bold text-orange-500">
            Entertainment Complex
          </h3>
          <p className="text-xl text-center px-10 font-semibold text-orange-300">
            Immerse yourself in an unforgettable entertainment experience at our
            state-of-the-art complex. Designed to cater to a diverse range of
            entertainment preferences, this venue is a hub of excitement and
            activity....
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide3 bg-opacity-50 flex flex-col">
          <h3 className="text-2xl font-bold text-orange-500">
            Fine Dining Restaurant
          </h3>
          <p className="text-xl text-center px-10 font-semibold text-orange-300">
            Indulge your senses in a culinary journey like no other at our fine
            dining restaurant. Nestled in an elegant setting...
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
