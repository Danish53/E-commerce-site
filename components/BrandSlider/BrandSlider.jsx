"use client";
import React, { useState } from "react";
import "./brandSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {
  const [counter, setCounter] = useState(1);

  const imagesArray = [
    {
      img_src: "/assets/images/common/lenovo.png",
    },
    {
      img_src: "/assets/images/common/samsung.png",
    },
    {
      img_src: "/assets/images/common/lenovo.png",
    },
    {
      img_src: "/assets/images/common/samsung.png",
    },
    {
      img_src: "/assets/images/common/lenovo.png",
    },
    {
      img_src: "/assets/images/common/samsung.png",
    },
    {
      img_src: "/assets/images/common/lenovo.png",
    },
    {
      img_src: "/assets/images/common/samsung.png",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setCounter(next + 1),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 439,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="brandSlider" className="mt-3">
      <div className="container  ">
        <div className="row pb-3">
          <Slider {...settings}>
            {imagesArray.map((image, index) => {
              return <img key={index} src={image.img_src} />;
            })}
          </Slider>
        </div>
        <hr />
      </div>
    </section>
  );
}
