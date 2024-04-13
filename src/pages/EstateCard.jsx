import { Link } from "react-router-dom";
import "animate.css";

const EstateCard = ({ singleEstate }) => {
  const {
    image,
    estate_title,
    estate_name,
    id,
    segment_name,
    description,
    price,
    status,
    area_sq_ft,
    location,
  } = singleEstate;
  return (
    <div className="animate__animated animate__fadeInUp font-alegreya">
      <div className="card card-compact w-full  bg-red-100 transition duration-300 ease-in-out hover:scale-105 h-96">
        <figure>
          <img className="h-52 w-full" src={image} alt={estate_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-700">{estate_title}</h2>

          <div>
            <p>
              {description.slice(0, 120)} ..{" "}
              <button className="text-sm text-fuchsia-500 font-bold">
                See more
              </button>
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Area :</span> {area_sq_ft} sq.ft
            </p>
          </div>
          <div>
            <p className="text-start">
              <span className="font-bold">Location :</span>
              {location}
            </p>
          </div>
          <div>
            <Link
              to={`/estate/${id}`}
              className="btn btn-success text-white w-full font-semibold text-base"
            >
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
