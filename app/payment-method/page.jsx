"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
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

const stripePromise = loadStripe("your-publishable-key-here");

function StripeForm() {
  const { setFormDataCheckout } = useContext(ResponseContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
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

      const res = await fetch("`https://foundation.alphalive.pro/api/front/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.id }),
      });

      const data = await res.json();
      console.log("Payment Response:", data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-element-wrapper">
      <CardElement options={CARD_OPTIONS} />
      <button type="submit" className="w-100 mt-3" disabled={!stripe}>Pay With Stripe</button>
    </form>
  );
}

export default function PaymentMethod() {
  const router = useRouter();
  const { showStripeForm, setShowStripeForm } = useContext(ResponseContext);

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
                  <div className="check_radio_btn_div mt-3 border_botom">
                    <input type="radio" />
                    <p>Google Pay</p>
                  </div>
                  <div>
                    <div className="check_radio_btn_div border_botom">
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
