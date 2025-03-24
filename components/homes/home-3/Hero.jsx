"use client";
import "../../../public/assets/css/theme/main.css";
import "./hero_sec.css";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { MdOutlineDone } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useContext } from "react";
import { ResponseContext } from "@/app/login/ResponseContext";

export default function Hero() {
  const [counter, setCounter] = useState(1);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(ResponseContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://foundation.alphalive.pro/api/front/latest-products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCounter(next + 1),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <Slider {...settings}>
      {loading
        ? Array(3)
            .fill({})
            .map((_, index) => (
              <section key={index} id="hero_sec" className="hero_sec">
                <div className="container">
                  <div className="row y-center">
                    <div className="col-lg-6 content">
                      <h1>
                        <Skeleton width={400} height={30} baseColor="#E0E0E0" highlightColor="#F5F5F5 " />
                      </h1>
                      <h3>
                        <Skeleton width={300} height={20}  baseColor="#E0E0E0" highlightColor="#F5F5F5 "  />
                      </h3>
                      <div className="tick_sec_parent">
                        <div className="tick_single">
                          <p>
                            <Skeleton width={100} height={20} baseColor="#E0E0E0" highlightColor="#F5F5F5 " />
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="icon_cart_div">
                        </div>
                        <div className="cart_text">
                          <p>
                            <Skeleton width={130} height={30} baseColor="#E0E0E0" highlightColor="#F5F5F5 " />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 img_div">
                      <Skeleton
                        height={400}
                        width={"100%"}
                        style={{ borderRadius: "10px" }} baseColor="#E0E0E0" highlightColor="#F5F5F5 " 
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))
        : products?.map((item, index) => (
            <section key={index} id="hero_sec" className="hero_sec">
              <div className="container">
                <div className="row y-center">
                  <div className="col-lg-6 content">
                    <h1>{truncateText(item?.title, 50)}</h1>
                    <h3>{item?.category_name}</h3>
                    <div className="tick_sec_parent">
                      <div className="tick_single">
                        <MdOutlineDone className="icon_size" />
                        <p>{item?.current_price}</p>
                      </div>
                    </div>
                    <div
                      className="add_to_cart_div mt-3"
                      onClick={() => addToCart(item)}
                    >
                      <div className="icon_cart_div">
                        <BsCart2 className="icon_size" />
                      </div>
                      <div className="cart_text">
                        <p>Add to cart</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 img_div">
                    <img
                      src={
                        item?.thumbnail ||
                        "https://img.freepik.com/free-psd/brown-waffle-knit-sweater-wooden-hanger-autumn-winter-fashion-apparel-cozy-comfortable-clothing-style_632498-31381.jpg"
                      }
                      alt="Product"
                      style={{
                        height: "400px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
    </Slider>
  );
}
