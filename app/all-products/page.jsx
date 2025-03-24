"use client";
import React, { useEffect, useState } from "react";
import "./all-products.css";
import "../../public/assets/css/theme/main.css";
import AllProduct from "@/components/product/product";
import Dropdown from "@/components/dropdown/Dropdown";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Features from "@/components/Features_div/page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAllProducts from "./All_ProductResponse_Api";
import SkeletonLoader from "@/components/product/SkeletonLoader";

export default function Page() {
  const { products, loading, error } = useAllProducts();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const mostExpensiveProduct = Object.values(products)
    .filter((product) => product.current_price !== undefined)
    .reduce(
      (max, product) =>
        product.current_price > max.current_price ? product : max,
      { current_price: 0 }
    );
  const mostExpensive = mostExpensiveProduct.current_price;
  useEffect(() => {
    if (mostExpensive) {
      setMaxPrice(mostExpensive);
    }
  }, [mostExpensive]);

  const sizeCounts = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 };

  products?.forEach((product) => {
    if (Array.isArray(product.size)) {
      product.size.forEach((size) => {
        if (sizeCounts[size] !== undefined) {
          sizeCounts[size] += 1;
        }
      });
    }
  });

  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(product.current_price);
    const isWithinPriceRange =
      productPrice >= minPrice && productPrice <= maxPrice;
    const matchesSize =
      selectedSizes.length === 0 ||
      (Array.isArray(product.size) &&
        product.size.some((size) => selectedSizes.includes(size)));

    return isWithinPriceRange && matchesSize;
  });

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      loading? <SkeletonLoader /> : (
        <section id="all_product" className="all_product">
      <div className="heading_div">
        <Header2 />
      </div>
      <div className="container margin_top">
        <div className="row">
          <div className="col-md-12 col-lg-3 show_not">
            <Dropdown
              setSelectedSizes={setSelectedSizes}
              sizeCounts={sizeCounts}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              mostExpensive={mostExpensive}
            />
          </div>
          <div className="col-md-12 col-lg-9">
            <AllProduct products={filteredProducts} />
          </div>
          <Features />
        </div>
      </div>
      <Footer2 />
    </section>
      )
  );
}
