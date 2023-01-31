import { img_cdn_url } from "../constants";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src={img_cdn_url
        + cloudinaryImageId}/>
        <div className="card-name"><h3>{name}</h3></div>
        <div className="card-cuisines"><p>{cuisines.join(', ')}</p></div>
        <div>{avgRating} stars</div>
        </div>
    )
}

export default RestaurantCard;