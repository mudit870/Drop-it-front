// import React, { useMemo } from "react";
// import { Order } from "./order";

// const OrderDetails = () =>{
//   const columns = useMemo(() =>[
//       {
//         Header:'Order Name',
//         accessor:'order_name',
//       },
//       {
//         Header:'From',
//         accessor:'from',
//       },
//       {
//         Header:'To',
//         accessor:'to',
//       },
//       {
//         Header:'Price',
//         accessor:'price',
//       },
//       {
//         Header:'Total Bids',
//         accessor:'total_bids',
//       },
//       {
//         Header:'My Bid',
//         accessor:'my_bid',
//       },
//       {
//         Header:'Actions',
//         accessor:'action',
//       }], []
//     );
  
//   const data = useMemo(() =>[
//       {
//       order_name: "Pur Value",
//       from: "06 Hoffman Junction",
//       to: "50 Dakota Way",
//       price: "$747.27",
//       total_bids: 20,
//       my_bid: 414,
//       action: true
//     }, 
//     {
//       order_name: "Juice - Apple Cider",
//       from: "84170 Bobwhite Alley",
//       to: "26019 Banding Parkway",
//       price: "$602.37",
//       total_bids: 18,
//       my_bid: 411,
//       action: false
//     }, 
//     {
//       order_name: "Pork - Bacon Cooked Slcd",
//       from: "0164 John Wall Place",
//       to: "8 Tony Parkway",
//       price: "$64.21",
//       total_bids: 10,
//       my_bid: 306,
//       action: false
//     },  
//     {
//       order_name: "Country Roll",
//       from: "167 Northport Circle",
//       to: "32582 High Crossing Pass",
//       price: "$586.71",
//       total_bids: 4,
//       my_bid: 848,
//       action: true
//     }, 
//     {
//       order_name: "Couscous",
//       from: "05879 Macpherson Circle",
//       to: "29967 Commercial Park",
//       price: "$374.30",
//       total_bids: 15,
//       my_bid: 104,
//       action: false
//     }, 
//     {
//       order_name: "Veal - Heart",
//       from: "461 Haas Street",
//       to: "5967 Montana Alley",
//       price: "$706.72",
//       total_bids: 18,
//       my_bid: 142,
//       action: false
//     }, {
//       order_name: "Buffalo - Short Rib Fresh",
//       from: "2835 Springview Court",
//       to: "1 Talisman Avenue",
//       price: "$657.14",
//       total_bids: 10,
//       my_bid: 332,
//       action: false
//     }, {
//       order_name: "Veal - Nuckle",
//       from: "859 Katie Pass",
//       to: "59 4th Lane",
//       price: "$693.02",
//       total_bids: 9,
//       my_bid: 315,
//       action: false
//     }, {
//       order_name: "Tomatoes - Yellow Hot House",
//       from: "0359 Kennedy Pass",
//       to: "24183 Maywood Parkway",
//       price: "$574.68",
//       total_bids: 20,
//       my_bid: 913,
//       action: false
//     }, {
//       order_name: "The Pop Shoppe - Cream Soda",
//       from: "46619 Hallows Park",
//       to: "0 Schlimgen Trail",
//       price: "$740.46",
//       total_bids: 16,
//       my_bid: 742,
//       action: false
//     }, {
//       order_name: "Sprouts - Peppercress",
//       from: "30 North Place",
//       to: "7 Rusk Alley",
//       price: "$458.70",
//       total_bids: 11,
//       my_bid: 74,
//       action: true
//     }, {
//       order_name: "Wine - Cava Aria Estate Brut",
//       from: "7470 Hoepker Place",
//       to: "38 Swallow Junction",
//       price: "$516.43",
//       total_bids: 11,
//       my_bid: 308,
//       action: true
//     },  {
//       order_name: "Pasta - Rotini, Colour, Dry",
//       from: "12940 Buena Vista Avenue",
//       to: "7640 Farmco Terrace",
//       price: "$98.08",
//       total_bids: 7,
//       my_bid: 798,
//       action: true
//     }], []
//   );

//   return(
//     <div>
//       <Order 
//       data = {data}
//       columns={columns}
//        />
//     </div>
//   );
// }

