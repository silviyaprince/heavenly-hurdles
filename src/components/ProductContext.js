import { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ displayedProducts, setDisplayedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};