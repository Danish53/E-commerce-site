"use client";
// export const dynamic = 'force-dynamic'
import React, { useEffect, useState } from "react";
import "../../../public/assets/css/theme/main.css";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { useParams } from "next/navigation";
import "../../my-blog/myblog.css";
// import "./myblog.css";

export default function Page() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => { 
            setLoading(true)
            try {
                const response = await fetch(
                    `https://foundation.alphalive.pro/api/front/blog/${id}` // Assuming ID is 9
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch blog details");
                }
                const result = await response.json();
                setBlog(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, []);


    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!blog) return <div className="no-data">No blog found</div>;

    return (
        <>
            <section className="blog_section">
                <div className="heading_div">
                    <Header2 />
                </div>
                <div className="blog-detail-section main_div py-5 pt-5">
                    <div className="container">
                        <h1 className="blog-title">{blog.title}</h1>
                        <p className="blog-meta text-muted">Published on: {blog.created_at}</p>
                        <img src={blog.photo} alt={blog.title} width={'500'} className="blog-image" />
                        <p className="blog-description text-muted">{blog.meta_description}</p>
                        <div className="blog-content mt-4" dangerouslySetInnerHTML={{ __html: blog.details }}></div>
                        <p className="blog-source mt-3">Source: <a href={blog.source} target="_blank" rel="noopener noreferrer">{blog.source}</a></p>
                    </div>
                </div>
                <Footer2 />
            </section>
        </>
    );
}
