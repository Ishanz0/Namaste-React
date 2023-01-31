import { img_cdn_url } from "../constants";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className="bg-card-color w-64 rounded-lg shadow-md p-4 m-4">
            <img className="w-full" src={img_cdn_url
        + cloudinaryImageId}/>
        <div className="h-10 justify-center"><h3>{name}</h3></div>
        <div className="h-20 justify-center"><p>{cuisines.join(', ')}</p></div>
        <div>{avgRating} stars</div>
        </div>
    )
}

export default RestaurantCard;