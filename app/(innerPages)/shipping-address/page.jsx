"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import "./shipping_address.css";
import "../../../public/assets/css/theme/main.css";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { MdOutlineRateReview } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { ResponseContext } from "@/app/login/ResponseContext";
import SmallForm from "@/components/SmallForm/SmallForm";

export default function ShippingAddress() {
  const { response_Context, setFormDataCheckout } = useContext(ResponseContext);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    full_name: response_Context?.user?.full_name || "",
    email: response_Context?.user?.email || "",
    password: "",
    customer_type: "",
    taxCode: "",
    companyName: "",
    vatNumber: "",
    isChecked,
    billing_street: response_Context?.user?.address || "",
    billing_city: response_Context?.user?.city || "",
    billing_postal_code: response_Context?.user?.zip_code || "",
    billing_country: response_Context?.user?.country || "",
    billing_phone: response_Context?.user?.phone || "",
    shipping_street: response_Context?.user?.address || "",
    shipping_city: response_Context?.user?.city || "",
    shipping_postal_code: response_Context?.user?.zip_code || "",
    shipping_country: response_Context?.user?.country || "",
    shipping_phone: response_Context?.user?.phone || "", 
  });

  console.log(formData, "form data...,,a,,a,a,a,a,");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      shipping_street: isChecked ? formData.billing_street : formData.shipping_street,
      shipping_city: isChecked ? formData.billing_city : formData.shipping_city,
      shipping_postal_code: isChecked ? formData.billing_postal_code : formData.shipping_postal_code,
      shipping_country: isChecked ? formData.billing_country : formData.shipping_country,
      shipping_phone: isChecked ? formData.billing_phone : formData.shipping_phone,
    };

    setFormDataCheckout((prev) => ({
      ...prev,
      address: finalData,
    }));

    router.push("/review-order");
  };

  return (
    <section className="page_address mt-3">
      <div className="heading_div_2">
        <Header2 />
      </div>
      <div className="container mb-3" style={{ paddingTop: "120px" }}>
        <div className="row">
          <h1>Shipping Address</h1>
          <div className="col-lg-8">
            <div className="icons_parent_div mb-3">
              <div className="icons_div mt-3 mb-5">
                <div className="icon active">
                  <CiHome className="icon_size_shiping" />
                </div>
                <div className="icon">
                  <MdOutlineRateReview className="icon_size_shiping" />
                </div>
                <div className="icon">
                  <BsCreditCard2Back className="icon_size_shiping" />
                </div>
              </div>
              <hr />
            </div>

            <form onSubmit={handleSubmit}>
              <h6>Personal Information</h6>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="full_name">Full Name</label>
                  <input type="text" id="full_name" className="form-control" value={formData.full_name} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="customer_type">For Customers</label>
                  <select id="customer_type" className="form-control" value={formData.customer_type} onChange={handleChange}>
                    <option value="">Select for customers</option>
                    <option value="0">Receipt</option>
                    <option value="1">Invoice</option>
                  </select>
                </div>

                {formData.customer_type === "0" && (
                  <div className="col-lg-12 mb-3">
                    <label htmlFor="taxCode">Tax Code</label>
                    <input type="text" id="taxCode" className="form-control" value={formData.taxCode} onChange={handleChange} />
                  </div>
                )}

                {formData.customer_type === "1" && (
                  <>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="companyName">Company Name</label>
                      <input type="text" id="companyName" className="form-control" value={formData.companyName} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="vatNumber">VAT Number</label>
                      <input type="text" id="vatNumber" className="form-control" value={formData.vatNumber} onChange={handleChange} />
                    </div>
                  </>
                )}

                <h6>Billing Address</h6>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="billing_street">Street Address</label>
                  <input type="text" id="billing_street" className="form-control" value={formData.billing_street} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="billing_city">City</label>
                  <input type="text" id="billing_city" className="form-control" value={formData.billing_city} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="billing_postal_code">Postal Code</label>
                  <input type="text" id="billing_postal_code" className="form-control" value={formData.billing_postal_code} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="billing_country">Country</label>
                  <input type="text" id="billing_country" className="form-control" value={formData.billing_country} onChange={handleChange} />
                </div>
                <div className="col-lg-6 mb-3">
                  <label htmlFor="billing_phone">Phone Number</label>
                  <input type="text" id="billing_phone" className="form-control" value={formData.billing_phone} onChange={handleChange} />
                </div>

                <div className="checkbox_div mb-2">
                  <input type="checkbox" id="sameAsBilling" checked={isChecked} onChange={handleCheckboxChange} />
                  <label htmlFor="sameAsBilling">Same as billing address</label>
                </div>

                {!isChecked && (
                  <>
                    <h6 className="mt-3">Shipping Address</h6>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="shipping_street">Street Address</label>
                      <input type="text" id="shipping_street" className="form-control" value={formData.shipping_street} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="shipping_city">City</label>
                      <input type="text" id="shipping_city" className="form-control" value={formData.shipping_city} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="shipping_postal_code">Postal Code</label>
                      <input type="text" id="shipping_postal_code" className="form-control" value={formData.shipping_postal_code} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="shipping_country">Country</label>
                      <input type="text" id="shipping_country" className="form-control" value={formData.shipping_country} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label htmlFor="shipping_phone">Phone Number</label>
                      <input type="text" id="shipping_phone" className="form-control" value={formData.shipping_phone} onChange={handleChange} />
                    </div>
                  </>
                )}

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-primary w-100">Continue</button>
                </div>
              </div>
            </form>
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
