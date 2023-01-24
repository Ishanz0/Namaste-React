import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_cdn_url } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    // Read a dynamic URL params
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=23.0384171&lng=72.5288016&menuId="+resId)
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    return (!restaurant) ? (
        <Shimmer />
        ) : (
        <div className="menu">
            <div className="menu-name"> {restaurant?.name} </div>
            <img src={img_cdn_url + restaurant?.cloudinaryImageId} className="menu-image"/>
            <div className="menu-rating"> {restaurant?.avgRating} stars</div>
            <div className="menu-price"> {restaurant?.costForTwoMsg} </div>
        <div className="menu-list">
            <h1> Menu </h1>
            {console.log(restaurant?.menu?.items)}
            <ul>
                {restaurant?.menu?.items && Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default RestaurantMenu;  