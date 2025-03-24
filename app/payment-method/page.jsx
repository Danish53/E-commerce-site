"use client";
import { useRouter } from "next/navigation";

import React from "react";
import "./payment_method.css";
import "../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

import { CiHome } from "react-icons/ci";
import { BsCreditCard2Back } from "react-icons/bs";

export default function PaymentMethod() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNavigation = () => {
    router.push("/review-order");
  };
  return (
    <div>
      <section className="page_address  mt-3 mb-3">
        <div className="heading_div">
          <Header2 />
        </div>
        <div className="container ">
          <div className="my-container">
            <div className="row">
              <h1>Payment Method</h1>

              <div className="col-lg-8">
                <div className="check_radio_btn_div">
                  <input type="radio" />
                  <p>Debit/Credit Card</p>
                </div>
                <div className="icons_parent_div mb-3">
                  <div className="icons_div mt-3 mb-5">
                    <div className="icon active">
                      <CiHome className="icon_size_shiping " />
                    </div>
                    <div className="icon active">
                      <BsCreditCard2Back className="icon_size_shiping" />
                    </div>
                    <div className="icon">
                      <MdOutlineRateReview className="icon_size_shiping" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="mt-3">
                  <h4>Select a Payment Method</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter Mobile Number"
                      />
                    </div>

                    <div className="row mb-5">
                      <div className="col">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col">
                        <label>CVV</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn  w-100">
                      Add Card
                    </button>

                    <div className="check_radio_btn_div mt-3 border_botom">
                      <input type="radio" />
                      <p>Google Pay</p>
                    </div>
                    <div className="check_radio_btn_div border_botom">
                      <input type="radio" />
                      <p>Paypal</p>
                    </div>
                    <div className="check_radio_btn_div border_botom">
                      <input type="radio" />
                      <p>Cash on Delivery</p>
                    </div>
                    <button
                      type="submit"
                      className="btn  w-100 mt-3 mb-3"
                      onClick={handleNavigation}
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <SmallForm />
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </section>
    </div>
  );
}
