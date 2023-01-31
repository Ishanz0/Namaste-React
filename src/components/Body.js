import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import OfflineMessage from "./OfflineMessage";

const Body = () => { 

    const [searchText, setSearchText] = useState("");

    const [allRestaurants, filteredRestaurants] = useRestaurants();

    const isOnline = useOnline();

    if (!isOnline) return <OfflineMessage />

    if (!allRestaurants) return null;

    return (allRestaurants.length === 0 ) ? <div className="shimmer-card"><Shimmer /></div> : (
    <>
    <div className="search-container">
        <input type="text" placeholder="Search Your Bite!" className="search-input" value={searchText}
        onChange={(e) => {setSearchText(e.target.value); }} />
        <button className="search-btn" onClick={
            () => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
                console.log(data.length)
            }
        }>Search</button>
    </div>

    <div className="restaurant-list">
        {
            filteredRestaurants?.length > 0 ? (
                filteredRestaurants.map((restaurant) => (
                    <Link to={
                        "restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestaurantCard {...restaurant?.data} />
                        </Link>
                ))
            ) : (
                <h1> Restaurant Not Found! </h1>
            )
        }
    </div>
    </>
    );
};

export default Body;