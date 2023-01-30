import { useParams } from "react-router-dom";
import { img_cdn_url } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const restaurant = useRestaurantMenu(resId);

    return (!restaurant) ? (
        <Shimmer />
        ) : (
        <div className="menu">
            <div className="menu-name"> {restaurant?.name} </div>
            <img src={restaurant?.cloudinaryImageId && img_cdn_url + restaurant?.cloudinaryImageId} className="menu-image"/>
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