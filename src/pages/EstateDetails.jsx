import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  return (
    <div className="my-10">
      <Helmet>
        <title>Axis Commercial | Estate Details</title>
      </Helmet>
      <div className="card  card-side bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-2 lg:px-4">
        <div className="col-span-1 flex justify-center items-center ">
          <img className="h-4/5" src={estate.image} />
        </div>
        <div className="card-body col-span-1 lg:col-span-2">
          <h2 className="card-title">{estate.estate_title}</h2>
          <p className="text-justify"> {estate.description}</p>
          <p>Location :{estate.location}</p>
          <div className="font-bold">Status:{estate.status}</div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
