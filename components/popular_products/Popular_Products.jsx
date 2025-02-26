"use client";
import React, { useState } from "react";
import "./popular_products.css";
import Popular_Card from "./Popular_Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Popular_Products() {
  const [counter, setCounter] = useState(1);

  const products = [
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head1.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head2.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head1.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head2.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head1.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head2.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head1.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head2.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head1.png",
    },
    {
      productName: "Sony Headphones Wireless Noise Cancelling",
      img_src: "/assets/images/common/head2.png",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setCounter(next + 1),
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 439,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="popular_products" className="pb-3">
      <div className="container ">
        <h1>Popular Products</h1>
        <div className="popular_products pb-3">
          <Slider {...settings}>
            {products.map((item, index) => {
              return (
                <Popular_Card
                  key={index}
                  img_src={item.img_src}
                  productName={item.productName}
                />
              );
            })}
          </Slider>
        </div>
        <hr />
      </div>
    </section>
  );
}
