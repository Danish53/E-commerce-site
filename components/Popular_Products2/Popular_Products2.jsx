import React from "react";
import "./Popular_Products2.css";

export default function Popular_Products2() {
  const itemArray = [
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
    {
      img_scr: "/assets/images/common/head2.png",
      pro_name: "Home Appliances",
      model: "Model #209836543K2",
    },
  ];
  return (
    <section id="Popular_Products2" className="mt-3 mb-5">
      <div className="container">
        <h1>Popular Products</h1>
        <div className="card_parent mt-3">
          {itemArray.map((item, index) => {
            return (
              <div className="single_card mt-1" key={index}>
                <img src="/assets/images/common/head2.png" />
                <div className="info_div">
                  <h5>Home Appliances</h5>
                  <p>Model #209836543K2</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
