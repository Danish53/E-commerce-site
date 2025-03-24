"use client";
import "./footer.css";
import React, { useEffect, useState } from "react";
import "../../public/assets/css/theme/main.css";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Footer2() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);

  return (
    <>
      <footer id="footer" className="pt-4 pb-4">
        <div className="container">
          <div className="row pb-3 border_bottom">
            <div className="col-lg-3 col-md-6 parent_div">
              <img
                src="/assets/images/common/logo_footer.png"
                id="logo_footer"
              />
              <div className="single_div">
                <div className="icon_div">
                  <MdOutlinePhoneInTalk className="icon_size" />
                </div>
                <div className="text_div">
                  <p>(704) 6663055</p>
                </div>
              </div>

              <div className="single_div">
                <div className="icon_div">
                  <MdOutlineEmail className="icon_size" />
                </div>
                <div className="text_div">
                  <p>krist@gmail.com</p>
                </div>
              </div>

              <div className="single_div">
                <div className="icon_div">
                  <CiLocationOn className="icon_size" />
                </div>
                <div className="text_div">
                  <p>3056 Ranchview Dr. Richard California 6269</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="small_heading pt-2">Information</h4>
              <ul>
                <li>
                  {isLoggedIn? <Link href="/personal-info">My Account</Link> : <Link href="/login">Login</Link>}
                </li>
                <li>
                  <Link href="/my-wishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link href="/shop-cart">Checkout</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="small_heading pt-2">Service</h4>
              <ul>
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>

                <li>
                  <Link href="/">Delivery Information</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">terms & Condition</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="small_heading pt-2">Subscribe</h4>
              <p id="input_text">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <div className="input_box_div mt-3">
                <MdOutlineAttachEmail className="input_icon_size email_icon" />
                <input type="text" placeholder="Your Email" />
                <FaArrowRight className="input_icon_size email_arrow" />
              </div>
            </div>
          </div>
          {/* <hr /> */}

          <div className="bottom_foter pt-3 pb-3 d-flex">
            <img src="/assets/images/common/visa_card.png" />
            <p>2025 Krist All Rights are reserved</p>
            <div className="icon_div">
              <LiaFacebookSquare className="social_icon_size" />
              <FaInstagram className="social_icon_size" />
              <LuTwitter className="social_icon_size" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
