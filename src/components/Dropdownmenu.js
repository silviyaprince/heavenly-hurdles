import React from "react";
import { productData } from "../data";
import {
  allSportsCategories,
  mensCollectionCategories,
  womensCollectionCategories,
} from "../data";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export function Dropdownmenu() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);

  const dropdownRef = useRef(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const handleShopClick = () => {
    setDropdownOpen(!isDropdownOpen);
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
      console.log(displayedProducts);
    } else {
      setDisplayedProducts([]);
    }
    setDropdownOpen(false);
    navigate("productlist");
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

  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (!isDropdownOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute left-64 top-0 w-full h-screen bg-white shadow-lg z-10">
      <div className="p-5">
        <div className="flex space-x-5">
          <button
            onClick={() => handleOptionClick("All Sports")}
            className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
              selectedOption === "All Sports"
                ? "bg-fuchsia-800 text-white"
                : "text-black"
            }`}>
            ALL SPORTS
          </button>
          <button
            onClick={() => handleOptionClick("Men's Collection")}
            className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
              selectedOption === "Men's Collection"
                ? "bg-fuchsia-800 text-white"
                : "text-black"
            }`}>
            MEN'S COLLECTION
          </button>
          <button
            onClick={() => handleOptionClick("Women's Collection")}
            className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
              selectedOption === "Women's Collection"
                ? "bg-fuchsia-800 text-white"
                : "text-black"
            }`}>
            WOMEN'S COLLECTION
          </button>
        </div>
        <div className="mt-5">
          {selectedOption === "All Sports" && (
            <div className="flex flex-wrap gap-8">
              {allSportsCategories.map((category, index) => (
                <div key={index} className="flex flex-col w-64">
                  {/* Category Heading */}
                  <h3 className="text-lg font-bold mb-3 text-blue-700">
                    {category.title}
                  </h3>

                  {/* Category Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className="cursor-pointer hover:text-blue-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {selectedOption === "Men's Collection" && (
            <div className="flex flex-wrap gap-8">
              {mensCollectionCategories.map((category, index) => (
                <div key={index} className="flex flex-col w-64">
                  {/* Category Heading */}
                  <h3 className="text-lg font-bold mb-3 text-blue-700">
                    {category.title}
                  </h3>

                  {/* Category Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className="cursor-pointer hover:text-blue-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {selectedOption === "Women's Collection" && (
            <div className="flex flex-wrap gap-8">
              {womensCollectionCategories.map((category, index) => (
                <div key={index} className="flex flex-col w-64">
                  {/* Category Heading */}
                  <h3 className="text-lg font-bold mb-3 text-blue-700">
                    {category.title}
                  </h3>

                  {/* Category Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className="cursor-pointer hover:text-blue-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
