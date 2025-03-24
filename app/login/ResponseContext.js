"use client"
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // Ensure quantity is correctly updated
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity } // Properly increase quantity
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }]; // Add new product with quantity
      }
    });
  
    toast.success(`${product.title} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    toast.error("Product removed from cart!");
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCart = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const [response_Context, setResponse_Context] = useState({});
  return (
    <ResponseContext.Provider value={{ response_Context, setResponse_Context, cart, addToCart, removeFromCart, clearCart, updateCart }}>
      {children}
    </ResponseContext.Provider>
  );
};
