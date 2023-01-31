import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {

    const [restaurant, setRestaurant] = useState({});

    // get restaurant data from API
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+resId)
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    // return that data
    return restaurant;

}

export default useRestaurantMenu;