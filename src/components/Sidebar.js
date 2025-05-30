import React, { useContext } from "react";
import { PigeonLogo } from "../image";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
import { GrCart } from "react-icons/gr";
import { RiAddLine } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

export function Sidebar() {
  
  const navigate = useNavigate();
  
const{ handleShopClick }=useContext(ProductContext)
const handleSignOut = () => {
  localStorage.removeItem("token");
  navigate("users/signin"); // Redirect to sign-in page after sign-out
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
    { label: "CART", icon: <GrCart />, handleClick: () => navigate("cart") },
    {
      label: "ADD STOCK",
      icon: <RiAddLine />,
      handleClick: () => navigate("addstock"),
    },
    {
      label: "SIGN IN",
      icon: <PiSignInBold />,
      handleClick: () => navigate("users/signin"),
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
      handleClick: handleSignOut,
    },
  ];

  return (
   
    <nav className=" hidden relative lg:block  lg:flex-initial lg:w-80 bg-primary2 w-64 h-full p-3 flex flex-col  text-secondary2  z-20">
      <div className="flex">
        {/* <img
          className="h-auto w-30 bg-slate-400 -mt-8"
          src={PigeonLogo}
          alt="company logo"
        /> */}
        <div className="text-2xl xl:text-4xl mb-7 lg:text-4xl lg:mr-12 md:mr-10 italic text-white font-display font-extrabold mt-7">
            Heavenly Hurdles
          </div>
      </div>
      <div className="flex flex-col mt-7">
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
