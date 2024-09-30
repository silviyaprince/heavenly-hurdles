import React from "react";
import { PigeonLogo } from "../image";
import { useState ,useRef,useEffect} from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
import { GrCart } from "react-icons/gr";
import { RiAddLine } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";
import { allSportsCategories,mensCollectionCategories,womensCollectionCategories } from '../data';
import { productData } from '../data';
import { Dropdownmenu } from "./Dropdownmenu";

export function Sidebar() {
  
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const dropdownRef = useRef(null);
  const handleShopClick = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log("Dropdown Open:", !isDropdownOpen);
    
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
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  
  const sidebartoplinks = [
    {
      label: "DASHBOARD",
      icon: <MdSpaceDashboard />,
      handleClick: () => navigate("/"),
    },
    {
      label: "STOCK",
      icon: <IoStorefrontSharp />,
      handleClick: () => navigate("stock"),
    },
    {
      label: "SHOP",
      icon: <HiShoppingBag />,
      handleClick: handleShopClick,
    },
    { label: "CART", icon: <GrCart />, handleClick: () => navigate("/cart") },
    {
      label: "ADD STOCK",
      icon: <RiAddLine />,
      handleClick: () => navigate("addstock"),
    },
    {
      label: "SIGN IN",
      icon: <PiSignInBold />,
      handleClick: () => navigate("signin"),
    },
  ];

  const sidebarbottomlinks = [
    {
      label: "CONTACT US",
      icon: <FaPhoneAlt />,
      handleClick: () => navigate("contactus"),
    },
    {
      label: "SIGN OUT",
      icon: <PiSignOutBold />,
      handleClick: () => navigate("/signout"),
    },
  ];

  return (
    <div className="relative flex h-full">
    <nav className=" hidden relative lg:block  lg:flex-initial lg:w-80 bg-primary2 w-64 h-full p-3 flex flex-col  text-secondary2  z-20">
      <div className="flex">
        <img
          className="h-auto w-30 bg-slate-400 -mt-8"
          src={PigeonLogo}
          alt="company logo"
        />
      </div>
      <div className="flex flex-col ">
        {sidebartoplinks.map((item, index) => (
          <SidebarMenu key={index} item={item} />
        ))}
      </div>

      <div className="mb-11 flex flex-col">
        {sidebarbottomlinks.map((item, index) => (
          <SidebarMenu key={index} item={item} />
        ))}
      </div>
    </nav>
       
     <Dropdownmenu/>
       </div>   
  );
}

function SidebarMenu({ item }) {
  return (
    <button
      onClick={item.handleClick}
      className="mr-4 w-50 px-4 ml-2 block rounded-md bg-primary2 px-3 py-2 text-md font-medium font-display font-semibold text-white hover:bg-primary1 ">
      <span className="flex items-center space-x-4">
        {item.icon} <span className="hidden sm:inline">{item.label}</span>
      </span>
    </button>
  );
}
