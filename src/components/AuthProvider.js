// import React, { createContext, useContext, useState, useEffect } from "react";
// import {jwtDecode} from "jwt-decode";
// import { ProductContext } from "./ProductContext";

// // Create the context
// const AuthContext = createContext();

// // AuthProvider Component
// export const AuthProvider = ({ children }) => {
//     const {user}=useContext(ProductContext)
//   // Initialize state using localStorage directly

//   // Watch for token changes and update the state dynamically
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         setUser({
//           role: decodedToken.role,
//         });
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token");
//         setUser(null);
//       }
//     }
//   }, []); // Runs only on mount

//   return (
//     <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
//   );
// };

// // Custom hook to use Auth Context
// export const useAuth = () => useContext(AuthContext);
