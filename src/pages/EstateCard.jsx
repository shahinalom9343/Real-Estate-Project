import { Link } from "react-router-dom";

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
    <div>
      <div className="card card-compact w-full  bg-base-300  h-[290px">
        <figure>
          <img className="h-52 w-full" src={image} alt={estate_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-600">{estate_title}</h2>

          <div>
            <p>
              {description.slice(0, 120)} ..{" "}
              <button className="text-sm text-fuchsia-700">See more</button>
            </p>
          </div>
          <div>
            <p>Area : {area_sq_ft} sq.ft</p>
          </div>
          <div>
            <p className="text-start">Location:{location}</p>
          </div>
          <div className="">
            <Link to={`/estate/${id}`} className="btn btn-primary w-full">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
