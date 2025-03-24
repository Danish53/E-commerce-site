import React from "react";
import "./personal-info.css";
import MyProfile from "../../components/MyProfile/profile";
import "../../public/assets/css/theme/main.css";
import { FaRegEdit } from "react-icons/fa";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

export default function page() {
  return (
    <section className="persoal_info ">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container mar_top">
        <div className="row">
          <div className="col-lg-4 mb-3 my_profile">
            <div className="position_fixed">
              <MyProfile />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="first_flex_div">
              <div className="img_div">
                <img src="/assets/images/common/persona_img.png" alt="" />
                <FaRegEdit className="edit_icon" />
              </div>
              <div className="edit_btn">
                <FaRegEdit />
                <p>Edit Profile</p>
              </div>
            </div>

            <form className="mt-3 perosnal_info_form">
              <div className="row margin_bottom">
                <div className="col-md-6 ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="row margin_bottom">
                <div className="col-md-6">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="row margin_bottom">
                <div className="col-md-12">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                  />
                </div>
              </div>
              <button className="submit_btn mb-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
