"use client";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error("All fields are required!");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("https://foundation.alphalive.pro/api/front/contactmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data, "contact uss....")
            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
            } else {
                toast.error(data.message || "Something went wrong!");
            }
        } catch (error) {
            toast.error("Failed to send message!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section>
                <Header2 />
                <div className="main_div mb-5" style={{ paddingTop: "120px" }}>
                    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg  p-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-2">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-800">
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Send Message...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                <Footer2 />
            </section>
        </>
    );
}
