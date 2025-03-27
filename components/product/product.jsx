"use client";

import "./style.css";
import { FaRegHeart, FaHeart, FaArrowLeft, FaArrowRight, FaAngleDown } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import useAllProducts from "../../app/all-products/All_ProductResponse_Api";
import { ResponseContext } from "@/app/login/ResponseContext";
import SkeletonLoader from "./SkeletonLoader";

export default function AllProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(ResponseContext);
  const router = useRouter();

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const [productss, setProducts] = useState([]);
  console.log(productss, "filter out pro....")

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) return;

      let apiUrl = `https://foundation.alphalive.pro/api/front/products/category/${category}`;
      if (subcategory) {
        apiUrl += `&${subcategory}`;
      }

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data, "prodata data data")
        if (data.status && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, subcategory]);

  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, totalPages } = useAllProducts(currentPage);

  const { addToWishlist, removeFromWishlist, wishlist } = useContext(ResponseContext);
  console.log(wishlist, "wishlist")

  useEffect(() => {
    products.forEach(product => {
      const productId = product.id;
      const isFav = wishlist.some(item => item.id === productId);
      console.log(`Product ID ${productId} favorite status: ${isFav}`);
    });
  }, [wishlist, products]);

  const handleNavigation = (id) => {
    router.push(`/shop-product-detail/${id}`);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
      <div className="results_main mb-3">
        <div className="results">
          <div className="img_div">
            <img src="/assets/images/common/showing.png" />
            <img src="/assets/images/common/results.png" />
          </div>
          <p>{`Showing page ${currentPage} of ${totalPages}`}</p>
        </div>
        <div className="results">
          <FaAngleDown />
          <p>Sort by latest</p>
        </div>
      </div>

      {loading ? <SkeletonLoader /> : (
        <div className="all_product_parent_div">
          {productss.map((product, index) => {
            const productId = product.id;
            const isFavorite = wishlist.some((item) => item.id === productId);

            const toggleFavorite = () => {
              if (isFavorite) {
                removeFromWishlist(productId);
              } else {
                addToWishlist(productId);
              }
            };

            return (
              <section key={index} id="AllProduct" className="AllProduct pro_item mb-3">
                <div className="img_div">
                  <img
                    src={product.thumbnail || "fallback-image-url.jpg"}
                    onClick={() => handleNavigation(productId)}
                    alt="product"
                  />
                  {isFavorite ? (
                    <FaHeart className="icon_size" onClick={toggleFavorite} />
                  ) : (
                    <FaRegHeart className="icon_size" onClick={toggleFavorite} />
                  )}
                  <h2 className="mt-1">{product.title.split(" ").slice(0, 10).join(" ")}...</h2>
                  <p className="detail">{product.category_name}</p>
                  <div className="price_div">
                    <p className="price">{`$${product.current_price}`}</p>
                    <p className="old_price">{`$${product.previous_price}`}</p>
                  </div>
                  <div className="btn_div">
                    <button className="cart mt-1" onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      <div className="pagination mt-5 mb-5">
        <FaArrowLeft
          className={`icon_prop ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        />
        <p className={currentPage === 1 ? "active" : ""} onClick={() => goToPage(1)}>1</p>
        {currentPage > 3 && <p>...</p>}
        {Array.from({ length: 5 }, (_, i) => {
          let page = currentPage - 2 + i;
          if (page > 1 && page < totalPages) {
            return (
              <p key={page} className={currentPage === page ? "active" : ""} onClick={() => goToPage(page)}>
                {page}
              </p>
            );
          }
          return null;
        })}
        {currentPage < totalPages - 2 && <p>...</p>}
        {totalPages > 1 && (
          <p className={currentPage === totalPages ? "active" : ""} onClick={() => goToPage(totalPages)}>
            {totalPages}
          </p>
        )}
        <FaArrowRight
          className={`icon_prop ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={nextPage}
        />
      </div>
    </>
  );
}
