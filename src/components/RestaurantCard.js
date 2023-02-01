import { img_cdn_url } from "../constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    
    const {user} = useContext(userContext);

    return (
        <div className="bg-card-color w-64 rounded-lg shadow-md p-4 m-4">
            <img className="w-full" src={img_cdn_url
        + cloudinaryImageId}/>
        <div className="h-10 justify-center"><h3>{name}</h3></div>
        <div className="h-24 justify-center"><p>{cuisines.join(', ')}</p></div>
        <div>{avgRating} stars</div>
        {/* <div>{user.name}</div> */}
        </div>
    )
}

export default RestaurantCard;