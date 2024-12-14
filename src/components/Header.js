import {React,useEffect} from "react";
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
import { useNavigate } from "react-router-dom";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


import { useState, useContext } from 'react'
import { ProductContext } from "./ProductContext";


export function Header() {
  const [isFlyoutmenuopen,setisFlyoutmenuopen]=useState(false)
  const{handleShopClick,setSearchTerm}=useContext(ProductContext)
  const navigate=useNavigate()


  // const handleShopClick = () => {
  //   setDropdownOpen(!isDropdownOpen);
  //   console.log("Dropdown Open:", !isDropdownOpen);
  //   setisFlyoutmenuopen(false)
  //   console.log("Flyout Menu Open:",isFlyoutmenuopen );

  // };
  const dropdown = [
    { name: 'DASHBOARD',  icon: MdSpaceDashboard ,handleClick:()=>navigate("/")},
    { name: 'STOCK',  icon: IoStorefrontSharp ,handleClick:()=>navigate("stock")},
    { name: 'SHOP', icon: HiShoppingBag ,handleClick:handleShopClick},
    { name: 'ADD STOCK',  icon: RiAddLine,handleClick:()=>navigate("addstock") },
    {name:'SIGN IN',icon: PiSignInBold,handleClick:()=>navigate("signin")},
    {name:'CONTACT US',icon: FaPhoneAlt,handleClick:()=>navigate("contactus")},
    {name:'SIGN OUT',icon: PiSignOutBold,handleClick:()=>navigate("signout")}
  ]
 
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
          
        <div className="flex flex-row justify-center ">
          <div className="text-2xl xl:text-4xl xl:mr-48 lg:text-4xl lg:mr-12 md:mr-10 italic text-white font-display font-extrabold mt-7">
            Heavenly Hurdles
          </div>
          <img
            className="lg:hidden h-20 w-auto mt-2"
            src={PigeonLogo}
            alt="company logo"
          />
        </div>

        <IoNotifications className="hidden md:block text-white text-3xl mt-7" />
        <div className="hidden lg:block relative mt-7 ">
          <HiSearch className="absolute text-2xl  mt-1 " />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e)=>setSearchTerm(e.target.value)}

            className="  text-2xl px-3 pl-12 xl:w-80 focus:outline-none active:outline-none h-10 w-20 xl:w-[34rem] lg:w-40 border  border-gray-500 md:border-gray-500 rounded-sm"
          />
        </div>
        
      </div>
      <div className="lg:hidden relative mt-4 mx-auto">
        <HiSearch className="absolute text-2xl  mt-1 " />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="  text-2xl px-3 pl-12 focus:outline-none active:outline-none h-10 w-[28rem] md:w-[34rem] border  border-gray-500 md:border-gray-500 rounded-sm"
        />
      </div>
    </nav>
   
    </div>
  
  );
}

