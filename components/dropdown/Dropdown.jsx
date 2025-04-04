"use client";
import { useState, useEffect, useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./dropdown.css";
import { ResponseContext } from "@/app/login/ResponseContext";
import Slider from "@mui/material/Slider";

export default function Dropdown() {
  const { filters, setFilters } = useContext(ResponseContext);
  console.log(filters, "filters pro..,,,,.,.,")

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [filterByPrice, setFilterByPrice] = useState(false);
  const [filterByColor, setFilterByColor] = useState(false);
  const [filterBySize, setFilterBySize] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Electronic");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("XXL");
  const [priceRange, setPriceRange] = useState([0, 100]);

  const colors = ["red", "blue", "green", "black", "white"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://foundation.alphalive.pro/api/front/categories");
        const data = await response.json();
        if (data.status && Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Update filters and trigger API call when selected filters change
  useEffect(() => {
    // Update filters when category, color, size, or price range changes
    setFilters({
      category_name: selectedCategory,
      color: selectedColor,
      size: selectedSize,
      min_price: priceRange[0],
      max_price: priceRange[1],
    });

    // Update the URL to reflect the selected filters
    const queryParams = new URLSearchParams({
      category_name: selectedCategory,
      color: selectedColor,
      size: selectedSize,
      min_price: priceRange[0],
      max_price: priceRange[1],
    }).toString();
    // window.history.pushState({}, "", `?${queryParams}`);
  }, [selectedCategory, selectedColor, selectedSize, priceRange, setFilters]);

  return (
    <div className="Product_Categories">
      {/* Category Filter */}
      <div className="heading_icon" onClick={() => setCategoriesOpen(!categoriesOpen)}>
        <h3>Product Categories</h3>
        <RiArrowDropDownLine className="drop_down_icon" />
      </div>
      {categoriesOpen && (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <input
                type="radio"
                id={category.name}
                name="category"
                checked={selectedCategory === category.name}
                onChange={() => setSelectedCategory(category.name)}  // Ensure state update
              />
              <label htmlFor={category.name}>{category.name}</label>
            </li>
          ))}
        </ul>
      )}

      {/* Price Filter */}
      <div className="heading_icon" onClick={() => setFilterByPrice(!filterByPrice)}>
        <h3>Filter by Price</h3>
        <RiArrowDropDownLine className="drop_down_icon" />
      </div>
      {filterByPrice && (
        <div className="slider-container">
          <div className="slider-value">Price: ${priceRange[0]} - ${priceRange[1]}</div>
          <Slider
            className="custom-slider"
            value={priceRange}
            onChange={(_, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={100}
          />
        </div>
      )}

      {/* Color Filter */}
      <div className="heading_icon" onClick={() => setFilterByColor(!filterByColor)}>
        <h3>Filter by Color</h3>
        <RiArrowDropDownLine className="drop_down_icon" />
      </div>
      {filterByColor && (
        <ul className="color_div d-flex">
          {colors.map((color) => (
            <li key={color}>
              <input
                type="radio"
                id={color}
                name="color"
                checked={selectedColor === color}
                onChange={() => setSelectedColor(color)}
              />
              <label htmlFor={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</label>
            </li>
          ))}
        </ul>
      )}

      {/* Size Filter */}
      <div className="heading_icon" onClick={() => setFilterBySize(!filterBySize)}>
        <h3>Filter by Size</h3>
        <RiArrowDropDownLine className="drop_down_icon" />
      </div>
      {filterBySize && (
        <ul className="color_div d-flex">
          {sizes.map((size) => (
            <li key={size}>
              <input
                type="radio"
                id={size}
                name="size"
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
              />
              <label htmlFor={size}>{size}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
