import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { description } = useParams();
  return (
    <div>
      <h2>This is estate drtaisls</h2>
      <p>thjis</p>
      <p>{description}</p>
    </div>
  );
};

export default EstateDetails;
