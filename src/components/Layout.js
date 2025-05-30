import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from 'react-router-dom';
import { Dashboard } from "./Dashboard";

export function Layout() {
  return (
    
    <div className="flex  flex-row w-screen h-screen  bg-zinc-100 ">
      <Sidebar className="hidden md:block fixed left-0 top-0 h-full w-64 bg-primary2" />
      <div className="flex flex-col w-full ">
      <Header className="fixed top-0 w-full bg-primary2"/>
      <div className="p-1 scroll-my-0 mx-auto mt-7 h-full w-full flex-1 overflow-y-auto bg-zinc-100">
<Outlet/>
        </div>
      </div>
    </div>
  
  );
}

