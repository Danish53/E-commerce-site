import React from "react";
import "../../public/assets/css/theme/main.css";
import "./sign-up.css";

export default function page() {
  return (
    <section className="sign-up" id="sign-up">
      <div className="container">
        <div className="row login-container height_width">
          <div className="col-lg-7">
            <img src="/assets/images/forms/sign_up_pic.png" />
          </div>

          <div className="col-lg-5 j-center">
            <h2>Create New Account</h2>
            <p className="text-muted">Please enter details</p>
            <form className="mt-2">
              <div className="mb-1">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control large border_radius"
                  id="firstName"
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="lastName"
                  required
                />
              </div>

              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="email"
                  required
                />
              </div>

              <div className="mb-1">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control large border_radius"
                  id="password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="rember_div">
                  <div className="check_box_div">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      I agree to the<strong> Terms & Conditions</strong>
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
