import React from "react"; 
import ReactDOM from "react-dom/client";

/* 

    Header
    - Logo
    - Nav items
    - Cart
    Body
    - Search
    - Restaurant list
     - Restaurant Card
        - Image
        - Name
        - Rating
        - Cuisine
    Footer
    - Links
    - Copyright
        
*/

const Title = () => (
    <a href="/">
    <img src="https://images-platform.99static.com/nMPDdzn3g5qcYI75Cm9U32Rt83s=/500x500/top/smart/99designs-contests-attachments/19/19919/attachment_19919182"
    alt="logo" className="logo" />
    </a>
);

// Composing Components
const Header = () => {
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "286810",
          "name": "Jassi De Parathe",
          "uuid": "270a9af2-eaa3-41fa-b592-35343136a060",
          "city": "10",
          "area": "Vastrapur",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "t2pwlonheydts56xtycs",
          "cuisines": [
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 0.10000000149011612,
          "slugs": {
            "restaurant": "jassi-de-parathe-vastrapur-vastrapur",
            "city": "ahmedabad"
          },
          "cityState": "10",
          "address": "28, Sardar Centre, Vastrapur, Ahmedabad,Vastrapur,Ahmedabad",
          "locality": "Sardar Centre",
          "parentId": 109840,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "286810",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 0.10000000149011612,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "37942",
        "name": "KFC",
        "uuid": "328cb7fc-bd19-42dc-861a-cf3c07b81f71",
        "city": "10",
        "area": "Prahlad Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [
        
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
        "restaurant": "kfc-pushpak-hills-prahlad-nagar",
        "city": "ahmedabad"
        },
        "cityState": "10",
        "address": "Shop No 13GF,100 Feet Road , Pushpak Hills, Prahlad Nagar ,Vejalpur,Ahmedabad, Gujarat : 380051",
        "locality": "Pushpak Hills",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
            {
            "meta": "40% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "40% off up to ₹80 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
            "type": "PROMOTED"
        }
        ],
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5715677~p=4~eid=00000185-aa9b-f895-31c6-458600220479",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "37942",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "37691",
          "name": "McDonald's",
          "uuid": "0a9fdca2-7e68-4e8c-b16a-48dee5ee9d42",
          "city": "10",
          "area": "Ramdev Nagar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "7bb739d7f6ae8b4ce8ed590765dffd2f",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "mcdonald-wide-angle-navrangpura",
            "city": "ahmedabad"
          },
          "cityState": "10",
          "address": "Shop no. 3 Ground floor, Wide Angle Multiplex,SG highway TP Scheme No.6, FF No. 158, village- Jodhpur, Ahmedabad- 380015",
          "locality": "Wide Angle",
          "parentId": 630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5715936~p=16~eid=00000185-aa9b-f895-31c6-458a00221014",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "37691",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "37556",
        "name": "Burger King",
        "uuid": "1ddcbdda-7a11-4c2c-9ae4-a14326daa72b",
        "city": "10",
        "area": "Memnagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "xpcgcnznf4hjpj1j0nrb",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "tags": [
        
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
        "restaurant": "burger-king-himalaya-mall-vastrapur",
        "city": "ahmedabad"
        },
        "cityState": "10",
        "address": "104 A Himalaya Mall, Drive in Road , Memnagar , Ahmedabad",
        "locality": "Himalaya Mall, Gurukul",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
            {
            "meta": "60% off | Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "37556",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "198341",
          "name": "The Biryani Life",
          "uuid": "90782cfc-b5c1-4d7a-aafc-bdd5da8fb464",
          "city": "10",
          "area": "Vastrapur",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "z5viqqdvudysvdepahmr",
          "cuisines": [
            "Biryani",
            "Hyderabadi",
            "Lucknowi",
            "North Indian",
            "Mughlai",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "slaString": "17 MINS",
          "lastMileTravel": 0.10000000149011612,
          "slugs": {
            "restaurant": "the-biryani-life-hotel-shahi-palace-vastrapur",
            "city": "ahmedabad"
          },
          "cityState": "10",
          "address": "SHOP NO 2, HOTEL SHAHI PALACE ,VASTRAPUR LAKE, AHMEDABAD, GUJARAT",
          "locality": "Reliance Lane",
          "parentId": 8496,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "198341",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "lastMileTravel": 0.10000000149011612,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
    {
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "70147",
        "name": "Food On Way",
        "uuid": "35b27ce0-70d5-474c-8d88-8a71a488f744",
        "city": "10",
        "area": "Vastrapur",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "zxjuokhvejeediqr5e4f",
        "cuisines": [
        "North Indian",
        "Chinese",
        "Gujarati",
        "Thalis",
        "Biryani",
        "Punjabi",
        "Indian",
        "Beverages",
        "Salads"
        ],
        "tags": [
        
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
        "restaurant": "food-on-way-vastrapur-vastrapur",
        "city": "ahmedabad"
        },
        "cityState": "10",
        "address": "GROUND FLOOR, SURVEY NO: 14/1, 153 PAIKI, OPP,KAMNATH MAHADEV MANDIR, VASTRAPUR LAKE, VASTRAPUR, AHMEDABAD-380015",
        "locality": "Opp. Kamnath Mahadev Mandir",
        "parentId": 5264,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
        
        ],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
            {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
            {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [
        
        ],
        "feeDetails": {
        "fees": [
            
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [
            
        ],
        "textBased": [
            
        ],
        "textExtendedBadges": [
            
        ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "70147",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
    },
    "subtype": "basic"
    },
]

// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//         + props.restaurant.data?.cloudinaryImageId}/>
//             <h2>{props.restaurant.data?.name}</h2>
//             <h3>{props.restaurant.data?.cuisines.join(', ')}</h3>
//             <h4>{props.restaurant.data?.avgRating} stars</h4>
//         </div>
//     )
// }

// destructuring props

// const RestaurantCard = ({restaurant}) => {
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//         + restaurant.data?.cloudinaryImageId}/>
//             <h2>{restaurant.data?.name}</h2>
//             <h3>{restaurant.data?.cuisines.join(', ')}</h3>
//             <h4>{restaurant.data?.avgRating} stars</h4>
//         </div>
//     )
// }

// const RestaurantCard = ({restaurant}) => {
//     const {name, cuisines, avgRating, cloudinaryImageId} = restaurant.data;
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//         + cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(', ')}</h3>
//             <h4>{avgRating} stars</h4>
//         </div>
//     )
// }

// destructing all in the fly

// const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
//         + cloudinaryImageId}/>
//             <h2>{name}</h2>
//             {/* <h3>{cuisines.join(', ')}</h3> */}
//             <h4>{avgRating} stars</h4>
//         </div>
//     )
// }

// final optimization

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <div>{avgRating} stars</div>
        </div>
    )
}

// props
// const Body = () => {
//     return ( 
//     <div className="restaurant-list">
//         <RestaurantCard restaurant = {restaurantList[0]}/>
//         <RestaurantCard restaurant = {restaurantList[1]}/>
//         <RestaurantCard restaurant = {restaurantList[2]}/>
//         <RestaurantCard restaurant = {restaurantList[3]}/>
//         <RestaurantCard restaurant = {restaurantList[4]}/>
//         <RestaurantCard restaurant = {restaurantList[5]}/>
//     </div>
//     );
// };

// destructing all in the fly

// const Body = () => {
//     return ( 
//     <div className="restaurant-list">
//         <RestaurantCard name = {restaurantList[0].data.name}/>
//         <RestaurantCard name = {restaurantList[1].data.name}/>
//         <RestaurantCard avgRating = {restaurantList[0].data.avgRating}/>
//         <RestaurantCard avgRating = {restaurantList[1].data.avgRating}/>
//         <RestaurantCard cloudinaryImageId = {restaurantList[0].data.cloudinaryImageId}/>
//         <RestaurantCard cloudinaryImageId = {restaurantList[1].data.cloudinaryImageId}/>
//     </div>
//     );
// };

// final optimization

const Body = () => {
    return ( 
    <div className="restaurant-list">
        {/* <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
        <RestaurantCard {...restaurantList[3].data}/>
        <RestaurantCard {...restaurantList[4].data}/>
        <RestaurantCard {...restaurantList[5].data}/> */}
        
        {restaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
        })}

    </div>
    );
};

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
};

const AppLayout = () => {
    return (
        <>  
            <Header/>
            <Body />
            <Footer/>
        </>
    );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<AppLayout />);     