import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
}

const Body = () => { 

    const [searchText, setSearchText] = useState("");  // to create state variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // empty dependency array => once after rendering
    // dependency array [searchText] => once after rendering + everytime after rerendering (my searchtext changes)
    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        // API calls
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0384171&lng=72.5288016&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null;

    // if (filteredRestaurants.length === 0) return <h1> No Restaurants Found! </h1>

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

        {filteredRestaurants?.map((restaurant) => {
            return (
                (filteredRestaurants.length > 0) ? (
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                ) : (
                    <Shimmer />
                )
            )
        })}
    </div>
    </>
    );
};

export default Body;