import React from "react";
import "./shipping_address.css";
import "../../../public/assets/css/theme/main.css";
import SmallForm from "@/components/SmallForm/SmallForm";
import { MdOutlineRateReview } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

export default function ShippingAddress() {
  return (
    <section className="page_address mt-3 mb-3">
      <div className="container">
        <div className="row">
          <h1>Shipping Address</h1>
          <div className="col-lg-8">
            <div className="icons_parent_div mb-3">
              <div className="icons_div mt-3 mb-5">
                <div className="icon">
                  <MdOutlineRateReview />
                </div>
                <div className="icon">
                  <MdPayment />
                </div>
                <div className="icon">
                  <IoIosHome />
                </div>
              </div>
              <hr />
            </div>

            <div className="mt-5 mb-3">
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
                    Edit
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
                    Edit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h4>Add New Address</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    House No. Building, Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <select className="form-select" id="city" defaultValue="1">
                    <option>Select City</option>
                    <option value="1">City 1</option>
                    <option value="2">City 2</option>
                    <option value="3">City 3</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="pincode" className="form-label">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Enter Pin Code"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="suite" className="form-label">
                    Suite
                  </label>
                  <select className="form-select" id="suite">
                    <option selected>Select Suite</option>
                    <option value="1">Suite 1</option>
                    <option value="2">Suite 2</option>
                    <option value="3">Suite 3</option>
                  </select>
                </div>

                <div className="mb-2  ">
                  <div className="checkbox_div">
                    <input type="checkbox" className="" id="defaultAddress" />
                    <label
                      className="form-check-label"
                      htmlFor="defaultAddress"
                    >
                      Use as my default address
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-custom w-100">
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
    </section>
  );
}
