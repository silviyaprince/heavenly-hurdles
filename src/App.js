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
import { Signin } from "./components/Signin";
function App() {
  const navigate=useNavigate()
  return(
    <div>


<Routes>
<Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* This ensures Dashboard shows for the root path */}
          <Route path="signin" element={<Signin />} />
        </Route>
</Routes>

</div>


       )
       }

export default App;

