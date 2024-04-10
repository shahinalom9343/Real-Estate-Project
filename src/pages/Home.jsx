import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import Team from "./Team";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="my-10">
      <Helmet>
        <title>Axis Commercial | Home</title>
      </Helmet>

      {/* Banner */}
      <Banner></Banner>

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
