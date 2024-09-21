import React from "react";
import { HiSearch } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { PigeonLogo } from "./image";
import { IoMdMenu } from "react-icons/io";
import { GrCart } from "react-icons/gr";

export function Header() {
  return (
    <div className="md:bg-white flex-col md:flex-row border py-2.5 md:h-40 md:px-4 flex md:justify-between md:items-center border border-gray-200">
      <div className="bg-primary2 rounded md:hidden flex flex-row">
        <IoMdMenu className="block  pt-3 text-white text-5xl md:hidden" />
        <div className=" text-white text-2xl mt-3 md:text-4xl whitespace-nowrap italic  px-3 py-3 text-md align-middle font-medium font-display font-extrabold md:text-primary2 md:ml-8">
          {" "}
          Heavenly Hurdles
        </div>
        <img
          className="ml-1 md:hidden md:h-auto md:w-30 bg-slate-400 md:-mt-8 h-20 w-auto"
          src={PigeonLogo}
          alt="company logo"
        />
        <div>
          <BsCartFill
            fontSize={26}
            className=" md:hidden text-white mt-5 ml-14"
          />
        </div>
      </div>

      <div className="relative   mt-5 w-10 md:w-[34rem]">
        <div className="hidden md:block  text-4xl mt-2 whitespace-nowrap italic  px-3 py-3 text-md align-middle font-medium font-display font-extrabold text-primary2 ml-8">
         
          Heavenly Hurdles
        </div>

        <HiSearch className="absolute left-7 top-1 md:left-20  md:top-1/2 md:transform md:-translate-y-1/2  text-gray-400 text-2xl " />
        <input
          type="text"
          placeholder="Search..."
          className="ml-6 md:ml-96 text-2xl px-3 pl-12 focus:outline-none active:outline-none h-10 w-[28rem] md:w-[34rem] border  border-gray-500 md:border-gray-500 rounded-sm"
        />
      </div>
      <div className="hidden md:block flex items-center mr-4 gap-2">
        <div>
          <IoNotifications fontSize={26} className="text-primary2" />
        </div>
        <div>
          <BsCartFill fontSize={26} className="text-primary2" />
        </div>
        <button
          // onClick={handleModeSwitch}
          className=" m-4 bg-primary2 px-3 py-3 text-white font-display font-semibold rounded">
          MODE
        </button>
      </div>
      <div></div>
    </div>
    
  );
}
// {mode === "light" ? "dark" : "light"}
