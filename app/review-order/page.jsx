import React from "react";
// import "../../../public/assets/css/theme/main.css";
import "../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

import "./review.css";

export default function ReviewOrder() {
  return (
    <div>
      <section className="page_address mt-3 mb-3">
        <div className="container">
          <div className="row">
            <h1>Review Your Order</h1>

            <div className="col-lg-8">
              <div className="icons_parent_div mb-3">
                <div className="icons_div mt-3 mb-5">
                  <div className="icon">
                    <MdOutlineRateReview />
                  </div>
                  <div className="icon">
                    <MdPayment />
                  </div>
                  <div className="icon">
                    <IoIosHome />
                  </div>
                </div>
                <hr />
              </div>
              <div className="mt-3 mb-3">
                <h4 className="mt-3 mb-5">Estimated delivery: 22 Feb 2025</h4>
              </div>
              <div className="item_products pb-2 mt-3">
                <div className="img_div_flex d-flex gap-3">
                  <img
                    src="/assets/images/products/review.png"
                    height={71}
                    width={69}
                    alt="slected product image"
                  />
                  <div className="item_details">
                    <p id="item_name">Girls Pink Moana Printed Dress</p>
                    <p id="item_price">$80.00</p>
                    <p id="item_size">Size: S</p>
                  </div>
                </div>
              </div>
              <div className="item_products pb-2 mt-3">
                <div className="img_div_flex d-flex gap-3">
                  <img
                    src="/assets/images/products/review.png"
                    height={71}
                    width={69}
                    alt="slected product image"
                  />
                  <div className="item_details">
                    <p id="item_name">Girls Pink Moana Printed Dress</p>
                    <p id="item_price">$80.00</p>
                    <p id="item_size">Size: S</p>
                  </div>
                </div>
              </div>
              <div className="item_products pb-2 mt-3">
                <div className="img_div_flex d-flex gap-3">
                  <img
                    src="/assets/images/products/review.png"
                    height={71}
                    width={69}
                    alt="slected product image"
                  />
                  <div className="item_details">
                    <p id="item_name">Girls Pink Moana Printed Dress</p>
                    <p id="item_price">$80.00</p>
                    <p id="item_size">Size: S</p>
                  </div>
                </div>
              </div>
              <div className="address_section mt-5">
                <h4>Shipping Address</h4>
                <div className="name_parent_div pb-2 mb-3">
                  <div className="name_edit ">
                    <h5>Robert Fox</h5>
                    <FaRegEdit />
                  </div>
                  <p id="home_add">
                    4517 Washington Ave, Manchester Kentucky 39495
                  </p>
                </div>
                <div className="name_parent_div pb-2">
                  <div className="name_edit ">
                    <h5>Payment Method</h5>
                    <FaRegEdit />
                  </div>
                  <p id="home_add">Debit Card (************)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <SmallForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
