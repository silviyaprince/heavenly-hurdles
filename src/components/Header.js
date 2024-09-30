import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { RiAddLine } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { PigeonLogo } from "../image";
import { IoMdMenu } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { productData } from '../data';
import { allSportsCategories,mensCollectionCategories,womensCollectionCategories } from '../data';
import { useState,useRef,useEffect } from 'react'


export function Header() {
  const [isFlyoutmenuopen,setisFlyoutmenuopen]=useState(false)
  
  const navigate=useNavigate()

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const dropdownRef = useRef(null);

  const handleShopClick = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log("Dropdown Open:", !isDropdownOpen);
    setisFlyoutmenuopen(false)
    console.log("Flyout Menu Open:",isFlyoutmenuopen );
  };
  const dropdown = [
    { name: 'DASHBOARD',  icon: MdSpaceDashboard ,handleClick:()=>navigate("/")},
    { name: 'STOCK',  icon: IoStorefrontSharp ,handleClick:()=>navigate("stock")},
    { name: 'SHOP', icon: HiShoppingBag ,handleClick:handleShopClick},
    { name: 'ADD STOCK',  icon: RiAddLine,handleClick:()=>navigate("addstock") },
    {name:'SIGN IN',icon: PiSignInBold,handleClick:()=>navigate("signin")},
    {name:'CONTACT US',icon: FaPhoneAlt,handleClick:()=>navigate("contactus")},
    {name:'SIGN OUT',icon: PiSignOutBold,handleClick:()=>navigate("signout")}
  ]
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
    setDropdownOpen(false);
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

  
  return (
    <div>
    <nav className=" flex w-full lg:w-full lg:h-40 lg:flex-1 flex-col ">
      <div className="lg:p-3  flex flex-row lg:flex-1 bg-primary2 h-24 lg:h-32    lg:gap-3 lg:justify-evenly justify-around  ">
      <Popover className="lg:hidden relative z-50">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      
      <IoMdMenu  onClick={()=>setisFlyoutmenuopen(!isFlyoutmenuopen)} className="block lg:hidden text-4xl text-white mt-6 ml-2" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute  -left-5 z-70 mt-5 flex w-64  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {dropdown.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <button onClick={item.handleClick} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </button>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>

    </Popover>
          
        <div className="flex flex-row justify-center">
          <div className="text-2xl xl:text-5xl xl:mr-60 md:mr-10 italic text-white font-display font-extrabold mt-7">
            Heavenly Hurdles
          </div>
          <img
            className="lg:hidden h-20 w-auto mt-2"
            src={PigeonLogo}
            alt="company logo"
          />
        </div>

        <IoNotifications className="hidden md:block text-white text-3xl mt-7" />
        <BsCartFill className="text-white text-3xl mt-7" />
        <div className="hidden lg:block relative mt-7 ">
          <HiSearch className="absolute text-2xl  mt-1 " />
          <input
            type="text"
            placeholder="Search..."
            className="  text-2xl px-3 pl-12 focus:outline-none active:outline-none h-10 w-20 xl:w-[34rem] lg:w-40 border  border-gray-500 md:border-gray-500 rounded-sm"
          />
        </div>
        <button
          // onClick={()=>navigate("/dashboard")}
          className=" hidden md:block  lg:block mt-7   h-10 text-primary3 bg-white px-3 py-2 text-white font-display font-semibold rounded hover:cursor-pointer">
          MODE
        </button>
      </div>
      <div className="lg:hidden relative mt-4 mx-auto">
        <HiSearch className="absolute text-2xl  mt-1 " />
        <input
          type="text"
          placeholder="Search..."
          className="  text-2xl px-3 pl-12 focus:outline-none active:outline-none h-10 w-[28rem] md:w-[34rem] border  border-gray-500 md:border-gray-500 rounded-sm"
        />
      </div>
    </nav>
    <div className="flex-grow relative">
    {isDropdownOpen && (
      <div
        ref={dropdownRef}
        className="absolute left-0 top-0 w-full h-screen bg-white shadow-lg z-60">
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
     
    )}
    </div>
    </div>
  
  );
}

