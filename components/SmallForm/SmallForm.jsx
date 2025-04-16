"use client";
import React, { useContext, useState } from "react";
import "./small_form.css";
import { ResponseContext } from "@/app/login/ResponseContext";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function SmallForm() {
  const {
    cart,
    removeFromCart,
    setting,
    discountAmount,
    applyCoupon,
    couponCode,
    couponError,
  } = useContext(ResponseContext);

  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const handleToggleDiscountInput = () => {
    setShowDiscountInput(prevState => !prevState);
  };



  const getTotalAmount = () => {
    return cart?.reduce(
      (total, item) => total + item.current_price * item.quantity,
      0
    );
  };

  const [inputCode, setInputCode] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = getTotalAmount();
  const deliveryFee = Number(setting?.shipping_cost || 0);
  const grandTotal = subtotal - discountAmount + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    applyCoupon(inputCode, subtotal);
    setLoading(false);
  };

  return (
    <section className="small_form">
      <div>
        {cart.map((item) => (
          <div
            className="pop_up_parent_div d-flex p-2"
            key={item.id}
            style={{ justifyContent: "space-between" }}
          >
            <div className="img_div" style={{ width: "35%" }}>
              <img
                width={"100%"}
                src={
                  item?.thumbnail ||
                  "/assets/images/products/checkout_pic.png"
                }
                alt="Product"
              />
            </div>
            <div className="content_div" style={{ width: "65%" }}>
              <p className="prod_title">{item?.title}</p>
              <p className="prod_quantity p-0 m-0">
                Quantity: {item?.quantity || "N/A"}
              </p>
              <p className="prod_quantity p-0 m-0">
                {item?.quantity} × ${Number(item?.current_price).toFixed(2)} = $
                {(item?.quantity * item?.current_price).toFixed(2)}
              </p>
              <div className="delete_div">
                <div>
                  <p className="sizes">Size: {item?.size || "N/A"}</p>
                  <p className="sizes">Color: {item?.color || "N/A"}</p>
                </div>
                <RiDeleteBin5Fill
                  className="icon_prop"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Only one form should wrap the coupon input and summary */}
      <form className="border p-4 shadow-sm rounded" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex  space_between">
          <label htmlFor="subtotal" className="form-label mb-0 fw-bold">
            Subtotal
          </label>
          <span id="subtotal">${subtotal.toFixed(2)}</span>
        </div>

        
        <div className="mb-3 d-flex space_between deliver_div pb-3">
          <label
            htmlFor="deliveryCharges"
            className="form-label mb-0 fw-bold"
            id="delivery"
          >
            Delivery Charges
          </label>
          <span id="delivery">${deliveryFee.toFixed(2)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="sub_total border_bottom d-flex justify-content-between">
            <span className="text-success fw-bold">
              Discount ({couponCode})
            </span>
            <span className="text-success">-${discountAmount.toFixed(2)}</span>
          </div>
        )}

        <p
          style={{
            textAlign: "center",
            color: "#000",
            textDecoration: "underline",
            cursor: "pointer"
          }}
          className="my-1"
          onClick={handleToggleDiscountInput}
        >
          have a coupon code?
        </p>

        {showDiscountInput && (
          <>
            {/* <label htmlFor="discount" id="discount">
              Enter Discount Code
            </label> */}
            <div className="input-group input_div mb-3">
              <input
                type="text"
                id="discountCode"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter Discount Code"
                className="form-control"
                aria-label="Discount Code"
              />
              <button type="submit" className="btn btn-dark">
                {loading ? "....." : "Apply"}
              </button>
            </div>
            {couponError && (
              <small className="text-danger mt-1 d-block">{couponError}</small>
            )}
          </>
        )}


        <div className="d-flex space_between">
          <label htmlFor="grandTotal" className="form-label mb-0 fw-bold">
            Grand Total
          </label>
          <span id="grandTotal" className="fw-bold">
            ${grandTotal.toFixed(2)}
          </span>
        </div>
      </form>
    </section>
  );
}