// export default OrderDetails;
// {
//   "order_name": "Loquat",
//   "from": "3310 Ruskin Avenue",
//   "to": "50892 Mayfield Drive",
//   "price": "$405.71",
//   "total_bids": 4,
//   "my_bid": 379,
//   "action": true
// }, {
//   "order_name": "Foil Wrap",
//   "from": "2 Larry Alley",
//   "to": "3150 Vermont Way",
//   "price": "$789.52",
//   "total_bids": 17,
//   "my_bid": 415,
//   "action": true
// }, {
//   "order_name": "Bag Stand",
//   "from": "01245 Clemons Pass",
//   "to": "0828 Village Green Alley",
//   "price": "$29.92",
//   "total_bids": 17,
//   "my_bid": 755,
//   "action": true
// }, {
//   "order_name": "Beef Striploin Aaa",
//   "from": "86010 Lukken Plaza",
//   "to": "3 Clarendon Court",
//   "price": "$349.64",
//   "total_bids": 20,
//   "my_bid": 996,
//   "action": true
// }, {
//   "order_name": "Juice - Happy Planet",
//   "from": "0333 Butterfield Street",
//   "to": "47 Homewood Hill",
//   "price": "$745.95",
//   "total_bids": 12,
//   "my_bid": 61,
//   "action": false
// }, {
//   "order_name": "Banana",
//   "from": "5221 Rusk Plaza",
//   "to": "25006 Graceland Plaza",
//   "price": "$585.18",
//   "total_bids": 9,
//   "my_bid": 491,
//   "action": false
// }, {
//   "order_name": "Onion - Dried",
//   "from": "68778 Tomscot Terrace",
//   "to": "99463 Helena Lane",
//   "price": "$664.76",
//   "total_bids": 15,
//   "my_bid": 371,
//   "action": false
// }, {
//   "order_name": "Strawberries - California",
//   "from": "9 Macpherson Pass",
//   "to": "4440 Sachs Crossing",
//   "price": "$171.35",
//   "total_bids": 14,
//   "my_bid": 729,
//   "action": false
// }, {
//   "order_name": "Cumin - Whole",
//   "from": "8 Forest Dale Point",
//   "to": "41085 Carey Alley",
//   "price": "$293.29",
//   "total_bids": 3,
//   "my_bid": 551,
//   "action": true
// }, {
//   "order_name": "Plaintain",
//   "from": "5802 Springs Lane",
//   "to": "75106 Maryland Plaza",
//   "price": "$898.29",
//   "total_bids": 13,
//   "my_bid": 412,
//   "action": true
// }, {
//   "order_name": "Wine - Harrow Estates, Vidal",
//   "from": "75 Brown Lane",
//   "to": "32147 Northland Avenue",
//   "price": "$473.45",
//   "total_bids": 17,
//   "my_bid": 275,
//   "action": true
// }, {
//   "order_name": "Pur Value",
//   "from": "4022 Knutson Road",
//   "to": "609 Lunder Street",
//   "price": "$137.66",
//   "total_bids": 5,
//   "my_bid": 219,
//   "action": true
// }, {
//   "order_name": "Beans - Kidney, Canned",
//   "from": "1717 Glacier Hill Road",
//   "to": "27 Huxley Avenue",
//   "price": "$675.40",
//   "total_bids": 11,
//   "my_bid": 651,
//   "action": false
// }, {
//   "order_name": "Lentils - Green, Dry",
//   "from": "62 Forest Run Crossing",
//   "to": "449 Kinsman Center",
//   "price": "$448.68",
//   "total_bids": 9,
//   "my_bid": 725,
//   "action": true
// }, {
//   "order_name": "Pork - Back, Long Cut, Boneless",
//   "from": "3228 Marcy Trail",
//   "to": "67717 Debra Lane",
//   "price": "$164.39",
//   "total_bids": 9,
//   "my_bid": 935,
//   "action": false
// }, {
//   "order_name": "Crackers - Graham",
//   "from": "56 Fallview Street",
//   "to": "932 Nelson Lane",
//   "price": "$187.82",
//   "total_bids": 20,
//   "my_bid": 609,
//   "action": false
// }, {
//   "order_name": "Appetizer - Southwestern",
//   "from": "7066 Rockefeller Street",
//   "to": "13 Beilfuss Circle",
//   "price": "$932.62",
//   "total_bids": 11,
//   "my_bid": 971,
//   "action": true
// }, {
//   "order_name": "Mushroom - Portebello",
//   "from": "09 Maple Wood Park",
//   "to": "24 Loftsgordon Trail",
//   "price": "$240.23",
//   "total_bids": 8,
//   "my_bid": 34,
//   "action": false
// }, {
//   "order_name": "Beef - Diced",
//   "from": "12935 Bonner Hill",
//   "to": "8 Kipling Park",
//   "price": "$705.35",
//   "total_bids": 8,
//   "my_bid": 242,
//   "action": true
// }, {
//   "order_name": "Table Cloth 72x144 White",
//   "from": "5 Lake View Junction",
//   "to": "88261 Ryan Drive",
//   "price": "$424.00",
//   "total_bids": 9,
//   "my_bid": 463,
//   "action": false
// }, {
//   "order_name": "Cheese - Le Cru Du Clocher",
//   "from": "35929 Melrose Place",
//   "to": "9573 Pine View Drive",
//   "price": "$304.17",
//   "total_bids": 8,
//   "my_bid": 263,
//   "action": false
// }, {
//   "order_name": "Baking Soda",
//   "from": "83 Oakridge Avenue",
//   "to": "981 Menomonie Road",
//   "price": "$752.45",
//   "total_bids": 1,
//   "my_bid": 719,
//   "action": false
// }, {
//   "order_name": "Truffle Shells - Semi - Sweet",
//   "from": "359 Ruskin Trail",
//   "to": "20410 Autumn Leaf Street",
//   "price": "$95.00",
//   "total_bids": 8,
//   "my_bid": 194,
//   "action": true
// }, {
//   "order_name": "Tilapia - Fillets",
//   "from": "78 Dennis Place",
//   "to": "4726 Fair Oaks Court",
//   "price": "$673.08",
//   "total_bids": 1,
//   "my_bid": 806,
//   "action": true
// }, {
//   "order_name": "Table Cloth 90x90 White",
//   "from": "32 Rigney Center",
//   "to": "0021 Stuart Alley",
//   "price": "$866.55",
//   "total_bids": 11,
//   "my_bid": 833,
//   "action": false
// }, {
//   "order_name": "Chinese Foods - Chicken",
//   "from": "88874 Banding Drive",
//   "to": "4665 Annamark Pass",
//   "price": "$434.01",
//   "total_bids": 7,
//   "my_bid": 640,
//   "action": true
// }, {
//   "order_name": "Cattail Hearts",
//   "from": "34885 Paget Crossing",
//   "to": "585 Utah Hill",
//   "price": "$783.25",
//   "total_bids": 1,
//   "my_bid": 774,
//   "action": false
// }, {
//   "order_name": "Rice - Brown",
//   "from": "01 Cardinal Street",
//   "to": "08897 Union Drive",
//   "price": "$170.55",
//   "total_bids": 16,
//   "my_bid": 51,
//   "action": false
// }, {
//   "order_name": "Spaghetti Squash",
//   "from": "42 Little Fleur Point",
//   "to": "0302 Lakeland Pass",
//   "price": "$406.12",
//   "total_bids": 7,
//   "my_bid": 562,
//   "action": true
// }, {
//   "order_name": "Island Oasis - Lemonade",
//   "from": "47 Monica Way",
//   "to": "557 Anderson Court",
//   "price": "$363.70",
//   "total_bids": 7,
//   "my_bid": 635,
//   "action": false
// }, {
//   "order_name": "Oil - Coconut",
//   "from": "8471 Cordelia Park",
//   "to": "352 Walton Crossing",
//   "price": "$91.79",
//   "total_bids": 19,
//   "my_bid": 97,
//   "action": false
// }, {
//   "order_name": "Crackers - Water",
//   "from": "8 Sherman Trail",
//   "to": "70 Green Junction",
//   "price": "$340.87",
//   "total_bids": 6,
//   "my_bid": 313,
//   "action": false
// }, {
//   "order_name": "Chicken Breast Wing On",
//   "from": "65 Logan Street",
//   "to": "01 Loeprich Circle",
//   "price": "$812.53",
//   "total_bids": 14,
//   "my_bid": 577,
//   "action": false
// }, {
//   "order_name": "Energy Drink Red Bull",
//   "from": "49 Rusk Drive",
//   "to": "42853 Texas Way",
//   "price": "$863.55",
//   "total_bids": 13,
//   "my_bid": 240,
//   "action": false
// }, {
//   "order_name": "Island Oasis - Sweet And Sour Mix",
//   "from": "6 Oxford Place",
//   "to": "3 Hayes Place",
//   "price": "$447.60",
//   "total_bids": 12,
//   "my_bid": 144,
//   "action": true
// }, {
//   "order_name": "Trout - Rainbow, Fresh",
//   "from": "703 1st Terrace",
//   "to": "120 Sunbrook Trail",
//   "price": "$23.07",
//   "total_bids": 5,
//   "my_bid": 132,
//   "action": true
// }, {
//   "order_name": "Cheese - Comtomme",
//   "from": "040 Glacier Hill Hill",
//   "to": "8 Truax Center",
//   "price": "$669.77",
//   "total_bids": 4,
//   "my_bid": 640,
//   "action": true
// },