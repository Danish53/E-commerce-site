"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./shipping_address.css";
import "../../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { BsCreditCard2Back } from "react-icons/bs";

import "./shipping.css";
import { CiHome } from "react-icons/ci";

export default function ShippingAddress() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/review-order");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <section className="page_address mt-3 ">
      <div className="heading_div_2">
        <Header2 />
      </div>
      <div className="container mb-3 mar_top">
        <div className="row">
          <h1>Shipping Address</h1>
          <div className="col-lg-8">
            <div className="icons_parent_div mb-3">
              <div className="icons_div mt-3 mb-5">
                <div className="icon active">
                  <CiHome className="icon_size_shiping " />
                </div>
                <div className="icon">
                <MdOutlineRateReview className="icon_size_shiping" />
                </div>
                <div className="icon">
                <BsCreditCard2Back className="icon_size_shiping " />
                </div>
              </div>
              <hr />
            </div>

            {/* {
              isLoggedIn ? (
                <><div className="mt-5 mb-3">
                  <h3 className="mt-5">Select a Delivery Address</h3>
                  <p>
                    Is the address you’d like to use displayed below correct? If no,
                    click the corresponding “Deliver to this address button. Or you
                    can enter a new delivery address
                  </p>
                </div>
                  <div className="box_parent_div">
                    <div className="box_div ">
                      <div className="d-flex space_between">
                        <h3 className="max_height">Robert Fox</h3>
                        <input type="checkbox" className="max_height" />
                      </div>
                      <p className="mt-1" id="small_word">
                        4517 Washington Ave, Manchester Kentucky 39495
                      </p>
                      <div className="btn_div">
                        <p id="btn">
                          <span>
                            <FaRegEdit />
                          </span>
                          Edit
                        </p>
                        <p id="btn" className="delete">
                          <span>
                            <RiDeleteBinFill />
                          </span>
                          Delete
                        </p>
                      </div>
                    </div>
                    <div className="box_div ">
                      <div className="d-flex space_between">
                        <h3 className="max_height">Robert Fox</h3>
                        <input type="checkbox" className="max_height" />
                      </div>
                      <p className="mt-1" id="small_word">
                        4517 Washington Ave, Manchester Kentucky 39495
                      </p>
                      <div className="btn_div">
                        <p id="btn">
                          <span>
                            <FaRegEdit />
                          </span>
                          Edit
                        </p>
                        <p id="btn" className="delete">
                          <span>
                            <RiDeleteBinFill />
                          </span>
                          Delete
                        </p>
                      </div>
                    </div>
                    <div className="button_div mt-2">
                      <button>Deliver Here</button>
                    </div>
                  </div></>
              ) : ("")
            } */}

            <div className="mt-3">
              <h6>Personal Information</h6>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      For Customers
                    </label>
                    <select
                      id="forCustomers"
                      className="form-control"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="" style={{ color: "#898989" }}>
                        Select for customers
                      </option>
                      <option value="0">Receipt</option>
                      <option value="1">Invoice</option>
                    </select>
                  </div>
                  {selectedOption === "0" && (
                    <>
                      <h6>Receipt</h6>
                      <div className="col-lg-12 mb-3">
                        <label htmlFor="receiptNumber" className="form-label">
                          Tax Code
                        </label>
                        <input
                          type="text"
                          id="receiptNumber"
                          className="form-control w-100" style={{ width: "100%", maxWidth: "100%" }}
                          placeholder="16-character limit. (e.g., dots, dashes, or spaces)"
                        />
                      </div>
                    </>
                  )}

                  {/* Show if Invoice is selected */}
                  {selectedOption === "1" && (
                    <>
                      <h6>Invoice</h6>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="companyname" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyname"
                          className="form-control"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="number" className="form-label">
                          VAT Number (Partita IVA)
                        </label>
                        <input
                          type="text"
                          id="number"
                          className="form-control"
                          placeholder="VAT Number (Partita IVA)"
                        />
                      </div>
                    </>
                  )}
                  <h6>Billing Address</h6>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Street Address"
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label htmlFor="City" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      placeholder="Enter City"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="address" className="form-label">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Postal Code"
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label htmlFor="Country" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Country"
                      placeholder="Enter Country"
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label htmlFor="address" className="form-label">
                      Phone Number (optional but recommended)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="address"
                      placeholder="Enter Phone Number"
                    />
                  </div>

                  <div className="checkbox_div mb-2">
                    <input
                      type="checkbox"
                      className=""
                      id="defaultAddress"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="defaultAddress"
                    >
                      Same as billing address
                    </label>
                  </div>

                  {!isChecked && (
                    <>
                      <h6 className="mt-3">Shipping Address</h6>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Street Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Street Address"
                        />
                      </div>

                      <div className="col-lg-6 mb-3">
                        <label htmlFor="City" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="City"
                          placeholder="Enter City"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="address" className="form-label">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Enter Postal Code"
                        />
                      </div>

                      <div className="col-lg-6 mb-3">
                        <label htmlFor="Country" className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Country"
                          placeholder="Enter Country"
                        />
                      </div>

                      <div className="col-lg-6 mb-3">
                        <label htmlFor="address" className="form-label">
                          Phone Number (optional but recommended)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="address"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </>
                  )}

                </div>
                {/* <div className="mb-2 select_div ">
                  <div className="checkbox_div">
                    <input type="checkbox" className="" id="defaultAddress" />
                    <label
                      className="form-check-label"
                      htmlFor="defaultAddress"
                    >
                      Use as my default address
                    </label>
                  </div>
                </div> */}
                <button
                  type="submit"
                  onClick={handleClick}
                  className="btn btn-custom w-100"
                >
                  Add New Address
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <SmallForm />
          </div>
        </div>
      </div>
      <Footer2 />
    </section>
  );
}
