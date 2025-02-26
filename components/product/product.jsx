"use client";
import React from "react";
import "./style.css";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AllProduct() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/shop-cart"); // Replace with your target page route
  };
  return (
    <div className="all_product_parent_div">
      <section
        id="AllProduct"
        className="AllProduct pro_item mb-3 "
        onClick={handleNavigation}
      >
        <div className="img_div">
          <Link href={`/shop-product-detail/2`}>
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div> 
          </Link>
        </div>
      </section>
      <section id="AllProduct" className="AllProduct pro_item mb-3">
        <div className="img_div">
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div>
        </div>
      </section>
      <section id="AllProduct" className="AllProduct pro_item mb-3">
        <div className="img_div">
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div>
        </div>
      </section>
      <section id="AllProduct" className="AllProduct pro_item mb-3">
        <div className="img_div">
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div>
        </div>
      </section>
      <section id="AllProduct" className="AllProduct pro_item mb-3">
        <div className="img_div">
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div>
        </div>
      </section>

      <section id="AllProduct" className="AllProduct pro_item mb-3">
        <div className="img_div">
          <img src="/assets/images/products/productImg.png" alt="" />
          <FaRegHeart className="icon_size" />
          <h2 className="mt-1">Allen Solly</h2>
          <p className="detail">Women Textured Handheld Bag</p>
          <div className="price_div">
            <p className="price">$80.00</p>
            <p className="old_price">$100.00</p>
          </div>
          <div className="btn_div">
            <button className="cart mt-1">Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}
