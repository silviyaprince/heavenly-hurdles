import React from "react";
import { PigeonLogo } from "../image";

import { MdSpaceDashboard } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
import { GrCart } from "react-icons/gr";
import { RiAddLine } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
export function Sidebar() {
 const navigate=useNavigate()
  const sidebartoplinks = [
    { label: "DASHBOARD", icon: <MdSpaceDashboard />,handleClick:()=>navigate("/dashboard") },
    { label: "STOCK", icon: <IoStorefrontSharp /> },
    { label: "SHOP", icon: <HiShoppingBag /> },
    { label: "CART", icon: <GrCart /> },
    { label: "ADD STOCK", icon: <RiAddLine /> },
    { label: "SIGN IN", icon: <PiSignInBold /> },
  ];

  const sidebarbottomlinks = [
    { label: "CONTACT US", icon: <FaPhoneAlt /> },
    { label: "SIGN OUT", icon: <PiSignOutBold /> },
  ];

  
  return (
    <div className="hidden lg:block  lg:flex-initial lg:w-80 bg-primary2 w-64 h-full p-3 flex flex-col  text-secondary2  ">
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
    </div>
  );
}

function SidebarMenu({ item }) {
  return (
    <button onClick={item.handleClick} className="mr-4 w-50 px-4 ml-2 block rounded-md bg-primary2 px-3 py-2 text-md font-medium font-display font-semibold text-white hover:bg-primary1 ">
      <span className="flex items-center space-x-4">
        {item.icon} <span className="hidden sm:inline">{item.label}</span>
      </span>
    </button>
  );
}