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


<Routes>
  <Route path="/dashboard" element={ <Dashboard/>} />
</Routes>
<Layout/>
</div>


       )
       }

export default App;

