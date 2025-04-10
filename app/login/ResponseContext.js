"use client"
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

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

  const [showPopup, setShowPopup] = useState(false);
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

    // toast.success(`${product.title} added to cart!`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    // console.log("Updated cart:", cart);
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
  const [animateWishlist, setAnimateWishlist] = useState(false);

  var userId = response_Context?.user?.id || "No ID available";

  // Fetch Wishlist
  const fetchWishlist = async () => {
    try {
      // Pehle localStorage check karlo
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (storedWishlist.length > 0) {
        setWishlist(storedWishlist);
      }

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
      // console.log(data.data, "get wishlists...")

      if (data.status) {
        setWishlist(data.data);
        localStorage.setItem("wishlist", JSON.stringify(data.data)); // Save to localStorage
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
      // console.log(data.data.product, "add wishlist");

      if (data.status) {
        const updatedWishlist = [...wishlist, data.data.product];
        setWishlist(updatedWishlist);
        setAnimateWishlist(true);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
        // toast.success("Added to wishlist!");
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
        const updatedWishlist = wishlist.filter((item) => item.id !== productId);
        setWishlist(updatedWishlist);
        setAnimateWishlist(true);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
        // toast.success("Removed from wishlist!");
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


  // filter products
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category_name: "",
    color: "",
    size: "",
    min_price: 0,
    max_price: 100,
  });

  // Fetch filtered products when filters change
  useEffect(() => {
    fetchFilteredProducts();
  }, [JSON.stringify(filters)]);

  async function fetchFilteredProducts() {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`https://foundation.alphalive.pro/api/front/filter-products?${queryParams}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }



  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all addresses
  const fetchAddresses = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://foundation.alphalive.pro/api/user/addresses/${userId}`);
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
    setLoading(false);
  };

  // Add new address
  const addAddress = async (newAddress) => {
    try {
      const response = await axios.post("https://foundation.alphalive.pro/api/user/addresses/store", newAddress);
      // console.log(response, "response ad ka")
      setAddresses((prev) => [...prev, response.data.data]);
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  // Update address
  const updateAddress = async (address_id, updatedData) => {
    try {
      await axios.put(`https://foundation.alphalive.pro/api/user/addresses/update/${address_id}`, updatedData);
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === address_id ? { ...addr, ...updatedData } : addr))
      );
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  // Delete address
  const deleteAddress = async (address_id) => {
    try {
      await axios.delete(`https://foundation.alphalive.pro/api/user/addresses/delete/${address_id}`);
      setAddresses((prev) => prev.filter((addr) => addr.id !== address_id));
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };



  // orders
  const [ordersData, setOrdersData] = useState([]);

  const orders = async (userId) => {
    try {
      const response = await axios.get(`https://foundation.alphalive.pro/api/user/dashboard/${userId}`);
      setOrdersData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


  // coupon
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const applyCoupon = async (coupon, subtotal) => {
    try {
      const res = await axios.get(`https://foundation.alphalive.pro/api/front/get/coupon-code?coupon=${coupon}`);
      // console.log(res, "response.....a.a.a.a.");
      const { type, price } = res.data.data;

      let discount = 0;
      if (type === 1) {
        // Flat discount
        discount = price;
      } else if (type === 0) {
        // Percentage discount
        discount = (subtotal * price) / 100;
      }

      setCouponCode(coupon);
      setDiscountAmount(discount);
      setCouponError(res.data.error);
    } catch (err) {
      setCouponError('Invalid coupon code'); 
      setCouponCode('');
      setDiscountAmount(0);
    }
  };

  // header search
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ResponseContext.Provider value={{
      response_Context, setResponse_Context, cart, addToCart, removeFromCart, clearCart, updateCart, addToWishlist, removeFromWishlist, wishlist, products, filters, setFilters, loading, error, addresses,
      loading,
      addAddress,
      updateAddress,
      deleteAddress,
      setAddresses,
      fetchAddresses,
      ordersData,
      orders,
      discountAmount,
      applyCoupon,
      couponCode,
      couponError,
      fetchFilteredProducts,
      searchQuery,
      setSearchQuery,
      showPopup,
      setShowPopup,
      animateWishlist,
      setAnimateWishlist
    }}>
      {children}
    </ResponseContext.Provider>
  );
};
