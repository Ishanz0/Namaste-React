import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import OfflineMessage from "./OfflineMessage";
import userContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants();

  const isOnline = useOnline();

  const { user, setUser } = useContext(userContext);

  if (!isOnline) return <OfflineMessage />;

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <div className="shimmer-card">
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="flex items-center mr-4">
        <input
          type="text"
          placeholder="Search Your Bite!"
          className="py-2 px-4 ml-2.5 mr-1 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="py-2 px-4 text-white rounded-md bg-green-500 border-none outline-none cursor-pointer text-base font-normal transition-bg-ease-in-out duration-300 hover:bg-green-700"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
            console.log(data.length);
          }}
        >
          Search
        </button>
        <input
          type="text"
          placeholder="Update User Name!"
          className="ml-auto py-2 px-4 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Update User Email!"
          className="ml-auto py-2 px-4 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              className="no-underline text-black cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-110"
              to={"restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          ))
        ) : (
          <h1> Restaurant Not Found! </h1>
        )}
      </div>
    </>
  );
};

export default Body;
