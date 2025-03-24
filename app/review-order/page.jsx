"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import "../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { CiHome } from "react-icons/ci";
import { BsCreditCard2Back } from "react-icons/bs";

import "./review.css";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function ReviewOrder() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (show) {
      document.body.style.backgroundColor = "#C5C5C5";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [show]);

  const handlePopup = () => {
    if (show) {
      setShow(false);
    }
  };

  const handleNavigation = () => {
    router.push("/orders");
  };
  const handleHome = () => {
    router.push("/");
  };

  return (
    <div>
      <section className="page_address mt-3 mb-3 ">
        <div className="heading_div">
          <Header2 />
        </div>
        <div className="container mar_top">
          <div className="row mt-3" onClick={handlePopup}>
            <h1>Review Your Order</h1>

            <div className="col-lg-8">
              <div className="icons_parent_div mb-3">
                <div className="icons_div mt-3 mb-5">
                  <div className="icon active">
                    <CiHome className="icon_size_shiping " />
                  </div>
                  <div className="icon active">
                    <BsCreditCard2Back className="icon_size_shiping" />
                  </div>
                  <div className="icon active">
                    <MdOutlineRateReview className="icon_size_shiping" />
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
              <button
                type="submit"
                className="btn  w-100 mt-3 mb-3"
                onClick={togglePopup}
              >
                Continue
              </button>
            </div>
            <div className="col-lg-4">
              <SmallForm />
            </div>
          </div>
          <div
            className={` review_pop_up ${show ? "show" : ""}`}
            id="review_pop_up"
          >
            <div className="pop_up_parent_div">
              <img
                src="/assets/images/common/popup_img.png"
                alt="review  popup image"
              />
              <p id="confirm">Your Order is confirmed</p>
              <p>
                Thanks for shopping! Your order hasn’t shipped yet, but we will
                send you email when it is done.
              </p>
              <div className="btn_div mt-3 ">
                <button onClick={handleNavigation}>View Order</button>
                <button id="back_to_home" onClick={handleHome}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </section>
    </div>
  );
}
