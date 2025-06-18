import React, { createContext, useState, useEffect } from "react";
import Products from "../Products"; // Import properly

export const Context = createContext();

const getInitialCart = () => {
  const storedCart = localStorage.getItem("cartItem");
  if (storedCart) {
    return JSON.parse(storedCart);
  }

  let cart = {};
  for (let i = 0; i < Products.length; i++) {
    cart[Products[i].id] = 0;
  }
  return cart;
};

const ContextProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addTocart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeTocart = (itemid) => {
    setcartItem((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] - 1 : 0,
    }));
  };

  const ContextValue = {
    Products,
    cartItem,
    addTocart,
    removeTocart,
  };

  return (
    <Context.Provider value={ContextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
