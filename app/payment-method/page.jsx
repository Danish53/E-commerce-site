"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import "./payment_method.css";
import "../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview, MdPayment } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { BsCreditCard2Back } from "react-icons/bs";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ResponseContext } from "../login/ResponseContext";
import toast, { Toaster } from "react-hot-toast";

const stripePromise = loadStripe("pk_test_51P9nOyBFIC31oQQ9z2NYl6wOYe2zKX9ScrgJTYBzD4Uyu7scr1NyULhFSv7RFZqLMKxD2HGqBUK91CPXiDCqnXrN000Em3qcXx");

function StripeForm() {
  const router = useRouter();
  const { setFormDataCheckout, formDataCheckout, discountAmount, cart, setting } = useContext(ResponseContext);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const CARD_OPTIONS = {
    style: {
      base: {
        iconColor: '#5469d4',
        color: '#333',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#a0aec0',
        },
      },
      invalid: {
        iconColor: '#e53e3e',
        color: '#e53e3e',
      },
    },
  };

  const getTotalAmount = () => {
    return cart?.reduce((total, item) => total + item.current_price * item.quantity, 0).toFixed(2) || "0.00";
  };
  const subtotal = getTotalAmount();
  const deliveryFee = Number(setting?.shipping_cost || 0);
  const grandTotal = subtotal - discountAmount + deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    try {
      setLoading(true);
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        console.error(error.message);
      } else {
        console.log("Stripe Token:", token);
        setFormDataCheckout(prev => ({
          ...prev,
          paymentData: {
            ...prev.paymentData,
            stripe_token: token.id,
          },
        }));

        const { full_name, email, password, billing_street, billing_city, billing_country, billing_phone, billing_postal_code, shipping_street, shipping_city, shipping_country, shipping_phone, shipping_postal_code, customer_type,
          tax_code,
          company_name,
          vat_number,
          same_as, } = formDataCheckout.address;

        const transformedItems = formDataCheckout.items.map(item => {
          const { id, title, current_price, previous_price, quantity, category, category_name, color, size, rating, thumbnail, created_at, updated_at } = item;
          let finalCategoryName = '';

          if (category_name) {
            finalCategoryName = category_name;
          } else if (category) {
            finalCategoryName = category;
          }
          return {
            id, title, current_price, previous_price, quantity, color, size, rating, thumbnail, created_at, updated_at,
            category_name: finalCategoryName
            // category_name: category_name || category?.category_name || category || '',
            // ...(category?.category_name && { category_name: category.category_name })
          };
        });

        const res = await fetch("https://foundation.alphalive.pro/api/front/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name, email, password, billing_street, billing_city, billing_country, billing_phone, billing_postal_code, shipping_street, shipping_city, shipping_country, shipping_phone, shipping_postal_code, customer_type,
            tax_code,
            company_name,
            vat_number,
            same_as,
            items: transformedItems,
            discount: discountAmount,
            grand_total: grandTotal,
            subtotal: subtotal,
            stripe_token: token.id,
            payment_method: "stripe"
          }),
        });

        const data = await res.json();
        // toast.success(data?.data || "Prder placed!")
        if (res.ok) {
          toast.success(data?.data || "Order placed!");
          router.push('/');
        } else {
          toast.error(data?.message || "Payment failed.");
        }
        // console.log("Payment Response:", data);
      }
    } catch (err) {
      // console.error("Checkout error:", err);
      toast.error("Something went wrong during checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <form onSubmit={handleSubmit} className="card-element-wrapper">
        <CardElement options={CARD_OPTIONS} />
        <button type="submit" className="w-100 mt-3" disabled={!stripe}>{loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Pay With Stripe...
          </>
        ) : (
          "Pay With Stripe"
        )}</button>
      </form>
    </>
  );
}

export default function PaymentMethod() {
  const router = useRouter();
  const { showStripeForm, setShowStripeForm } = useContext(ResponseContext);

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <section className="page_address mt-3 mb-3 pb-3">
        <div className="heading_div">
          <Header2 />
        </div>
        <div className="container">
          <div className="my-container">
            <div className="row">
              <h3>Payment Method</h3>

              <p onClick={handleBack} style={{ cursor: 'pointer' }}>
                    <span>&lt;</span> Back
                  </p>
              <div className="col-lg-8">
                {/* <div className="check_radio_btn_div">
                  <input type="radio" />
                  <p>Debit/Credit Card</p>
                </div> */}
                <div className="icons_parent_div mb-3">
                  <div className="icons_div mt-3 mb-5">
                    <div className="icon active">
                      <CiHome className="icon_size_shiping" />
                    </div>
                    <div className="icon active">
                      <MdOutlineRateReview className="icon_size_shiping" />
                    </div>
                    <div className="icon active">
                      <BsCreditCard2Back className="icon_size_shiping" />
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="mt-3">
                  <h4>Select a Payment Method</h4>
                  <div>
                    <div className="check_radio_btn_div my-3">
                      <input
                        type="checkbox"
                        onChange={(e) => setShowStripeForm(e.target.checked)}
                      />
                      <p>Stripe</p>
                    </div>

                    {showStripeForm && (
                      <Elements stripe={stripePromise}>
                        <StripeForm />
                      </Elements>
                    )}
                  </div>

                  <div className="check_radio_btn_div my-3">
                    <input type="checkbox" />
                    <p>Paypal</p>
                  </div>
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
