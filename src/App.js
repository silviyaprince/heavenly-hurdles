import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Addstock } from "./components/Addstock";
import { Stock } from "./components/Stock";
import { Contactus } from "./components/Contactus";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";
import { Pagenotfound } from "./components/Pagenotfound";
import { Signin } from "./components/Signin";
function App() {
  const navigate=useNavigate()
  return(
    <div>


<Routes>
<Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* This ensures Dashboard shows for the root path */}
          <Route path="signin" element={<Signin />} />
          <Route path="addstock" element={<Addstock />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="stock" element={<Stock />} />
        </Route>
        <Route path="*" element={<Pagenotfound/>}/>
</Routes>

</div>


       )
       }

export default App;

