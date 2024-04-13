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
      className="mySwiper mb-6 text-center"
    >
      <div className="rounded-lg">
        {" "}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://www.boyercompany.com/wp-content/uploads/2022/02/Weave-Lehi-utah-real-estate-boyer-company.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-xl font-alegreya">
                <h1 className="mb-5 text-5xl font-bold">
                  Corporate Headquarters
                </h1>
                <p className="mb-5">
                  Elevate your corporate identity with our prestigious
                  headquarters. Designed to embody sophistication and
                  efficiency, the ..
                </p>
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://minteerteam.com/wp-content/uploads/2022/03/EVO-Entertainment-Center.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl font-alegreya">
                <h1 className="mb-5 text-5xl font-bold">
                  Entertainment Complex
                </h1>
                <p className="mb-5">
                  Immerse yourself in an unforgettable entertainment experience
                  at our state-of-the-art complex. Designed to cater to a di ..
                </p>
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/trends-publishing/image/upload/s--o4nDHKFY--/c_scale,dpr_2.0,g_center,w_320/e_anti_removal:10,g_south_east,l_trends_watermark,o_70,w_50,x_10,y_10/f_auto,q_auto:best/0057741.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl font-alegreya">
                <h1 className="mb-5 text-5xl font-bold">
                  Fine Dining Restaurant
                </h1>
                <p className="mb-5">
                  Indulge your senses in a culinary journey like no other at our
                  fine dining restaurant. Nestled in an elegant setting wit ...
                </p>
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Banner;
