import { useSelector } from "react-redux";
import { img_cdn_url } from "../constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += item.price;
    });
    setTotal(newTotal);
  }, [cartItems]);

  return (
    <>
      <h1 className="font-bold text-3xl p-2 m-2">
        Cart Items - {cartItems.length}
      </h1>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-card-color w-64 rounded-lg shadow-md p-4 m-4 flex flex-col items-center"
          >
            <img
              className="w-full"
              src={img_cdn_url + item.cloudinaryImageId}
            />
            <div className="h-16 justify-center text-xl">
              <h3>{item.name}</h3>
            </div>
            <div className="text-xl">Price: {item.price / 100}</div>
            <div className="my-2">
              <button
                className="p-2 text-white rounded-md bg-green-500 border-none outline-none cursor-pointer text-base font-normal transition-bg-ease-in-out duration-300 hover:bg-green-700"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 m-2 font-bold">
        <h1 className="text-3xl">To Pay - {total / 100}(Rs)</h1>
      </div>
      <div>
        <button
          className="p-2.5 m-2.5 text-white rounded-md bg-green-500 border-none outline-none cursor-pointer text-base font-normal transition-bg-ease-in-out duration-300 hover:bg-green-700"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
