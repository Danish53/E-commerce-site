"use client";
import { useRouter } from "next/navigation";

import FeaturedProducts from "./FeaturedProducts";
import "./shopDetails1.css";
import Reviews from "./Reviews";
import Link from "next/link";
import ReviewForm from "./ReviewForm";
import ProductSlide from "./ProductSlide";
import { useState } from "react";
import { useContextElement } from "@/context/Context";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function ShopDetails1({ product }) {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [bodyColor, setBodyColor] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
    setBodyColor(true);
  };

  const handleDecrease = (productId) => {
    const product = cartProducts.find((elm) => elm.id === productId);
    if (product.quantity > 1) {
      setQuantity(productId, product.quantity - 1);
    }
  };

  const handleIncrease = (productId) => {
    const product = cartProducts.find((elm) => elm.id === productId);
    if (product.quantity < 99) {
      setQuantity(productId, product.quantity + 1);
    }
  };

  const handleInputChange = (productId, value) => {
    const numericValue = Math.min(99, Math.max(1, value));
    setQuantity(productId, numericValue);
  };

  const [activeTab, setActiveTab] = useState("description");
  const {
    cartProducts,
    setCartProducts,

    isAddedToCartProducts,
    addProductToCart,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const handlePopup = () => {
    setIsVisible(false);
    setBodyColor(false);
  };

  const handleCheckout = () => {
    router.push("/shop-cart");
  };
  return (
    <article className="product type-product single product-single py-2 lg:py-6 xl:py-8">
      <div
        className={`container max-w-xl single_product ${
          bodyColor ? "bg_color_gray" : ""
        }`}
      >
        <header className="product-header panel">
          <div className="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
            <div>
              <ProductSlide />
            </div>
            <div>
              <div
                className="product-details sticky-element panel vstack gap-1 xl:gap-2 "
                data-uc-sticky="bottom: true; offset: 40;"
              >
                <div className="flex_div">
                  <h1 className="prod_head">{product.name}</h1>
                  <p id="stock">In Stock</p>
                </div>
                <p id="prod_name">Girls Pink Moana Printed Dress</p>

                <div className="product-rating hstack gap-1">
                  <ul
                    className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                    title="Average 4 out of 5"
                  >
                    {[...Array(product.rating)].map((elm, i) => (
                      <li key={i}>
                        <i
                          className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"
                          id="stars"
                        />
                      </li>
                    ))}
                    {[...Array(5 - product.rating)].map((elm, i) => (
                      <li key={i}>
                        <i className="icon fs-6 lg:fs-5 unicon-star-filled" />
                      </li>
                    ))}
                  </ul>

                  <span className="hstack gap-narrow fs-7 opacity-60 reviews">
                    {product.rating}
                    <span className="d-none sm:d-inline-block reviews">
                      (100 Reviews)
                    </span>
                  </span>
                </div>

                <div className="hstack justify-between items-center gap-2">
                  <div className="product-price hstack gap-1 fs-5 xl:fs-4">
                    <span className="price">${product.price.toFixed(2)}</span>

                    <span className="price-old text-line-through opacity-40">
                      $
                      {product.oldPrice
                        ? product.oldPrice.toFixed(2)
                        : (product.price + 20).toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="product-desc fs-6 xl:fs-5 my-2 pro_details_para1">
                  Moana Printed Pink Dress is soft, breathable, and perfect for
                  young adventurers. Featuring a vibrant Moana design, short
                  sleeves, and a flared skirt, it offers comfort and easy
                  movement. Ideal for casual wear, parties, and Disney-themed
                  events
                </p>

                <p id="color_word">Color</p>

                <div className="box-container">
                  <div className="box box-red"></div>
                  <div className="box box-blue"></div>
                  <div className="box box-yellow"></div>
                  <div className="box box-black"></div>
                  <div className="box box-green"></div>
                </div>
                <p id="color_word" className="mt-2">
                  Size
                </p>
                <div className="box-container">
                  <div className="box size">S</div>
                  <div className="box size">M</div>
                  <div className="box size">L</div>
                  <div className="box size">XL</div>
                  <div className="box size">XXL</div>
                </div>

                <div className="product-actions hstack gap-1 xl:mt-2">
                  {isAddedToCartProducts(product.id) ? (
                    <div className="quantity_box_div">
                      <FaMinus
                        className="quantity_icon"
                        onClick={() => handleDecrease(product.id)}
                      />

                      <input
                        type="number"
                        className="quantity_input"
                        step={1}
                        min={1}
                        max={99}
                        name="quantity"
                        value={
                          cartProducts.filter((elm) => elm.id == product.id)[0]
                            .quantity / 1
                        }
                        // onChange={(e) =>
                        //   setQuantity(product.id, e.target.value / 1)
                        onChange={(e) =>
                          handleInputChange(product.id, e.target.value / 1)
                        }
                        title="Qty"
                      />
                      <FaPlus
                        className="quantity_icon"
                        onClick={() => handleIncrease(product.id)}
                      />
                    </div>
                  ) : (
                    <input
                      type="number"
                      className=" form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step={1}
                      min={1}
                      max={99}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                      autoComplete="off"
                    />
                  )}
                  {isAddedToCartProducts(product.id) ? (
                    <div className="add_to_cart_div" onClick={togglePopup}>
                      <a
                        // href={"/shop-cart"}
                        className="text_decoration"
                      >
                        Add To Cart
                        {/* View Cart */}
                      </a>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                  <CiHeart className="heart_icon" />
                </div>
                {/* <ul className="nav-y mt-2 xl:mt-4 ft-tertiary">
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      SKU:
                    </span>
                    <span>HVRYXK 1</span>
                  </li>
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      Categories:
                    </span>
                    <Link className="text-primary" href={`/shop-category/Toys`}>
                      Toys
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/Games`}
                    >
                      Games
                    </Link>
                  </li>
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      Tags:
                    </span>
                    <Link
                      className="text-primary"
                      href={`/shop-category/Heads Toys`}
                    >
                      Heads toys
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/Child`}
                    >
                      Child
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </header>
        <div className="product-tabs panel mt-8">
          {/* <ul className="product-tabs-nav uc-tab nav-x ft-tertiary h6 pb-2 border-bottom">
            <li className={activeTab == "description" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("description")}>Description</a>
            </li>

            <li className={activeTab == "additonal_info" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("additonal_info")}>
                Additional Information
              </a>
            </li>
            <li className={activeTab == "review" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("review")}>Reviews (5)</a>
            </li>
          </ul> */}
        </div>
        <div className={`pop_up ${isVisible ? "show" : " "}`}>
          <div className="close_div">
            <p id="total_item">You have 3 items in your cart</p>
            <IoMdClose className="close_icon" onClick={handlePopup} />
          </div>
          <div className="pop_up_parent_div mt-3 pb-2">
            <div className="img_div">
              <img src="/assets/images/products/checkout_pic.png" />
            </div>
            <div className="content_div">
              <p className="prod_title">Girls Pink Moana Printed Dress</p>
              <p className="prod_quantity">1 x $80.00</p>
              <div className="delete_div">
                <p className="sizes">Size: S</p>
                <RiDeleteBin5Fill className="icon_prop" />
              </div>
            </div>
          </div>
          <div className="pop_up_parent_div mt-3 pb-2">
            <div className="img_div">
              <img src="/assets/images/products/checkout_pic.png" />
            </div>
            <div className="content_div">
              <p className="prod_title">Girls Pink Moana Printed Dress</p>
              <p className="prod_quantity">1 x $80.00</p>
              <div className="delete_div">
                <p className="sizes">Size: S</p>
                <RiDeleteBin5Fill className="icon_prop" />
              </div>
            </div>
          </div>
          <div className="total_div mt-1 mb-1">
            <p className="sub_total">Subtotal</p>
            <p className="total_amount">$200.00</p>
          </div>
          <div className="btn_div mt-2">
            <button id="view_cart">View Cart</button>
            <button id="checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
        <div className="first_tab mt-3">
          <p className="tab_heading">Description</p>
          <p className="details_p">
            Consetetur sadipscing elitr, syosma vero eos et accusam et justo
            takimata sit amet sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do
            eiusmod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid iusto dolores laudantium commodi ut ullam id, numquam
            repellat quo maiores excepturi cum atque consequuntur alias sunt,
            dignissimos architecto odio unde! Accusamus odio soluta nostrum nemo
            esse explicabo ab eos sed perspiciatis possimus.
          </p>
        </div>
        <div className="second_tab mt-3">
          <p className="tab_heading">Additional Information</p>
          <div className="color_size_div mt-3">
            <h6 className="h6_details">Color</h6>
            <p className="p_details">Red Blue Orange Green</p>
          </div>
          <div className="color_size_div mt-2">
            <h6 className="h6_details">Size</h6>
            <p className="p_details">S, M, L, XL, XXL</p>
          </div>
        </div>
        {/* Products Related */}
        <FeaturedProducts />
      </div>
    </article>
  );
}
