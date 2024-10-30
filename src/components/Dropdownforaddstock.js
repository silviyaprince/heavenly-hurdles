import { useState } from "react";
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

export function Dropdownforaddstock(){

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
  
    return (
       
        <div>
      <div className="sm:col-span-3">
         <label htmlFor="productcategory" className="block text-sm font-medium leading-6 text-gray-900">
          Product category
        </label>
           <div className="mt-2"> 
        {/* Category Dropdown */}
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {Object.keys(categories).map((categoryKey) => (
            <option key={categoryKey} value={categoryKey}>
              {categoryKey.replace(/([A-Z])/g, " $1")} {/* Converts camelCase to spaced words */}
            </option>
          ))}
        </select>
        </div>
        </div>
  
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="productsubcategory" className="block text-sm font-medium leading-6 text-gray-900">
            Product subcategory
          </label>
          <div className="mt-2">
        {selectedCategory && (
          <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
            <option value="">Select Subcategory</option>
            {getSubcategories().map((subcategory) => (
              <option key={subcategory.title} value={subcategory.title}>
                {subcategory.title}
              </option>
            ))}
          </select>
        )}
        </div>
        </div>
  
        {/* Item Dropdown */}
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="productsubcategory" className="block text-sm font-medium leading-6 text-gray-900">
           Category Item
          </label>
          <div className="mt-2">
        {selectedSubcategory && (
          <select value={selectedItem} onChange={handleItemChange}>
            <option value="">Select Item</option>
            {getItems().map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
  </div>
  </div>
        {/* Display selected values */}
        {/* <div>
          <h4>Selected Values:</h4>
          <p>Category: {selectedCategory || "None"}</p>
          <p>Subcategory: {selectedSubcategory || "None"}</p>
          <p>Item: {selectedItem || "None"}</p>
        </div> */}
      </div>
      
    );
  }








