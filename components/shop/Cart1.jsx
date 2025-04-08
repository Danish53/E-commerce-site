"use client";
import Image from "next/image";
import Link from "next/link";
import "./Cart1.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ResponseContext } from "@/app/login/ResponseContext";

export default function Cart1() {
  const router = useRouter();
  const { cart, removeFromCart, updateCart, discountAmount, applyCoupon, couponCode, couponError } = useContext(ResponseContext);
  console.log(cart, "cart data done???")
  const [loading, setLoading] = useState(false);

  console.log(cart, "chekout response and pass api...")


  const getTotalAmount = () => {
    return cart?.reduce((total, item) => total + item.current_price * item.quantity, 0).toFixed(2) || "0.00";
  };

  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    updateCart(id, newQuantity); // Ensure this function updates the cart state
  };

  const totalPrice = 0;

  // const handleCheckout = async () => {``
  //   if (cart.length === 0) {
  //     alert("Your cart is empty!");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://foundation.alphalive.pro/api/front/checkout",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ items: cart }),
  //       }
  //     );

  //     const result = await response.json();
  //     if (response.ok) {
  //       console.log("Checkout successful:", result);
  //       // router.push("/shipping-address"); 
  //     } else {
  //       console.error("Checkout failed:", result);
  //       alert(result.message || "Checkout failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout:", error);
  //     alert("An error occurred. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleNavigate = ()=>{
    router.push("/shipping-address");
  }

  const [inputCode, setInputCode] = useState("");
  console.log(inputCode, "code input.,.,.,")
  const subtotal = getTotalAmount();
  const deliveryFee = 5;
  const grandtotalPrice = subtotal - discountAmount + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    applyCoupon(inputCode, subtotal);
    setLoading(false)
  };

  return (
    <div className="section ">
      <div className="container">
        <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="shop-header panel vstack  gap-2 lg:gap-4 ">
            <div className="panel">
              <h1 className="mt-3 check">Checkout</h1>
            </div>
          </header>
          <div className="panel cart-details row">
            <div className="col-lg-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="panel max-h-sm overflow-auto "
              >
                {cart.length > 0 ? (
                  <table className="table table-container mb-3" id="table">
                    <thead className="sticky-top ft-tertiary  dark:bg-gray-800 z-1">
                      <tr>
                        <th className="first-col">Products</th>
                        <th className="other-cols">Price</th>
                        <th className="other-cols">Quantity</th>
                        <th className="other-cols">Subtotal</th>
                        <th className="last-col ">Del</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart?.map((elm, i) => (
                        <tr key={i}>
                          {/* <td>
                            <a
                              onClick={() => removeItem(elm.id)}
                              className="remove text-none"
                            >
                              <i className="icon icon-1 unicon-close" />
                            </a>
                          </td> */}
                          <td>
                            <div
                              className="image panel  d-flex items-center gap-[30px]"
                              style={{ gap: "10px" }}
                            >
                              <Image
                                className=""
                                alt="Laptop Cover"
                                src={elm?.thumbnail}
                                width="96"
                                height="98"
                              />

                              <Link
                                href={`/shop-product-detail/${elm.id}`}
                                className="position-cover"
                                data-caption="Laptop Cover"
                              ></Link>
                              <div className="title_size ">
                                <h5 className="title h6 m-0">
                                  <Link
                                    href={`/shop-product-detail/${elm.id}`}
                                    className="text-none"
                                  >
                                    {elm?.title}
                                    {/* {elm.name} */}
                                  </Link>
                                </h5>
                                <p>Size: {elm?.size}</p>
                                <span>Color: {elm?.color}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="price">
                              ${elm?.current_price}
                            </span>
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                              step={1}
                              min={1}
                              max={99}
                              name="quantity"
                              value={elm?.quantity}
                              onChange={(e) => updateCartQuantity(elm?.id, parseInt(e.target.value, 10))}
                              title="Qty"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <span className="subtotal">
                              ${getTotalAmount()}
                            </span>
                          </td>
                          <td>
                            <RiDeleteBin4Fill onClick={() => removeFromCart(elm.id)} className="delete_icon_table" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>) : (
                  <p className="alert alert-warning" hidden="">
                    Your cart empty!
                  </p>
                )
                }
              </form>
            </div>

            <div className="col-lg-4"> 
            <table className="table table_border table-borderless pb-3">
      <tbody className="mb-3">
        <tr className="sub_total border_bottom">
          <th className="ft-tertiary text-black font_family">
            <span className="font_family">Subtotal</span>
          </th>
          <td className="text_align_right">${subtotal}</td>
        </tr>

        {discountAmount > 0 && (
          <tr className="sub_total border_bottom">
            <th className="ft-tertiary text-success font_family">
              Discount ({couponCode})
            </th>
            <td className="text_align_right text-success">
              -${discountAmount.toFixed(2)}
            </td>
          </tr>
        )}

        <tr>
          <td colSpan="2" className="p-3">
            <form onSubmit={handleSubmit}>
              <label>Enter Discount Code</label>
              <div className="input_div d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  placeholder="Flat 50"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="cupon_input"
                />
                <button type="submit" className="apply">{loading? "....." : "Apply"}</button>
              </div>
              {couponError && (
                <small className="text-danger mt-1 d-block">{couponError}</small>
              )}
            </form>
          </td>
        </tr>

        <tr className="border_bottom">
          <th className="ft-tertiary text-black delivery_charges ">
            <span className="font_family">Delivery Charges</span>
          </th>
          <td className="text_align_right">
            <span className="total font_family delivery_charges">
              ${deliveryFee.toFixed(2)}
            </span>
          </td>
        </tr>

        <tr>
          <th className="ft-tertiary text-black grand_total">
            <span className="font_family">Grand Total</span>
          </th>
          <td className="text_align_right">
            <span className="total  grand_total font_family ">
              ${grandtotalPrice.toFixed(2)}
            </span>
          </td>
        </tr>

        <tr className="tr_row ft-tertiary">
          <td colSpan="2" className="checkout_td text-center">
            <button
              className="w-100 check_out_btn"
              onClick={handleNavigate}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Proceed to checkout...
                </>
              ) : (
                "Proceed to checkout"
              )}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
            </div>
          </div>
        </div>
        {/* <div className="lg:order-0">
          <div className="panel vstack gap-1 lg:gap-2">
            <h5 className="h5 sm:h4 mx-0">You may interested in:</h5>
            <div className="row child-cols-6 gy-4 gx-2">
              {products.slice(0, 2).map((elm, i) => (
                <div key={i}>
                  <article className="product type-product panel">
                    <div className="vstack gap-2">
                      <div className="panel">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="White Classic Watch"
                            src={elm.image}
                            width="1280"
                            height="1707"
                          />
                          <Link
                            href={`/shop-product-detail/${elm.id}`}
                            className="position-cover"
                            data-caption="White Classic Watch"
                          ></Link>
                        </figure>
                        {elm.discount && (
                          <span className="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow bg-yellow-400 text-dark">
                            {elm.discount}
                          </span>
                        )}
                      </div>
                      <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                        <h5 className="h6 m-0">
                          <Link
                            className="text-none"
                            href={`/shop-product-detail/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h5>
                        <ul
                          className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                          title="Average 5 out of 5"
                        >
                          {[...Array(elm.rating)].map((elm, i) => (
                            <li key={i}>
                              <i className="icon fs-7 sunicon-star-filled text-yellow" />
                            </li>
                          ))}
                          {[...Array(5 - elm.rating)].map((elm, i) => (
                            <li key={i}>
                              <i className="icon fs-7 sunicon-star-filled" />
                            </li>
                          ))}
                        </ul>
                        <div className="hstack justify-center gap-narrow fs-7">
                          {elm.oldPrice && (
                            <span className="price-old text-line-through opacity-40">
                              ${elm.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="price">${elm.price.toFixed(2)}</span>
                        </div>
                        <a
                          className="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow"
                          onClick={() => addProductToCart(elm.id)}
                        >
                          {isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add To Cart"}
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
