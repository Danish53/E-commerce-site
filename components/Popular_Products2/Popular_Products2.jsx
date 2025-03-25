"use client";
import React, { useEffect, useState } from "react";
import "./Popular_Products2.css";
import { fetchPopularProducts } from "../popular_products/fetchPopularProducts";
import useCategories from "../headers/categories";

export default function Popular_Products2() {
  const [loading, setLoading] = useState();
    const { latestCategories } = useCategories();
    const [categories, setCategories] = useState([]);
    console.log(categories, "cateiiiii")
  
    useEffect(() => {
      const fetchCategories = async () => {
        const data = await latestCategories();
        console.log(data, "datatatatatat.....") // Call function and wait for data
        if (data.status && Array.isArray(data.data)) {
          setCategories(data.data); // ✅ Store categories in state
        } else {
          throw new Error("Invalid API response structure");
        }
      };
  
      fetchCategories();
    }, []);

  return (
    <section id="Popular_Products2" className="mt-3 mb-5">
      <div className="container">
        <h1>Popular Categories</h1>
        <div className="card_parent mt-3">
          {
            loading? (
              <p>loading...</p>
            ) : (
              categories?.map((item, index) => {
                return (
                  <div className="single_card mt-1" key={index}>
                    <img src={item?.image} />
                    <div className="info_div">
                      <h4>{item?.name}</h4>
                      <p>{item?.subs[0]?.name}</p>
                    </div>
                  </div>
                );
              })
            )
          }
        </div>
      </div>
    </section>
  );
}
