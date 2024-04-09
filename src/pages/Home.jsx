import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Axis Commercial | Home</title>
      </Helmet>

      <Banner></Banner>
    </div>
  );
};

export default Home;
