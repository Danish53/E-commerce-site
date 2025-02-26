import React from "react";
import "./promotions.css";

export default function Promotions() {
  return (
    <section className="promotions mb-5 pb-5" id="promotions">
      <div className="container">
        <h1>New Promotions</h1>
        <h4>See what’s new with our promos</h4>
        <div className="tab_div">
          <p className="active">Recommendations</p>
          <p>Smart Home</p>
          <p>Smart Appliances</p>
          <p>Gadgets</p>
          <p>Phone</p>
        </div>
      </div>
    </section>
  );
}
