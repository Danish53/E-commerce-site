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

  const [response_Context, setResponse_Context] = useState({
    user: null,
    token: null,
    user_id: null,
  });

  // Load user data from sessionStorage (optional)
  useEffect(() => {
    const storedData = sessionStorage.getItem("authData");
    if (storedData) {
      setResponse_Context(JSON.parse(storedData));
    }
  }, []);

  // Save authentication data when it changes
  useEffect(() => {
    if (response_Context.token) {
      sessionStorage.setItem("authData", JSON.stringify(response_Context));
    }
  }, [response_Context]);


// Wishlist
const [wishlist, setWishlist] = useState([]);

const userId = response_Context.user_id;

// Fetch Wishlist
const fetchWishlist = async () => {
  try {
    const response = await fetch(
      `https://foundation.alphalive.pro/api/user/wishlists?user_id=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.status) {
      setWishlist(data.data);
    }
  } catch (error) {
    console.error("Error fetching wishlist:", error);
  }
};

// Add to Wishlist
const addToWishlist = async (productId) => {
  try {
    const response = await fetch(
      `https://foundation.alphalive.pro/api/user/wishlist/add`, // Parameters in UR",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
        }),
      }
    );

    const data = await response.json();

    if (data.status) {
      setWishlist((prev) => [...prev, data.data]);
      toast.success("Added to wishlist!");
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

// Remove from Wishlist
const removeFromWishlist = async (productId) => {
  try {
    const wishlistItem = wishlist.find((item) => item.id === productId);
    if (!wishlistItem) {
      console.error("Wishlist item not found!");
      return;
    }
    const response = await fetch(
      `https://foundation.alphalive.pro/api/user/wishlist/remove/${wishlistItem.id}?user_id=${userId}&product_id=${productId}`, // Parameters in URL",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.status) {
      setWishlist((prev) => prev.filter((item) => item.id !== productId));
      toast.success("Removed from wishlist!");
    }
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};

useEffect(() => {
  if (userId) {
    fetchWishlist();
  }
}, [userId]);

  return (
    <ResponseContext.Provider value={{ response_Context, setResponse_Context, cart, addToCart, removeFromCart, clearCart, updateCart, addToWishlist, removeFromWishlist, wishlist }}>
      {children}
    </ResponseContext.Provider>
  );
};
