"use client";
import React, { useContext } from "react";
import "./small_form.css";
import { ResponseContext } from "@/app/login/ResponseContext";

export default function SmallForm() {

    const { cart } = useContext(ResponseContext);
  
  
    const getTotalAmount = () => {
      return cart?.reduce((total, item) => total + item.current_price * item.quantity, 0).toFixed(2) || "0.00";
    };

  return (
    <section className="small_form">
      <form className="border p-4 shadow-sm rounded">
        <div className="mb-3 d-flex  space_between">
          <label htmlFor="subtotal" className="form-label mb-0 fw-bold">
            Subtotal
          </label>
          <span id="subtotal">${getTotalAmount()}</span>
        </div>
        <label htmlFor="" id="discount">
          Enter Discount Code
        </label>
        <div className="input-group input_div mb-3">
          <input
            type="text"
            className=""
            id="discountCode"
            placeholder="Enter Discount Code"
            aria-label="Discount Code"
          />
          <button type="button" className="btn btn-dark">
            Apply
          </button>
        </div>
        <div className="mb-3 d-flex space_between deliver_div pb-3">
          <label
            htmlFor="deliveryCharges"
            className="form-label mb-0 fw-bold"
            id="delivery"
          >
            Delivery Charges
          </label>
          <span id="delivery">$5.00</span>
        </div>
        <div className="d-flex space_between">
          <label htmlFor="grandTotal" className="form-label mb-0 fw-bold">
            Grand Total
          </label>
          <span id="grandTotal" className="fw-bold">
            $205.00
          </span>
        </div>
      </form>
    </section>
  );
}
