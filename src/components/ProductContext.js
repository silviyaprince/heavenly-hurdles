import { useState, createContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const productData = {
    Camping: [
      {
        id: 1,
        imageAlt: "camping1",
        pic: "https://contents.mediadecathlon.com/p2754239/b4c15b50e2f8c081cc55700c22a8301a/p2754239.jpg?format=auto&quality=70&f=650x0",
        name: "QUECHUA",
        rating: 8,
        description: "2 Person Camping Tent - MH100 Grey",
        price: 3,
        mrp: "2600",
        quantity: 34,
       
      },
      {
        id: 2,
        imageAlt: "camping2",
        pic: "https://contents.mediadecathlon.com/p1259842/2345530d33e5f5342a7311a10beaaa18/p1259842.jpg?format=auto&quality=70&f=650x0",
        name: "QUECHUA",
        rating: 8.6,
        description: "Camping Tent 2 Seconds - 2-Person",
        price: "4,999",
        mrp: "5,300",
        quantity: "",
      },
      {
        id: 3,
        imageAlt: "camping3",
        pic: "https://contents.mediadecathlon.com/p1801167/7de7cfb4280922bbcd9cb6f592477254/p1801167.jpg?format=auto&quality=70&f=650x0",
        name: "FORCLAZ",
        rating: 7,
        description: "Dome Trekking Tent - 2 person - MT100",
        price: "5,999",
        mrp: "6,200",
        quantity: "",
      },
      {
        id: 4,
        imageAlt: "camping4",
        pic: "https://contents.mediadecathlon.com/p760385/b152015dc9fa85853c9940c83d11fd7a/p760385.jpg?format=auto&quality=70&f=650x0",
        name: "QUECHUA",
        rating: 8.6,
        description: "Camping Stool (Foldable) - Green",
        price: "599",
        mrp: "650",
        quantity: "",
      },
    ],

    "Hiking & Trekking": [
      {
        pic: "https://contents.mediadecathlon.com/p2629724/00e95e29051097a1f98510f2775ade01/p2629724.jpg?format=auto&quality=70&f=650x0",
        name: "QUECHUA",
        rating: 9,
        description: "Hiking Backpack 20 L - NH Arpenaz 500",
        price: "1,699",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2303194/535edd73fc0a48a7253c0109f0458547/p2303194.jpg?format=auto&quality=70&f=650x0",
        name: "SOLOGNAC",
        rating: 7.6,
        description: "CARRY BAG 40L CAMO",
        price: "1,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2606576/a0f0668b934bd6008a774de8bf901a72/p2606576.jpg?format=auto&quality=70&f=650x0",
        name: "FORCLAZ",
        rating: 7.7,
        description: "Trekking Carry Bag - 100 L - DUFFEL 100 BASIC",
        price: "3,499",
      },
      {
        pic: "https://contents.mediadecathlon.com/p760385/b152015dc9fa85853c9940c83d11fd7a/p760385.jpg?format=auto&quality=70&f=650x0",
        name: "QUECHUA",
        rating: 8.6,
        description: "Camping Stool (Foldable) - Green",
        price: "599",
      },
    ],

    "Skiing & Snowboarding": [
      {
        pic: "https://contents.mediadecathlon.com/p2579004/314f43a6e65a068a01a96acda244287e/p2579004.jpg?format=auto&quality=70&f=768x0",
        name: "WEDZE",
        rating: 4.5,
        description: "Winter Gloves for Skiing GL100 Waterproof - Black",
        price: "899",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2264464/13f96d12113d6cf4338181e74397533f/p2264464.jpg?format=auto&quality=70&f=768x0",
        name: "WEDZE",
        rating: 4.5,
        description: "Winter Waterproof Gloves for Skiing -BLACK",
        price: "1,199",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2579695/189fb40d996949e0f05447bf24535d83/p2579695.jpg?format=auto&quality=70&f=768x0",
        name: "WEDZE",
        rating: 4.3,
        description: "Winter Gloves for Skiing- 550 HONEY/BLACK",
        price: "3,599",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2579018/a84cb59e0790fd3e81a97ee8d10995fe/p2579018.jpg?format=auto&quality=70&f=768x0",
        name: "WEDZE",
        rating: 4.6,
        description: "ADULT SKI HAT - SIMPLE - DUCK EGG BLUE",
        price: "299",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2764804/1997d899cf69c12ba934a39c5d45c53d/p2764804.jpg?format=auto&quality=70&f=1024x0",
        name: "WEDZE",
        rating: 4.6,
        description: "Adult ski helmet - PST 500 - light green",
        price: "2,499",
      },
    ],

    "Rock Climbing": [
      {
        pic: "https://contents.mediadecathlon.com/p1548908/80efccd3dff928d4055d3bb04c457ee7/p1548908.jpg?format=auto&quality=70&f=1024x0",
        name: "SIMOND",
        rating: 4.6,
        description:
          "Backpack 22L Simond for Hiking/Climbing/Mountaineering/Skiing/Snowboarding",
        price: "2,599",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1695342/b1054fbef2d5e215e2d16553c3968ac7/p1695342.jpg?format=auto&quality=70&f=1024x0",
        name: "SIMOND",
        rating: 4.4,
        description: "Mountaineering Bag 33 Litres - Alpinism 33 Blue",
        price: "2,599",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1343754/2194595a082806458a3f044b5d90ea26/p1343754.jpg?format=auto&quality=70&f=1024x0",
        name: "SIMOND",
        rating: 3.9,
        description: "MAKALU II Light Sleeping Bag -9° size L",
        price: "21,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2110831/a292e9c5038868713aadd4f8110de4de/p2110831.jpg?format=auto&quality=70&f=1024x0",
        name: "SIMOND",
        rating: 4.6,
        description: "ICE SCREW 19 CM",
        price: "4,499",
      },
    ],

    "Fitness Cardio": [
      {
        pic: "https://contents.mediadecathlon.com/p2688748/1b011f5deca3972f0bf7419299baf3df/p2688748.jpg?format=auto&quality=70&f=1024x0",
        name: "DOMYOS",
        rating: 4.1,
        description:
          "Treadmill RUN100E Foldable, Upto 14 kmph, 3% Incl, Smart, Low-Noise, Max 130 kg",
        price: "45,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1695342/b1054fbef2d5e215e2d16553c3968ac7/p1695342.jpg?format=auto&quality=70&f=1024x0",
        name: "DOMYOS",
        rating: 4.1,
        description: "Mini Stepper MS100",
        price: "4,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/m17159864/fb8080fe149d6e714802fe2befb123b4/m17159864.jpg?format=auto&quality=70&f=1024x0",
        name: "FLEXNEST",
        rating: 5.0,
        description:
          "Flexnest Flextread EZ (3 HP Peak) Manual Incline Motorized Treadmill with in-Built Bluetooth Speaker, Max Speed 14km/hr - Black",
        price: "19,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1962978/e21826bbafa1298677b4786079a0eff4/p1962978.jpg?format=auto&quality=70&f=1024x0",
        name: "DOMYOS",
        rating: 4.5,
        description: "Gym Stepper 100",
        price: "2,599",
      },
    ],

    "Body Building": [
      {
        pic: "https://contents.mediadecathlon.com/p2720245/2bb51934919b89faf649a33307e27e11/p2720245.jpg?format=auto&quality=70&f=1024x0",
        name: "CORENGTH",
        rating: 4.8,
        description:
          "2.5 kg Cross Training and Weight Training Hexagonal Dumbbell - Black",
        price: "999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1863566/2a872bd47bc3ee5c307c8000653147df/p1863566.jpg?format=auto&quality=70&f=1024x0",
        name: "CORENGTH",
        rating: 4.5,
        description: "Dumbbells and Bars Kit 50 kg Black",
        price: "12,999",
      },
      {
        pic: "https://contents.mediadecathlon.com/p1813680/c79ef2674467e77f3b60b0af55e0206b/p1813680.jpg?format=auto&quality=70&f=1024x0",
        name: "CORENGTH",
        rating: 4.6,
        description:
          "25 kg Weight Training Resistance Band for Home Gym Workout - Yellow",
        price: "699",
      },
      {
        pic: "https://contents.mediadecathlon.com/p2720084/bc81b71ae62687325d8428b7fa6ce7d7/p2720084.jpg?format=auto&quality=70&f=1024x0",
        name: "CORENGTH",
        rating: 4.6,
        description: "Gym Kettlebell 20 Kg Black Re",
        price: "5,999",
      },
    ],
  };

  const allSportsCategories = [
    {
      title: "Outdoor Sports",
      items: [
        "Hiking & Trekking",
        "Camping",
        "Skiing & Snowboarding",
        "Rock Climbing",
        "Fishing",
        "Horse Riding",
      ],
    },
    {
      title: "Fitness Sports & Yoga",
      items: ["Fitness Cardio", "Body Building", "Kids Sports", "Yoga"],
    },
    {
      title: "Water Sports",
      items: ["Swimming", "Sailing", "Surfing & Beach Sports"],
    },
    {
      title: "Racket Sports",
      items: ["Badminton", "Tennis", "Table tennis", "Squash"],
    },
    {
      title: "Team Sports",
      items: ["Football", "Basketball", "Cricket", "Volleyball", "Hockey"],
    },
    { title: "Running & Walking", items: ["Running", "Walking"] },
    { title: "Cycling", items: ["Cycling", "Cycle Servicing"] },
    { title: "Roller Sports", items: ["Skating", "Skateboarding", "Scooter"] },
  ];

  const mensCollectionCategories = [
    {
      title: "Men Topwear",
      items: [
        "Men Athleisure",
        "Men Cotton T-shirt",
        "Men Tank Tops",
        "Men Shirts",
        "Men Fleeces & Pullovers",
      ],
    },
    {
      title: "Men Bottomwear",
      items: [
        "Men Shorts",
        "Men Track Pants & Joggers",
        "Men Trousers & Chinos",
        "Men Tights & Compression",
      ],
    },
    {
      title: "Men Footwear",
      items: [
        "Men Sports Shoes",
        "Men Sandals",
        "Men Flip Flops & Aqua Shoes",
        "Men Running Shoes",
        "Men Football Boots",
        "Socks",
      ],
    },
    {
      title: "Men Jackets & Sweatshirts",
      items: [
        "Men Raincoat & Ponchos",
        "Men Winter Jackets",
        "Men Sports Jackets",
      ],
    },
    { title: "Men Innerwear", items: ["Men Thermals", "Men Brief Underwear"] },
  ];

  const womensCollectionCategories = [
    {
      title: "Women Top Wear",
      items: [
        "Women T-shirts",
        "Women Tank Tops",
        "Wome Crop Tops",
        "Women Swim Costumes",
        "Women Raincoats",
      ],
    },
    {
      title: "Women Footwear",
      items: [
        "Women Sports Shoes",
        "Women Flip Flops",
        "Women Walking Shoes",
        "Women Outdoor Shoes & Boots",
        "Socks",
      ],
    },
    {
      title: "Women Bottomwear",
      items: [
        "Women Shorts",
        "Women Leggings",
        "Women Track Pants",
        "Women Trousers",
        "Women Skirts",
      ],
    },
    {
      title: "Women Jackets",
      items: [
        "Women Raincoats",
        "Women Sweaters",
        "Women Winter Jackets",
        "Women Snow Jackets",
      ],
    },
    {
      title: "Women Innerwear",
      items: ["Sports Bra", "Women Thermal Innerwear"],
    },
  ];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const dropdownRef = useRef(null);
  const handleShopClick = () => {
    setDropdownOpen(!isDropdownOpen);
    navigate("shop");
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedCategoryItem(null);
    setDisplayedProducts([]); // Close dropdown after selecting an option
  };

  const handleItemClick = (item) => {
    setSelectedCategoryItem(item);
    const categoryProducts = productData[item];

    if (categoryProducts) {
      setDisplayedProducts(categoryProducts);
    } else {
      setDisplayedProducts([]);
    }
    console.log(displayedProducts[0]);
    setDropdownOpen(false);
    navigate("products");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <ProductContext.Provider
      value={{
        isDropdownOpen,
        setDropdownOpen,
        selectedOption,
        setSelectedOption,
        selectedCategoryItem,
        setSelectedCategoryItem,
        displayedProducts,
        setDisplayedProducts,
        dropdownRef,
        handleOptionClick,
        handleItemClick,
        productData,
        allSportsCategories,
        mensCollectionCategories,
        womensCollectionCategories,
        handleShopClick,
        handleClickOutside,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
