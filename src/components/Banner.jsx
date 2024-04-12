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
        <div className="slide slide1 flex flex-col">
          <h3 className="text-5xl font-bold text-white">
            Corporate Headquarters
          </h3>
          <p className="text-2xl font-semibold text-white">
            Elevate your corporate identity with our prestigious headquarters.
            Designed to embody sophistication and efficiency....
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide2  flex flex-col">
          <h3 className="text-5xl font-bold text-white">
            Entertainment Complex
          </h3>
          <p className="text-2xl text-center px-10 font-semibold text-white">
            Immerse yourself in an unforgettable entertainment experience at our
            state-of-the-art complex. Designed to cater to a diverse range of
            entertainment preferences, this venue is a hub of excitement and
            activity....
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide slide3  flex flex-col">
          <h3 className="text-5xl font-bold text-orange-500">
            Fine Dining Restaurant
          </h3>
          <p className="text-2xl text-center px-10 font-semibold text-white">
            Indulge your senses in a culinary journey like no other at our fine
            dining restaurant. Nestled in an elegant setting...
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
