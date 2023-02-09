import { useParams } from "react-router-dom";
import { img_cdn_url } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center p-5 rounded-lg m-2.5 bg-card-color">
      <div className="text-3xl font-bold mb-2.5"> {restaurant?.name} </div>
      <img
        src={
          restaurant?.cloudinaryImageId &&
          img_cdn_url + restaurant?.cloudinaryImageId
        }
        className="w-full max-w-xs mb-2.5"
      />
      <div className="text-xl mb-2.5 text-yellow-400">
        {" "}
        {restaurant?.avgRating} stars
      </div>
      <div className="text-xl text-green-600 mb-2.5">
        {" "}
        {restaurant?.costForTwoMsg}{" "}
      </div>
      <div className="flex flex-col items-center p-5">
        <h1 className="font-bold mb-2.5 text-3xl"> Menu </h1>
        {console.log(restaurant?.menu?.items)}
        <ul className="m-0 p-0 list-none w-80">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <li className="mb-2.5 text-center text-xl" key={item.id}>
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
