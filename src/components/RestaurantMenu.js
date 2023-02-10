import { useParams } from "react-router-dom";
import { img_cdn_url } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("banana"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center p-10 rounded-lg m-5 bg-card-color shadow-lg">
      <div className="text-3xl font-bold mb-5 text-center">
        {restaurant?.name}
      </div>
      <img
        src={
          restaurant?.cloudinaryImageId &&
          `${img_cdn_url}${restaurant?.cloudinaryImageId}`
        }
        className="w-full max-w-sm mb-5 rounded-lg"
      />
      <div className="flex flex-col items-center p-5 text-center">
        <div className="text-xl mb-5 text-yellow-400">
          {restaurant?.avgRating} <span className="text-yellow-600">stars</span>
        </div>
        <div className="text-xl text-green-600 mb-5">
          {restaurant?.costForTwoMsg}
        </div>
        <h1 className="font-bold mb-5 text-3xl">Menu</h1>
        <ul className="flex flex-col items-center list-none w-80">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <li className="mb-5 text-xl" key={item.id}>
                {item.name}
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold p-2 m-2 rounded-full transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => addFoodItem(item)}
                >
                  Add item
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
