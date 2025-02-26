import React from "react";
import "./login.css";
import "../../public/assets/css/theme/main.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="login" id="login">
      <div className="container set_bg ">
        <div className="row login-container height_width">
          <div className="col-lg-7">
            <img src="/assets/images/forms/login_girl_pic.png" />
          </div>

          <div className="col-lg-5 p-5">
            <h2>Welcome</h2>
            <p className="text-muted">Please login here</p>
            <form className="mt-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control large border_radius"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="rember_div">
                  <div className="check_box_div">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link
                    href={`/forget-password`}
                    className="text-decoration-none"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
