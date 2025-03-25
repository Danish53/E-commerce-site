import React from "react";
import "./popular_card.css";

import { FaStar } from "react-icons/fa";

export default function Popular_Card({ img_src, productName, price, rating, onClick}) {
  return (
    <section id="popular_card" className="pt-3">
      <div className="container">
        <div className="single_card">
          <div className="img_div" onClick={onClick}>
            <img src={img_src} />
          </div>
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
