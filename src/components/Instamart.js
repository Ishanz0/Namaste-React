import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible, sectionId}) => {
  return (
    <div className="p-5 m-5 border-t border-gray-400">
      <h3 className="text-xl font-semibold cursor-pointer" onClick={() => setIsVisible(isVisible === sectionId ? "" : sectionId)}>
        {title}
        <span className="ml-2 transition duration-200 ease-in-out transform rotate-90">
          {isVisible === sectionId ? "▴" : "▾"}
        </span>
      </h3>
      <div className={`${isVisible === sectionId ? "block" : "hidden"}`}>
        <h5 className="pt-2">{description}</h5>
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <Section 
        sectionId="category"
        isVisible={visibleSection}
        title="Categories" 
        setIsVisible={setVisibleSection} 
        description="The categories section of Swiggy Instamart lists various categories of grocery items that are available for delivery. Some of the categories include Fruits & Vegetables, Dairy & Eggs, Beverages, Snacks & Branded Foods, Household, Personal Care, and more. Customers can browse through these categories to find the items they need and place an order for delivery."
      />
      <Section 
        sectionId="Household"
        isVisible={visibleSection}
        title="Household favourites" 
        setIsVisible={setVisibleSection} 
        description="Swiggy Instamart's Household Favourites section is a collection of essential household items and groceries that are frequently purchased by customers. This section includes items such as cleaning supplies, personal care products, snacks, beverages, and other daily use items. The items listed in this section are carefully curated to cater to the most common needs of customers, making it convenient for them to purchase these items in one go. The Household Favourites section is designed to save customers time and effort in shopping for these items, as they can be ordered quickly and easily through the Swiggy Instamart app."
      />
      <Section 
        sectionId="Fizz"
        isVisible={visibleSection}
        title="Fizz up your life!" 
        setIsVisible={setVisibleSection} 
        description="The Fizz Up Your Life! section on Swiggy Instamart is likely a marketing campaign or promotional area that highlights the availability of carbonated drinks, such as soda or sparkling water, on the platform. The purpose of this section is likely to encourage customers to order these drinks and add a fun and refreshing element to their food delivery experience. The phrase Fizz Up Your Life! suggests that these drinks will add excitement and energy to the customer's day."
      />
    </div>
  );
};

export default Instamart;