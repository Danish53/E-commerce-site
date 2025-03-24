"use client";
import React, { useEffect, useState } from "react";
import "./Popular_Products2.css";
import { fetchPopularProducts } from "../popular_products/fetchPopularProducts";

export default function Popular_Products2() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        try {
          const data = await fetchPopularProducts();
          setProducts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      getProducts();
    }, []);

  return (
    <section id="Popular_Products2" className="mt-3 mb-5">
      <div className="container">
        <h1>Popular Products</h1>
        <div className="card_parent mt-3">
          {
            loading? (
              <p>loading...</p>
            ) : (
              products?.map((item, index) => {
                return (
                  <div className="single_card mt-1" key={index}>
                    <img src={item?.thumbnail} />
                    <div className="info_div">
                      <h4>{item?.title}</h4>
                      <p>Price: {item?.current_price}</p>
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
