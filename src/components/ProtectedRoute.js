import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import  {ProductContext } from "./ProductContext";

const ProtectedRoute = ({ roles, children }) => {
  const {user} =useContext(ProductContext)

  // Log user state for debugging
  console.log("ProtectedRoute - User State:", user);

  // If no user is authenticated, redirect to the signin page
  if (!user) {
    return <Navigate to="/users/signin" replace />;
  }

  if (user === "admin") {
    console.log("Access Granted to Admin");
    return children;
  }

  if (user=== "customer" && roles.includes(user)) {
    console.log("Access Granted to Customer");
    return children;
  }

  console.log("Access Denied");
  return <div>Access Denied</div>;
};

export default ProtectedRoute;
