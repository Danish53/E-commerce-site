import React from "react";
import "./all-products.css";
import "../../public/assets/css/theme/main.css";
import AllProduct from "@/components/product/product";
import Dropdown from "@/components/dropdown/Dropdown";

export default function page() {
  return (
    <section id="all_product" className="all_product ">
      <div className="container">
        <div className="row margin_top">
          <div className="col-md-12 col-lg-3  show_not">
            <Dropdown />
          </div>
          <div className="col-md-12 col-lg-9 ">
            <AllProduct />
          </div>
        </div>
      </div>
    </section>
  );
}
