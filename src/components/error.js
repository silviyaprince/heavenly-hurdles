import React from "react";

import { HiSearch } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { PigeonLogo } from "../image";
import { IoMdMenu } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const dropdown = [
  { name: 'DASHBOARD',  icon: MdSpaceDashboard },
  { name: 'STOCK',  icon: IoStorefrontSharp },
  { name: 'SHOP', icon: HiShoppingBag },
  { name: 'CART',  icon: GrCart  },
  { name: 'ADD STOCK',  icon: RiAddLine },
  {name:'SIGN IN',icon: PiSignInBold},
  {name:'CONTACT US',icon: FaPhoneAlt},
  {name:'SIGN OUT',icon: PiSignOutBold}
]

export function Header() {
  const [isFlyoutmenuopen,setisFlyoutmenuopen]=useState(false)
  const navigate=useNavigate()
  return (
    <nav className=" flex w-full lg:w-full lg:h-40 lg:flex-1 flex-col ">
      <div className="lg:p-3  flex flex-row lg:flex-1 bg-primary2 h-24 lg:h-32    lg:gap-3 lg:justify-evenly justify-around  ">
        
          {isFlyoutmenuopen&&<Flyoutmenu/>}
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
  );
}




function Flyoutmenu() {
  return(
<Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      
      <IoMdMenu className="lg:hidden text-4xl text-white mt-6 ml-2" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-64 -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {dropdown.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <button href={item.href} className="font-semibold text-gray-900">
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
  )
}


// {mode === "light" ? "dark" : "light"}

// <div className="md:bg-white flex-col md:flex-row border py-2.5 md:h-40 md:px-4 flex md:justify-between md:items-center border border-gray-200">
//       <div className="bg-primary2 rounded md:hidden flex flex-row">
//         <IoMdMenu className="block  pt-3 text-white text-5xl md:hidden" />
//         <div className=" text-white text-2xl mt-3 md:text-4xl whitespace-nowrap italic  px-3 py-3 text-md align-middle font-medium font-display font-extrabold md:text-primary2 md:ml-8">
//           {" "}
//           Heavenly Hurdles
//         </div>
// <img
//   className="ml-1 md:hidden md:h-auto md:w-30 bg-slate-400 md:-mt-8 h-20 w-auto"
//   src={PigeonLogo}
//   alt="company logo"
// />
//         <div>
//           <BsCartFill
//             fontSize={26}
//             className=" md:hidden text-white mt-5 ml-14"
//           />
//         </div>
//       </div>

//       <div className="relative   mt-5 w-10 md:w-[34rem]">
//         <div className="hidden md:block  text-4xl mt-2 whitespace-nowrap italic  px-3 py-3 text-md align-middle font-medium font-display font-extrabold text-primary2 ml-8">

//           Heavenly Hurdles
//         </div>

//         <HiSearch className="absolute left-7 top-1 md:left-20  md:top-1/2 md:transform md:-translate-y-1/2  text-gray-400 text-2xl " />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="ml-6 md:ml-96 text-2xl px-3 pl-12 focus:outline-none active:outline-none h-10 w-[28rem] md:w-[34rem] border  border-gray-500 md:border-gray-500 rounded-sm"
//         />
//       </div>
//       <div className="hidden md:block flex items-center mr-4 gap-2">
//         <div>
//           <IoNotifications fontSize={26} className="text-primary2" />
//         </div>
//         <div>
//           <BsCartFill fontSize={26} className="text-primary2" />
//         </div>

//       </div>
//       <div></div>
//     </div>

//   );
// }
// {mode === "light" ? "dark" : "light"}
