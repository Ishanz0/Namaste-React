import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  // console.log(restaurant);

  return restaurant ? (
    <div className="flex flex-col items-center p-5 text-center">
      <h1 className="font-bold mb-5 text-3xl">Menu</h1>
      <div className="flex flex-wrap">
        {restaurant &&
          Object.values(restaurant).map((item) => (
            <RestaurantMenuCard {...item} key={item.name} />
          ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
