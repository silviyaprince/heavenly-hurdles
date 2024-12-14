import { useState, createContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const[searchTerm,setSearchTerm]=useState("")
  
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [user, setUser] = useState(null); // Store user object (including role)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const getDefaultCart = () => {
    let cart = {};
    console.log(cart);
    for (let i = 1; i < displayedProducts.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  


  const addtocart = (productId) => {
    setCartItems((prevCart) => {
      const currentAmount = prevCart[productId] || 0; // Handle undefined cases
      console.log(
        "Current amount for product ID",
        productId,
        ":",
        currentAmount
      ); // Debug log
      return {
        ...prevCart,
        [productId]: currentAmount + 1, // Increment quantity
      };
    });
  };

  const removefromcart = (productId) => {
    setCartItems((prevCart) => {
      const currentAmount = prevCart[productId] || 0;
      return { ...prevCart, [productId]: currentAmount - 1 };
    });
  };

  // const getTotalCartAmount=()=>{
  //     let totalAmount=0;
  //     console.log("Cart Items:", cartItems);
  //   console.log("Displayed Products:", displayedProducts);

  //     for(const item in cartItems){
  //         if(cartItems[item]>0){
  //             const itemInfo=displayedProducts.find((product)=>product.id===(item));
  //             console.log(itemInfo)
  //             totalAmount+=cartItems[item]*itemInfo.price;
  //         }
  //         }
  //         return totalAmount;
  //     };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Check what itemId is and the cartItems[itemId] value
        console.log("itemId:", itemId, "Quantity:", cartItems[itemId]);

        const itemInfo = displayedProducts.find(
          (product) => product.id === Number(itemId) // Convert itemId to a number
        );

        // Check if itemInfo exists and its price
        if (itemInfo) {
          console.log("Found itemInfo:", itemInfo);
          const numericPrice = Number(itemInfo.price.replace(/,/g, ""));
          totalAmount += cartItems[itemId] * numericPrice;
        } else {
          console.log(
            `Product with ID ${itemId} not found in displayedProducts`
          );
        }
      }
    }

    console.log("Total Amount:", totalAmount);
    return totalAmount;
  };

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  //below are the variables and functions for drop down functionality under shop menu

  const allSportsCategories = [
    {
      title: "Outdoor Sports",
      items: [
        "Hiking&Trekking",
        "Camping",
        "Skiing&Snowboarding",
        "RockClimbing",
        "Fishing",
        "HorseRiding",
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

  const [productData, setProductData] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);

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
    // const categoryProducts = productData;

    // if (categoryProducts) {
    setDisplayedProducts(productData);
    // } else {
    //   setDisplayedProducts([]);
    // }
    // console.log(categoryProducts)
    console.log(displayedProducts[0]);
    setDropdownOpen(false);
    navigate(`products/${item}`);
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
//end of dropdown functionality under shop menu


  const getProducts = async () => {
    if (selectedCategoryItem) {
      try {
        const response = await fetch(
          `${API}/products?category=${selectedCategoryItem}`
        );
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  useEffect(() => {
    if (selectedCategoryItem) {
      getProducts();
    }
  }, [selectedCategoryItem]);


  //dropdown  for addstock menu
  const categories={
    allSportsCategories: [
      {
        title: "Outdoor Sports",
        items: [
          "Hiking&Trekking",
          "Camping",
          "Skiing&Snowboarding",
          "RockClimbing",
          "Fishing",
          "HorseRiding",
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
    ],
    
     mensCollectionCategories : [
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
    ],
    womensCollectionCategories :[
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
    ]

  }
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
    setSelectedItem("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
    setSelectedItem("");
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const getSubcategories = () => {
    if (selectedCategory) {
      return categories[selectedCategory];
    }
    return [];
  };

  const getItems = () => {
    const subcategory = getSubcategories().find((cat) => cat.title === selectedSubcategory);
    return subcategory ? subcategory.items : [];
  };
  //end of dropdown under addstock menu


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
        setProductData,
        allSportsCategories,
        mensCollectionCategories,
        womensCollectionCategories,
        handleShopClick,
        handleClickOutside,
        getDefaultCart,
        addtocart,
        cartItems,
        setCartItems,
        removefromcart,
        getTotalCartAmount,
        totalAmount,
        selectedCategory,handleCategoryChange,categories,selectedSubcategory,handleSubcategoryChange,getSubcategories,selectedItem,handleItemChange,getItems,
        user,setUser,isAuthenticated,setIsAuthenticated,searchTerm,setSearchTerm
      }}>
      {children}
    </ProductContext.Provider>
  );
};
