import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    const menuData =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (menuData) {
      const items = menuData
        .filter((menu) => menu?.card?.card?.itemCards)
        .map((menu) => menu.card.card.itemCards)
        .flat();
      const extractedMenuItems = items.map((item) => ({
        name: item?.card?.info?.name,
        price: item?.card?.info?.price,
        imageId: item?.card?.info?.imageId
      }));
      setMenuItems(extractedMenuItems);
    }
  }

  return menuItems;
};

export default useRestaurantMenu;
