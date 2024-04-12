import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EstateDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
        <div
          className="col-span-1 flex justify-center items-center transition duration-300 ease-in-out hover:scale-110"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <img className="h-64" src={estate.image} />
        </div>
        <div
          className="card-body col-span-1 lg:col-span-2"
          data-aos="fade-down-left"
          data-aos-duration="2000"
        >
          <h2 className="card-title font-bold text-2xl">
            {estate.estate_title}
          </h2>
          <p className="text-justify"> {estate.description}</p>
          <p className="text-justify">
            {" "}
            <span className="font-bold">Segment :</span> {estate.segment_name}
          </p>
          <p className="text-justify">
            {" "}
            <span className="font-bold">Area :</span> {estate.area_sq_ft}
          </p>
          <p>
            <span className="font-bold">Location :</span>
            {estate.location}
          </p>
          <div>
            <span className="font-bold">Status :</span>
            {estate.status}
          </div>
          <div>
            <span className="font-bold">Price :</span>
            {estate.price}
          </div>
          <div className="flex gap-10">
            <span className="font-bold">Facilities : </span>
            <div className="flex gap-4 flex-col md:flex-row">
              {estate.facilities.map((facility) => (
                <ol key={String}>
                  {" "}
                  <li>{facility}</li>
                </ol>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
