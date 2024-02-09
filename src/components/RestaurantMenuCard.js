import { ALTERNATIVE_IMAGE_URL, img_cdn_url } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuCard = ({ name, price, imageId }) => {
  const dispatch = useDispatch();

  const addFoodItem = (name, price, imageId) => {
    const item = {name: name, price: price, imageId: imageId}
    dispatch(addItem(item));
  };

  return (
    <div className="bg-card-color w-64 rounded-lg shadow-md p-4 m-4">
      <img className="rounded-md w-[224px] h-[141px]" src={imageId ? (img_cdn_url + imageId) : ALTERNATIVE_IMAGE_URL} />
      <div className="h-16 justify-center">
        <h3 className="line-clamp-2 pt-2 font-semibold">{name}</h3>
      </div>
      <div className="h-8 justify-center">
        <p className="line-clamp-2 text-xl font-bold">{price / 100} Rs</p>
      </div>
      <div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 m-2 rounded-full transform hover:-translate-y-1 hover:scale-110"
          onClick={() => addFoodItem(name, price, imageId)}
        >
          Add item
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
