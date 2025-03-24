"use client";
import axios from "axios";
import "./dropdown.css";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function Dropdown({
  setSelectedSizes,
  sizeCounts,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  mostExpensive,
}) {
  const [ProductCategories, setProductCategories] = useState(false);
  const [filterbyPrice, setFilterbyPrice] = useState(false);
  const [filterbyColor, setFilterbyColor] = useState(false);
  const [filterbySize, setFilterbySize] = useState(false);
  // console.log(sizeCounts);

  /////////code for Catogories//////////
  const [all_productCategories, all_setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://foundation.alphalive.pro/api/front/categories"
        );
        const data = await response.json();
        console.log("data from categroeis", data);
        all_setProductCategories(data.data);
        console.log("all_setProductCategories", all_productCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const Catogoreis_handleCheckboxChange = async (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected === category.id ? null : category.id
    );

    const cate_id = category.id;
    const api_filterby_id = `https://foundation.alphalive.pro/api/front/products/filter/category`;

    try {
      const response = await fetch(
        `${api_filterby_id}?category_id=${cate_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /////////End-code for Catogories//////////

  /////////code for color filter//////////
  const [products_color, setProducts_color] = useState([]);
  const [loading_color, setLoading_color] = useState(false);
  const [error_color, setError_color] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);

  const fetchProductsByColor = async () => {
    if (selectedColors.length === 0) {
      console.log("No color selected");
      return;
    }
    try {
      const response = await fetch(
        `https://foundation.alphalive.pro/api/front/products/filter/color?color=${encodeURIComponent(
          JSON.stringify(selectedColors)
        )}`
      );
      const data = await response.json();

      const filteredData = data.filter((product) =>
        selectedColors.includes(product.color_code)
      );

      console.log("Filtered Products:", filteredData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsByColor();
  }, [selectedColors]);

  const handleChangeColor = (event) => {
    const { name, checked } = event.target;
    setSelectedColors((prevColors) =>
      checked
        ? [...prevColors, name === "red" ? "#f41c1c" : name]
        : prevColors.filter((color) => color !== name && color !== "#f41c1c")
    );
  };

  console.log("selected color: ", selectedColors);

  //////////////code for color filter End///////////////

  //////////////for size/////////////////////////////
  const [selectedSizes, setLocalSelectedSizes] = useState([]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setLocalSelectedSizes((prevSizes) =>
      checked ? [...prevSizes, name] : prevSizes.filter((size) => size !== name)
    );
  };
  // Sync local state with MainPage state
  useEffect(() => {
    setSelectedSizes(selectedSizes);
  }, [selectedSizes, setSelectedSizes]);

  const handlebySize = () => {
    setFilterbySize(!filterbySize);
  };

  const handleProductCategories = () => {
    setProductCategories(!ProductCategories);
  };

  const handleFilterebyPrice = () => {
    setFilterbyPrice(!filterbyPrice);
  };

  const handlebyColor = () => {
    setFilterbyColor(!filterbyColor);
  };
  return (
    <>
      <div className="Product_Categories">
        <div className="heading_icon" onClick={handleProductCategories}>
          <h3>Product Categories</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {ProductCategories && (
          <ul>
            {all_productCategories.map((category, index) => (
              <li key={category.id}>
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  name={category.name}
                  checked={selectedCategories === category.id}
                  onChange={() => Catogoreis_handleCheckboxChange(category)}
                />
                <label htmlFor={`category-${index}`}>{category.name}</label>
              </li>
            ))}
          </ul>
        )}

        <div className="filterByPrice_div">
          <div className="heading_icon" onClick={handleFilterebyPrice}>
            <h3>Filter by Price</h3>
            <RiArrowDropDownLine className="drop_down_icon" />
          </div>
          {filterbyPrice && (
            <PriceSlider
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
              mostExpensive={mostExpensive}
            />
          )}
        </div>

        <div className="heading_icon" onClick={handlebyColor}>
          <h3>Filter by Color</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {filterbyColor && (
          <ul>
            <div className="color_div d-flex">
              <li>
                <input
                  className="red"
                  type="checkbox"
                  id="red"
                  name="red"
                  onChange={handleChangeColor}
                />
                <label htmlFor="red">Red</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  className="orange"
                  type="checkbox"
                  id="orange"
                  name="orange"
                  onChange={handleChangeColor}
                />
                <label htmlFor="orange">Orange</label>
              </li>
              <p>(12)</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  className="blue"
                  type="checkbox"
                  id="blue"
                  name="blue"
                  onChange={handleChangeColor}
                />
                <label htmlFor="blue">Blue</label>
              </li>
              <p>(12)</p>
            </div>

            <div className="color_div d-flex">
              <li>
                <input
                  className="yellow"
                  type="checkbox"
                  id="yellow"
                  name="yellow"
                  onChange={handleChangeColor}
                />
                <label htmlFor="yellow">Yellow</label>
              </li>
              <p>(12)</p>
            </div>

            <div className="color_div d-flex">
              <li>
                <input
                  className="green"
                  type="checkbox"
                  id="green"
                  name="green"
                  onChange={handleChangeColor}
                />
                <label htmlFor="green">Green</label>
              </li>
              <p>(12)</p>
            </div>
          </ul>
        )}
        <div className="heading_icon" onClick={handlebySize}>
          <h3>Filter by Size</h3>
          <RiArrowDropDownLine className="drop_down_icon" />
        </div>
        {filterbySize && (
          <ul>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="S"
                  name="S"
                  value="checked"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="S">S</label>
              </li>
              <p>{sizeCounts.S}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="M"
                  name="M"
                  value="checked"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="M">M</label>
              </li>
              <p>{sizeCounts.M}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="large"
                  name="large"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="large">L</label>
              </li>
              <p>{sizeCounts.L}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="XL"
                  name="XL"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="XL">XL</label>
              </li>
              <p>{sizeCounts.XL}</p>
            </div>
            <div className="color_div d-flex">
              <li>
                <input
                  type="checkbox"
                  id="XXL"
                  name="XXL"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="XXL">XXL</label>
              </li>
              <p>{sizeCounts.XXL}</p>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
