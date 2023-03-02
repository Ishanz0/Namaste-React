import { img_cdn_url } from "../constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const { user } = useContext(userContext);

  return (
    <div className="bg-card-color w-64 rounded-lg shadow-md p-4 m-4">
      <img className="w-full rounded-md" src={img_cdn_url + cloudinaryImageId} />
      <div className="h-8 justify-center">
        <h3 className="truncate">{name}</h3>
      </div>
      <div className="h-16 justify-center">
        <p className="line-clamp-2">{cuisines.join(", ")}</p>
      </div>
      <div>{avgRating} stars</div>
      {/* <div>{user.name}</div> */}
    </div>
  );
};

export default RestaurantCard;
