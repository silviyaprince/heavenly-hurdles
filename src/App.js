import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Addstock } from "./components/Addstock";
import { Stock } from "./components/Stock";
import { Contactus } from "./components/Contactus";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";
import { Pagenotfound } from "./components/Pagenotfound";
import { Signin } from "./components/Signin";
import { Dropdownmenu } from "./components/Dropdownmenu";
import { Productlist } from "./Productlist";
import { ProductProvider } from "./components/ProductContext";
import Empty from "./components/Empty";
function App() {
  const navigate = useNavigate();

  return (
    <ProductProvider>
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />{" "}
          {/* This ensures Dashboard shows for the root path */}
          <Route path="signin" element={<Signin />} />
          <Route path="addstock" element={<Addstock />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="stock" element={<Stock />} />
          <Route path="shop" element={<Empty />} />
          <Route path="products" element={<Productlist />} />

        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
    </ProductProvider>
  );
}

export default App;
