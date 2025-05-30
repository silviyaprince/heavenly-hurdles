import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoute";
import { Productdetails } from "./Productdetails";
import { Addstock } from "./components/Addstock";
import { Stock } from "./components/Stock";
import { Contactus } from "./components/Contactus";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";
import { Pagenotfound } from "./components/Pagenotfound";
import { Signin } from "./components/Signin";
import { Productlist } from "./Productlist";
import { ProductContext, ProductProvider } from "./components/ProductContext";
import { Empty } from "./components/Empty";
import { Cart } from "./components/Cart";
import { useContext } from "react";
import { Signup } from "./components/Signup";
import { Forgotpasswordpage } from "./components/Forgotpasswordpage";
import { Resetpassword} from "./components/Resetpassword";

import { Shop } from "./components/Shop";

function App() {
  const navigate = useNavigate();

  return (
    <ProductProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute roles={["admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />{" "}
            {/* This ensures Dashboard shows for the root path */}
            <Route path="users/signin" element={<Signin />} />
            <Route path="users/signup" element={<Signup />} />
            <Route
              path="addstock"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <Addstock />
                </ProtectedRoute>
              }
            />
            <Route path="contactus" element={<Contactus />} />
            <Route
              path="stock"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <Stock />
                </ProtectedRoute>
              }
            />
            <Route
              path="shop"
              element={
                <ProtectedRoute roles={["admin", "customer"]}>
                  <Empty />
                </ProtectedRoute>
              }
            />
            <Route
              path="products/:selectedCategoryItem"
              element={
                <ProtectedRoute roles={["admin", "customer"]}>
                  <Productlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="products/:category/:id"
              element={
                <ProtectedRoute roles={["admin", "customer"]}>
                  <Productdetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute roles={["admin", "customer"]}>
                  <Cart />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/forgotpassword" element={<Forgotpasswordpage />} />
      <Route path="/users/resetpassword/:token" element={<Resetpassword/>}/>

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
