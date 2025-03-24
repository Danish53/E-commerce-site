"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuMinus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";

import FeaturedProducts from "./FeaturedProducts";
import ProductSlide from "./ProductSlide";
import ReviewSection from "../ReviewSection/ReviewSection";
import Specifications from "../Specifications/Specifications";
import { ResponseContext } from "@/app/login/ResponseContext";

import "./shopDetails1.css";
import ReviewForm from "./ReviewForm";

export default function ShopDetails1() {
  const { cart, addToCart, updateCart } = useContext(ResponseContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bodyColor, setBodyColor] = useState(false);
  const [cartProducts, setCartProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://foundation.alphalive.pro/api/front/product/${id}/details`
        );
        const result = await res.json();
        setData(result.data);
        setCartProducts({ [result.data.id]: 1 }); // Initialize quantity
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    setCartProducts((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  const handleDecrease = (productId) => {
    if (cartProducts[productId] > 1) {
      updateCartQuantity(productId, cartProducts[productId] - 1);
    }
  };

  const handleIncrease = (productId) => {
    updateCartQuantity(productId, (cartProducts[productId] || 1) + 1);
  };

  const handleAddToCart = () => {
    if (data) {
      const quantity = cartProducts[data.id] || 1;
      console.log("Data being added to cart:", { ...data, quantity }); 
      addToCart({ ...data, quantity });
    }
  };
  
  

  return loading ? (
    <p>loading...</p>
  ) : (
    <article className="product type-product single product-single py-2 lg:py-2 xl:py-2">
      <div className={`container single_product ${bodyColor ? "bg_color_gray" : ""}`}>
        <header className="product-header panel">
          <div className="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
            <div>
              <ProductSlide data={data} />
            </div>
            <div>
              <div className="product-details sticky-element panel vstack gap-1 xl:gap-2">
                <div className="flex_div">
                  <h1 className="pro_details">{data?.title}</h1>
                  <p id="stock">In Stock</p>
                </div>
                <p id="prod_name">{data?.title}</p>

                <div className="product-rating hstack gap-1">
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    {[...Array(Number(data?.reviews?.[0]?.rating) || 0)].map((_, i) => (
                      <li key={i}>
                        <i className="unicon-star-filled yellow_star" />
                      </li>
                    ))}
                  </ul>
                  <span className="hstack gap-narrow fs-7 opacity-60 reviews">
                    {Number(data?.rating)} <span className="d-none sm:d-inline-block reviews">(100 Reviews)</span>
                  </span>
                </div>

                <div className="hstack justify-between items-center gap-2">
                  <div className="product-price hstack gap-1 fs-5 xl:fs-4">
                    <span className="price">${data?.current_price}</span>
                    <span className="price-old text-line-through opacity-40">
                      ${data?.previous_price}
                    </span>
                  </div>
                </div>

                <p className="product-desc fs-6 xl:fs-5 my-2 pro_details_para1">
                  {data?.description || "No description available."}
                </p>

                <p id="color_word">Color</p>
                <div className="box-container">
                  {["red", "blue", "yellow", "black", "green"].map((color) => (
                    <div key={color} className={`box box-${color}`} />
                  ))}
                </div>

                <p id="color_word" className="mt-2">Size</p>
                <div className="box-container">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <div key={size} className="box size">{size}</div>
                  ))}
                </div>

                <div className="product-actions hstack gap-1 xl:mt-2">
                  <div className="quantity_box_div">
                    <LuMinus className="quantity_icon" onClick={() => handleDecrease(data?.id)} />
                    <input
                      type="number"
                      className="quantity_input"
                      step={1}
                      min={1}
                      max={99}
                      name="quantity"
                      value={cartProducts[data?.id] || 1}
                      onChange={(e) => updateCartQuantity(data?.id, parseInt(e.target.value, 10))}
                      title="Qty"
                      autoComplete="off"
                    />
                    <FiPlus className="quantity_icon" onClick={() => handleIncrease(data?.id)} />
                  </div>

                  <button className="addCart" onClick={handleAddToCart}>Add to Cart</button>
                  <CiHeart className="heart_icon" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="first_tab mt-3 mb-3">
          <p className="tab_heading">Description</p>
          <p className="details_p">{data?.details}</p>
        </div>

        <Specifications />

        <ReviewSection product_review={data} />
        <div className="add_review_form mt-2">
          <ReviewForm />
        </div>

        <FeaturedProducts />
        <div className="features_sec mt-3 "></div>
      </div>
    </article>
  );
}
 