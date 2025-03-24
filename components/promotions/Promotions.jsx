"use client";
import React, { useState } from "react";
import "./promotions.css";

export default function Promotions() {
  const [activeTab, setActiveTab] = useState("recommendations");

  const categories = ["Smart Home", "Smart Appliances", "Gadgets", "Phone"];
  const products = {
    "Smart Home": [
      { name: "Smart Bulb", img: "/assets/images/products/smartbulb.png", discount: "20% OFF" },
      { name: "Smart Lock", img: "/assets/images/products/smartlock.png", discount: "15% OFF" }
    ],
    "Smart Appliances": [
      { name: "Air Purifier", img: "/assets/images/products/airpurifier.png", discount: "10% OFF" },
      { name: "Robot Vacuum", img: "/assets/images/products/robotvacuum.png", discount: "25% OFF" }
    ],
    "Gadgets": [
      { name: "Wireless Earbuds", img: "/assets/images/products/earbuds.png", discount: "30% OFF" },
      { name: "Smart Watch", img: "/assets/images/products/smartwatch.png", discount: "40% OFF" }
    ],
    "Phone": [
      { name: "iPhone 14", img: "/assets/images/products/iphone14.png", discount: "5% OFF" },
      { name: "Samsung S23", img: "/assets/images/products/samsungs23.png", discount: "10% OFF" }
    ]
  };

  return (
    <>
      {/* Tabs Section */}
      <section className="promotions mb-5 pb-5" id="promotions">
        <div className="container">
          <h1>New Promotions</h1>
          <h4>See what’s new with our promos</h4>
          <div className="tab_div">
            <p
              className={activeTab === "recommendations" ? "active" : ""}
              onClick={() => setActiveTab("recommendations")}
            >
              Recommendations
            </p>
            {categories.map((category, index) => (
              <p
                key={index}
                className={activeTab === category ? "active" : ""}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections Based on Active Tab */}
      <section className="deal-section mb-3">
        <div className="container">
          {activeTab === "recommendations" && (
            <div className="row row_height ">
              {/* Recommendation Section */}
              <div className="col-lg-8 ">
                <div className="img_parent_div">
                  <div className="main_img_div pb-3 pt-3">
                    <p id="discount">Up to 70% OFF</p>
                    <div className="row flex_one_row">
                      <div className="col-md-6 width_50">
                        <h3 className="mt-3 heading">
                          Lenovo
                          <br /> Office & Work Laptop
                        </h3>
                        <div className="text_icon_div">
                          <p id="shop_now">Shop Now</p>
                          <img
                            src="/assets/images/common/icons/arrow_img.png"
                            alt=""
                          />
                        </div>
                        <p className="mt-2" id="latest">
                          Power & Versatility
                        </p>
                        <p id="latest">ThinkPad X1 Gen 12 Latest Workstation</p>
                      </div>
                      <div className="col-md-6 img_col width_50">
                        <img
                          src="/assets/images/products/computer1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="small_images_parent">
                    <div className="small_image1 small_div_width">
                      <img src="/assets/images/products/laptop.png" alt="" />
                      <p>
                        Lenovo Laptop
                        <span id="small_dis" className="mt-2 ">
                          Upto 70% OFF
                        </span>
                      </p>
                    </div>
                    <div className="small_image1 small_div_width">
                      <img src="/assets/images/products/laptop.png" alt="" />
                      <p>
                        Lenovo Laptop <span id="small_dis">Upto 70% OFF</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="second_col_main">
                  <div className="small_image1 second_col_div">
                    <img src="/assets/images/products/laptop.png" alt="" />
                    <p>
                      Lenovo Laptop
                      <span id="small_dis" className="mt-2 ">
                        Upto 70% OFF
                      </span>
                    </p>
                  </div>
                  <div className="small_image1 second_col_div_2 p_x">
                    <img src="/assets/images/products/laptop.png" alt="" />
                    <p>
                      Lenovo Laptop <span id="small_dis">Upto 70% OFF</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="popular_products2 pb-3">
            {products[activeTab]?.map((product, index) => (
              <div className="single_card2" key={index}>
                <div className="img_div">
                  <img src={product?.img} />
                </div>
                <p>{product?.name}</p>

                <div className="review_div">
                  {/* <div className="div_1">
                  <FaStar className="icon_props" />
                  <p>
                    <strong>{rating}</strong> 12k reviews
                  </p>
                </div> */}

                  <div className="price_div">
                    <p>
                      <strong>${product?.discount}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
