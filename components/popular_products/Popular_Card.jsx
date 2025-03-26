"use client";
import React, { useContext, useEffect, useState } from "react";
import "./popular_card.css";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { ResponseContext } from "@/app/login/ResponseContext";

export default function Popular_Card({ img_src, productName, price, rating, productId, onClick }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(ResponseContext);
  // console.log(wishlist, "wishlist add ed")
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(wishlist.some((item) => item.id === productId));
  }, [wishlist, productId]);

  const toggleFavorite = () => {
    if (favorite) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
    setFavorite(!favorite);
  };


  

  return (
    <section id="popular_card" className="pt-3">
      <div className="container">
        <div className="single_card" style={{position:"relative"}}>
          <div className="img_div" onClick={onClick}>
            <img src={img_src} />
          </div>
          <div style={{position:"absolute", top:"10px", right:"10px"}}>{favorite ? (
            <FaHeart className="icon_size" onClick={toggleFavorite} />
          ) : (
            <FaRegHeart className="icon_size" onClick={toggleFavorite} />
          )}</div>
          <p>{productName}</p>
          <div className="review_div">
            <div className="div_1">
              <FaStar className="icon_props" />
              <p>
                <strong>{rating}</strong> 12k reviews
              </p>
            </div>

            <div className="price_div">
              <p>
                <strong>${price}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
