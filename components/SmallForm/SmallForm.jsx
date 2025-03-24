import React from "react";
import "./small_form.css";

export default function SmallForm() {
  return (
    <section className="small_form">
      <form className="border p-4 shadow-sm rounded">
        <div className="mb-3 d-flex  space_between">
          <label htmlFor="subtotal" className="form-label mb-0 fw-bold">
            Subtotal
          </label>
          <span id="subtotal">$200.00</span>
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
