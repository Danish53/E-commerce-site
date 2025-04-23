"use client";
import React, { useEffect, useState } from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import MyProfile from "../../../../components/MyProfile/profile";
import "./orderDetail.css";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for skeleton styling

export default function Page() {
    const router = useRouter();
    const { orderId } = useParams();

    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://foundation.alphalive.pro/api/user/order/26/details`);
                const data = await response.json();
                if (response.ok) {
                    setOrderDetails(data.data);
                } else {
                    setError("Failed to fetch order details");
                }
            } catch (error) {
                setError("Error fetching order details");
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' };
        return date.toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <section className="my_Orders">
                <div className="heading_div">
                    <Header2 />
                </div>
                <div className="container product_image">
                    <div className="row mt-5 position_relative">
                        <div className="col-lg-4 my_profile mb-2">
                            <div className="position_fixed">
                                <Skeleton circle width={80} height={80} />
                            </div>
                        </div>
                        <div className="col-lg-8 margin_top mb-4">
                            <div className="mt-5 mb-5">
                                <Skeleton height={30} width="40%" />
                                <Skeleton height={20} width="20%" className="my-3" />
                                <Skeleton height={20} count={5} />
                                <Skeleton height={200} className="my-3" />
                                <Skeleton height={40} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </section>
        );
    }

    return (
        <section className="my_Orders">
            <div className="heading_div">
                <Header2 />
            </div>
            <div className="container product_image">
                <div className="row mt-5 position_relative">
                    <div className="col-lg-4 my_profile mb-2">
                        <div className="position_fixed">
                            <MyProfile />
                        </div>
                    </div>
                    <div className="col-lg-8 margin_top mb-4">
                        <div className="mt-5 mb-5">
                            <h1>Purchased Items</h1>
                            <h3>Order# {orderDetails?.number} [{orderDetails?.status}]</h3>
                            <div className="d-flex justify-between align-items-start">
                                <p>Order Date: {formatDate(orderDetails?.created_at)}</p>
                                <Link href={`/orders/${orderDetails?.id}`}>
                                    <button className="btn btn-dark">Print Order</button>
                                </Link>
                            </div>
                            <div>
                                <h6>Shipping Address</h6>
                                <p>Name: {orderDetails?.shipping_name} <br />
                                    Email: {orderDetails?.shipping_email} <br />
                                    Phone: {orderDetails?.shipping_phone} <br />
                                    Address: {orderDetails?.shipping_address} <br />
                                    {orderDetails?.shipping_city}, {orderDetails?.shipping_zip}, {orderDetails?.shipping_country}
                                </p>
                            </div>
                            <div className="d-flex justify-between">
                                <div>
                                    <h6>Billing Address</h6>
                                    <p>Name: {orderDetails?.billing_name} <br />
                                        Email: {orderDetails?.billing_email} <br />
                                        Phone: {orderDetails?.billing_phone} <br />
                                        Address: {orderDetails?.billing_address} <br />
                                        {orderDetails?.billing_city}, {orderDetails?.billing_zip}
                                    </p>
                                </div>
                                <div>
                                    <h6>Payment Information</h6>
                                    <p>Payment Status: {orderDetails?.payment_status}</p>
                                    <p>Tax: {orderDetails?.tax}</p>
                                    <p>Paid Amount: {orderDetails?.total}</p>
                                    <p>Payment Method: {orderDetails?.payment_method}</p>
                                    <p>Transaction ID: {orderDetails?.transaction_id}</p>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <h6>Ordered Products</h6>
                                <table className="w-full border border-gray-300 text-sm sm:text-base">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-2 text-left">ID#</th>
                                            <th className="p-2 text-left">Name</th>
                                            <th className="p-2 text-left">Detail</th>
                                            <th className="p-2 text-left">Price</th>
                                            <th className="p-2 text-left">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderDetails?.ordered_products &&
                                            Object.entries(orderDetails.ordered_products).map(([key, product], index) => {
                                                const { item, qty } = product;
                                                const productInfo = item?.item || {}; // nested item.item

                                                return (
                                                    <tr key={key} className="border-t">
                                                        <td className="p-2">{productInfo?.id}</td>
                                                        <td className="p-2">{productInfo?.name}</td>
                                                        <td className="p-2">
                                                            Quantity: {product?.item?.qty}
                                                        </td>
                                                        <td className="p-2">{productInfo?.price}</td>
                                                        <td className="p-2">{(parseFloat(productInfo?.price) * product?.item?.qty).toFixed(2)}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </section>
    );
}
