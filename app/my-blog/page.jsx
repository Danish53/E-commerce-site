"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../../public/assets/css/theme/main.css";
import "./myblog.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://foundation.alphalive.pro/api/front/blogs"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Fetched Blogs:", result.data);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (id) => {
    router.push(`/my-blog/${id}`);
  };

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <section className="blog_section">
        <div className="heading_div">
          <Header2 />
        </div>
        <div className="container main_div py-3 mb-3">
          <div className="blogs_row mt-2">
            {currentBlogs.map((card, index) => {
              const words = card.details.split(" ");
              const shortDetails =
                words.length > 30
                  ? words.slice(0, 30).join(" ") + "..."
                  : card.details;

              return (
                <div key={card.id || index} className="single_card">
                  <Link href={`/my-blog/${card.id}`}><img src={card.photo} alt={card.title} loading="lazy" /></Link>
                  <h1>{card.title}</h1>
                  <p onClick={() => handleNavigation(card?.id)}>
                    {shortDetails}
                    {words.length > 30 && (
                      <Link href={'/my-blog'} className="read-more">Read More</Link>
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pagination Buttons */}
          <div className="pagination">
            <p
              className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              onClick={prevPage}
            >
              <FaArrowLeft />
              Back
            </p>
            <p
              className={`next ${
                currentPage >= Math.ceil(data.length / blogsPerPage)
                  ? "disabled"
                  : ""
              }`}
              onClick={nextPage}
            >
              Next <FaArrowRight />
            </p> 
          </div>
        </div>
        <Footer2 />
      </section>
    </>
  );
}
