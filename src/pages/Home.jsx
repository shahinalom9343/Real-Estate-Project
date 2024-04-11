import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import Team from "./Team";
import Marquee from "react-fast-marquee";
import "animate.css";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="my-10">
      <Helmet>
        <title>Axis Commercial | Home</title>
      </Helmet>

      {/* Banner */}
      <Banner></Banner>
      {/* marquee */}
      <div className="py-4 rounded-xl  hidden md:block">
        <div className="flex">
          <button className="px-6 py-2 rounded-l-xl text-white font-semibold text-xl bg-violet-600">
            Estates
          </button>
          <Marquee speed={100} pauseOnHover>
            We are providing a complete package of Estates for you. Different
            Sub categories of estate mentioned e.g : Office Buildings, Retail
            spaces, Warehouses,industrial facilities,restaurants,entertainment
            venues etc. Please scroll down for exploring more.
          </Marquee>
        </div>
      </div>
      {/* Estate */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
