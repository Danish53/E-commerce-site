"use client";
import React, { useState, useEffect } from "react";
import MyProfile from "../../components/MyProfile/profile";
import "../../public/assets/css/theme/main.css";
import "./my_address.css";
import { FiPhone } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { IoClose } from "react-icons/io5";

export default function page() {
  // const [displayForm, setDisplayForm] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const closeEditform = () => {
    if (showForm) {
      setShowForm(false);
    }
  };

  const handleEditForm = () => {
    setShowForm(true);
  };

  const handleForm = () => {
    setDisplayForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm) {
      document.body.style.backgroundColor = "#f4f4f4";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }

    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [showForm]);

  return (
    <section className="my_address ">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container mar_top">
        <div className="row" onClick={closeEditform}>
          <div className="col-md-4 my_profile">
            <div className="position_fixed">
              <MyProfile />
            </div>
          </div>
          <div className="col-md-8 second_div" onClick={handleForm}>
            <p id="btn" className="mb-3">
              + Add New Address
            </p>
            <div className="address_parent_div pb-3 mb-3">
              <h3>Robert Fox</h3>
              <div className="address_div">
                <div className="flex_div">
                  <p>4517 Washington Ave, Manchester Kentucky 39495</p>
                  <div className="phone_div">
                    <FiPhone className="icon_size" />
                    <p>(209) 555000117</p>
                  </div>
                </div>
                <div className="btn_div">
                  <div className="edit_div">
                    <button className="edit" onClick={handleEditForm}>
                      <TiEdit className="edit_icon" />
                      Edit
                    </button>
                  </div>
                  <div className="delete_div">
                    <button className="delte">
                      <RiDeleteBin5Line /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="address_parent_div pb-3 mb-3">
              <h3>Robert Fox</h3>
              <div className="address_div">
                <div className="flex_div">
                  <p>4517 Washington Ave, Manchester Kentucky 39495</p>
                  <div className="phone_div">
                    <FiPhone className="icon_size" />
                    <p>(209) 555000117</p>
                  </div>
                </div>
                <div className="btn_div">
                  <div className="edit_div">
                    <button className="edit">
                      <TiEdit className="edit_icon" />
                      Edit
                    </button>
                  </div>
                  <div className="delete_div">
                    <button className="delte">
                      <RiDeleteBin5Line /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="address_parent_div pb-3 mb-3">
              <h3>Robert Fox</h3>
              <div className="address_div">
                <div className="flex_div">
                  <p>4517 Washington Ave, Manchester Kentucky 39495</p>
                  <div className="phone_div">
                    <FiPhone className="icon_size" />
                    <p>(209) 555000117</p>
                  </div>
                </div>
                <div className="btn_div">
                  <div className="edit_div">
                    <button className="edit">
                      <TiEdit className="edit_icon" />
                      Edit
                    </button>
                  </div>
                  <div className="delete_div">
                    <button className="delte">
                      <RiDeleteBin5Line /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showForm && (
          <form className="edit_form active">
            <div className="address_div">
              <h3>Add a new address</h3>
              <IoClose className="icon_size" onClick={handleClose} />
            </div>
            <div className="mb-3 mt-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="mb-3">
              <label>Flat, House no., Building, Company, Apartment</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 select_div">
              <label>City</label>
              <select>
                <option>Select City</option>
                <option>New York</option>
                <option>London</option>
                <option>Karachi</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Pin Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pin Code"
              />
            </div>

            <div className="mb-3">
              <label>State</label>
              <select className="select_div">
                <option>Select State</option>
                <option>Punjab</option>
                <option>Sindh</option>
              </select>
            </div>

            <div className="mb-3 form_check">
              <input type="checkbox" id="check_box" />
              <label className="form-check-label" htmlFor="check_box">
                Use as my default address
              </label>
            </div>

            <div className="btn_div">
              <button id="cancel">Cancel</button>
              <button id="add_new">Add New Address</button>
            </div>
          </form>
        )}
      </div>
      <Footer2 />
    </section>
  );
}
