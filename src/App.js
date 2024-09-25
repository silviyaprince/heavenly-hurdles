import "./App.css";
import { Campingproductlist } from "./Campingproductlist";
import { Routes, Route, useParams, Link, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { PigeonLogo } from "./image";
import Addstock from "./Addstock";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Product } from "./Product";
import { productData } from "./data";
import {
  allSportsCategories,
  mensCollectionCategories,
  womensCollectionCategories,
} from "./data";

import { Productlist } from "./Productlist";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";

function App() {
  const navigate=useNavigate()
  return(
    <div>
{/* <div className="flex h-screen dark:bg-black dark:text-white bg-white">
<nav className="bg-primary2 w-64 h-full p-3 text-secondary2 ">
<div className="px-2 py-1">
<div className="flex flex-col h-full">
<div className="flex self-center"></div>
<img  className="h-auto w-30 bg-slate-400 -mt-8" src={PigeonLogo} alt="company logo" />
<div className="flex flex-col space-y-1"></div>
<button className="block rounded-md bg-fuchsia-800 px-3 py-2 text-md font-medium font-display font-semibold text-white" onClick={()=>navigate("/dashboard")}>DASHBOARD</button>
</div>
</div>
</nav> */}
<Layout/>
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</div>


       )
       }

export default App;

