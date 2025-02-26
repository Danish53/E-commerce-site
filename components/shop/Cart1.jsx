"use client";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { products } from "@/data/products";
import "./Cart1.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Cart1() {
  const router = useRouter();

  const {
    cartProducts,
    setCartProducts,
    totalPrice,
    isAddedToCartProducts,
    addProductToCart,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };

  const handleNavigate = () => {
    router.push("/shipping-address");
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
                {!cartProducts.length ? (
                  <p className="alert alert-warning" hidden="">
                    Your cart empty!
                  </p>
                ) : (
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
                      {cartProducts.map((elm, i) => (
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
                                src={elm.image}
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
                                    Girls Pink Moana Printed Dress
                                    {/* {elm.name} */}
                                  </Link>
                                </h5>
                                <p>Size: S</p>
                              </div>
                            </div>
                          </td>
                          {/* <td>
                            <h5 className="title h6 m-0">
                              <Link
                                href={`/shop-product-detail/${elm.id}`}
                                className="text-none"
                              >
                                {elm.name}
                              </Link>
                            </h5>
                          </td> */}
                          <td>
                            <span className="price">
                              ${elm.price.toFixed(2)}
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
                              value={elm.quantity}
                              onChange={(e) =>
                                setQuantity(elm.id, e.target.value / 1)
                              }
                              title="Qty"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <span className="subtotal">
                              ${(elm.price * elm.quantity).toFixed(2)}
                            </span>
                          </td>
                          <td>
                            <RiDeleteBin4Fill className="delete_icon_table" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </form>
            </div>

            <div className="col-lg-4">
              <table className="table table_border table-borderless pb-3">
                <tbody className="mb-3">
                  <tr className="sub_total border_bottom">
                    <th className="ft-tertiary text-black font_family">
                      <span className="font_family">Subtotal</span>
                    </th>
                    <td className="text_align_right">
                      ${totalPrice.toFixed(2)}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="2" className="p-3">
                      <form className="">
                        <label>Enter Discount Code</label>
                        <div className="input_div d-flex justify-content-center align-items-center">
                          <input
                            type="text"
                            placeholder="Flat 50"
                            className="cupon_input"
                          />
                          <button type="submit" className="apply">
                            Apply
                          </button>
                        </div>
                      </form>
                    </td>
                  </tr>

                  <tr className="border_bottom">
                    <th className="ft-tertiary text-black delivery_charges ">
                      <span className="font_family">Delivery Charges</span>
                    </th>
                    <td className="text_align_right">
                      <span className="total font_family delivery_charges">
                        {/* ${(totalPrice + 23).toFixed(2)} */}
                        $5.00
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th className="ft-tertiary text-black grand_total">
                      <span className="font_family">Grand Total</span>
                    </th>
                    <td className="text_align_right">
                      <span className="total  grand_total font_family ">
                        ${(totalPrice + 23).toFixed(2)}
                      </span>
                    </td>
                  </tr>

                  <tr className="tr_row ft-tertiary">
                    <td colSpan="2" className="checkout_td text-center">
                      <button
                        // href={`/shop-checkout`}
                        className="w-100  check_out_btn"
                        onClick={handleNavigate}
                      >
                        Proceed to checkout
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
