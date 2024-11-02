import { Route, Routes,useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { Addstock } from "./components/Addstock";
import { Stock } from "./components/Stock";
import { Contactus } from "./components/Contactus";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";
import { Pagenotfound } from "./components/Pagenotfound";
import { Signin } from "./components/Signin";
import { Productlist } from "./Productlist";
import { ProductContext, ProductProvider } from "./components/ProductContext";
import {Empty} from "./components/Empty";
import{Cart} from "./components/Cart";
import { useContext } from "react";
import { Signup } from "./components/Signup";
import RoleBasedAccess from "./components/RoleBasedAccess"

const publicRoutes = ["/users/signin", "/users/signup"];

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     const user = token ? jwtDecode (token) : null;
  //     if (!user) {
  //       // If no user, allow access to public routes
  //       return;
  //     }
  //     if (user?.role === "admin") {
  //         navigate("/"); // Redirect to admin dashboard
  //     } else if (user?.role === "customer") {
  //         navigate("users/signin"); // Redirect to customer shop
  //     }
  // }, [navigate]);
  return (
    <ProductProvider>
    <div>
      <Routes>
     
       
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />{" "}
          {/* This ensures Dashboard shows for the root path */}
          <Route path="users/signin" element={<Signin />} />
          <Route path="users/signup" element={<Signup />} />
          <Route path="addstock" element={<Addstock />} />
          <Route path="contactus" element={<Contactus />} />
         
          <Route path="stock" element={
                        <RoleBasedAccess allowedRoles={['admin']}>
                            <Stock />
                        </RoleBasedAccess>
                    }  />
      
         
          <Route path="shop" element={<Empty />} />
          <Route path="products/:selectedCategoryItem" element={<Productlist />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
    </ProductProvider>
  );
}

export default App;
