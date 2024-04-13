import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import Team from "./Team";
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const estates = useLoaderData();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-10">
      <Helmet>
        <title>Axis Commercial | Home</title>
      </Helmet>

      {/* Banner */}
      <div data-aos="slide-right">
        <Banner></Banner>
      </div>
      {/* marquee */}
      <div className="my-4  hidden rounded-l-xl md:block bg-slate-700 font-bold text-white  pr-1">
        <div className="flex">
          <button className="px-6 py-2 rounded-l-xl text-white font-semibold text-xl bg-violet-600">
            Estates
          </button>
          <Marquee speed={80} pauseOnHover>
            We are providing a complete package of Estates for you. Different
            Sub categories of estate mentioned e.g : Office Buildings, Retail
            spaces, Warehouses,industrial facilities,restaurants,entertainment
            venues etc. Please scroll down for exploring more.
          </Marquee>
        </div>
      </div>

      {/* description */}
      <div className="md:px-20 px-2 text-center my-2 md:my-4 lg:my-10 space-y-2 font-alegreya">
        <h1 className="font-medium md:font-extrabold text-lg md:text-xl lg:text-3xl">
          Find Us With All Estates
        </h1>
        <p className="text-base md:text-lg font-normal md:font-semibold">
          We are the global leader in commercial real estate services and
          investments. With services, insights and data that span every
          dimension of the industry, we create solutions for clients of every
          size, in every sector and across every geography.
        </p>
      </div>
      {/* Estate */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {estates.map((singleEstate) => (
          <EstateCard
            key={singleEstate.id}
            singleEstate={singleEstate}
          ></EstateCard>
        ))}
      </div>

      {/* Team */}
      <Team></Team>
    </div>
  );
};

export default Home;
