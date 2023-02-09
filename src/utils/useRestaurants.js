import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        // API calls
        const data = await fetch(FETCH_RESTAURANT_URL)
        const json = await data.json();
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];

}

export default useRestaurants;