"use client";

import "./style.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import useAllProducts from "../../app/all-products/All_ProductResponse_Api";
import { ResponseContext } from "@/app/login/ResponseContext";
import SkeletonLoader from "./SkeletonLoader";

export default function AllProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { addToCart } = useContext(ResponseContext);
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, totalPages } = useAllProducts(currentPage); // Fetch products dynamically

  const togglePopup = () => setShowPopup(!showPopup);
  const toggleFavorite = () => setFavorite(!favorite);

  const handleNavigation = (id) => {
    router.push(`/shop-product-detail/${id}`);
  };

  // Pagination functions
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
          {products.map((Single_Product, index) => (
            <section key={index} id="AllProduct" className="AllProduct pro_item mb-3">
              <div className="img_div">
                <img
                  src={
                    Single_Product?.thumbnail
                      ? Single_Product.thumbnail
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"
                  }
                  onClick={() => handleNavigation(Single_Product.id)}
                  alt="product"
                />
                {favorite ? (
                  <FaHeart className="icon_size" onClick={toggleFavorite} />
                ) : (
                  <FaRegHeart className="icon_size" onClick={toggleFavorite} />
                )}
                <h2 className="mt-1">
                  {Single_Product.title.split(" ").slice(0, 10).join(" ")}
                  {Single_Product.title.split(" ").length > 10 && "..."}
                </h2>
                <p className="detail">{Single_Product?.category_name}</p>
                <div className="price_div">
                  <p className="price">{`$${Single_Product.current_price}`}</p>
                  <p className="old_price">{`$${Single_Product.previous_price}`}</p>
                </div>
                <div className="btn_div" onClick={togglePopup}>
                  <button className="cart mt-1" onClick={() => addToCart(Single_Product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="pagination mt-5 mb-5">
        <FaArrowLeft
          className={`icon_prop ${currentPage === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        />

        {/* Always Show First Page */}
        <p
          className={currentPage === 1 ? "active" : ""}
          onClick={() => goToPage(1)}
        >
          1
        </p>

        {/* Show Dots if currentPage > 3 */}
        {currentPage > 3 && <p>...</p>}

        {/* Display Page Numbers Dynamically */}
        {Array.from({ length: 5 }, (_, i) => {
          let page = currentPage - 2 + i;
          if (page > 1 && page < totalPages) {
            return (
              <p
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => goToPage(page)}
              >
                {page}
              </p>
            );
          }
          return null;
        })}

        {/* Show Dots if currentPage < totalPages - 2 */}
        {currentPage < totalPages - 2 && <p>...</p>}

        {/* Always Show Last Page */}
        {totalPages > 1 && (
          <p
            className={currentPage === totalPages ? "active" : ""} style={{ width: "fit-content" }}
            onClick={() => goToPage(totalPages)}
          >
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
