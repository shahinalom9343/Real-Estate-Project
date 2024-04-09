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
      <div className="card card-compact w-full  bg-base-300  h-[500px]">
        <figure>
          <img className="h-52 w-full" src={image} alt={estate_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-600">{estate_title}</h2>
          <h3 className="text-base font-semibold">Segment : {segment_name}</h3>
          <p>
            {description.slice(0, 120)} ..{" "}
            <button className="text-sm text-fuchsia-500">see more</button>
          </p>
          <div className="flex gap-10">
            <p>Price : {price}</p>
            <p>({status})</p>
          </div>
          <p>Area : {area_sq_ft} sq.ft</p>

          <p className="text-start">Location:{location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">View Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
