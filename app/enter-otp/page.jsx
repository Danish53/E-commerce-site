import React from "react";
import "./enter-otp.css";
import "../../public/assets/css/theme/main.css";
import { IoIosArrowBack } from "react-icons/io";

export default function OtpPage() {
  return (
    <section className="otp" id="otp">
      <div className="container">
        <div className="row login-container height_width">
          <div className="col-lg-7">
            <img src="/assets/images/forms/otp_pic.png" />
          </div>

          <div className="col-lg-5 j-center">
            <div className="icon_div">
              <IoIosArrowBack />
              <p>Back</p>
            </div>
            <h2>Enter OTP</h2>
            <p className="text-muted">
              We’ve share a code of your registered email address
              yourname@gmail.com
            </p>
            <form className="mt-2">
              <div className="input_parent_div">
                <div className="col-auto">
                  <input
                    type="number"
                    className=" square-input"
                    min="0"
                    max="9"
                    maxlength="1"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxlength="1"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxlength="1"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxlength="1"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
