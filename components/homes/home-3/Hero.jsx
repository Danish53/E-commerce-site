"use client";
import "../../../public/assets/css/theme/main.css";
import "./hero_sec.css";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

import { MdOutlineDone } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function Hero() {
  const [counter, setCounter] = useState(1);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCounter(next + 1),
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 439,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imagesArray = [
    {
      img_src: "/assets/images/common/tv.png",
    },
    {
      img_src: "/assets/images/common/tv.png",
    },
    {
      img_src: "/assets/images/common/tv.png",
    },
    {
      img_src: "/assets/images/common/tv.png",
    },
  ];
  return (
    <>
      <section id="hero_sec" className="hero_sec">
        <div className="container">
          <div className="row y-center">
            <div className="col-lg-6 content">
              <h1>Innovation of view starts with 8K</h1>
              <h3>55” Neo QLED 8K</h3>
              <div className="tick_sec_parent">
                <div className="tick_single">
                  <MdOutlineDone className="icon_size" />
                  <p>Quantum Matrix Technology</p>
                </div>
                <div className="tick_single">
                  <MdOutlineDone className="icon_size" />
                  <p>Infinity One Design</p>
                </div>
              </div>
              <div className="add_to_cart_div mt-3">
                <div className="icon_cart_div">
                  <BsCart2 className="icon_size" />
                </div>
                <div className="cart_text">
                  <p>Add to cart</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 img_div">
              <Slider {...settings}>
                {imagesArray.map((item, index) => {
                  return <img src={item.img_src} key={index} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div id="hero_header" className="hero-header section panel overflow-hidden">
    //   <div className="position-absolute top-0 start-0 end-0 h-600px lg:h-screen bg-secondary dark:bg-gray-800 z-0" />
    //   <div
    //     className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
    //     data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
    //   >
    //     <div
    //       className="position-absolute  rotate-45"
    //       style={{ top: "45%", left: "18%" }}
    //     >
    //       <Image
    //         className="w-32px text-gray-900 dark:text-white"
    //         width={193}
    //         height={216}
    //         alt="star-1"
    //         data-uc-svg=""
    //         src="/assets/images/template/star-1.svg"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute  rotate-45"
    //       style={{ top: "20%", right: "18%" }}
    //     >
    //       <Image
    //         className="w-24px text-gray-900 dark:text-white"
    //         width={69}
    //         height={95}
    //         alt="star-2"
    //         data-uc-svg=""
    //         src="/assets/images/template/star-2.svg"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y -rotate-12"
    //       style={{ top: "20%", left: "15%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-trophy"
    //         src="/assets/images/template/icon-trophy.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-trophy-dark"
    //         src="/assets/images/template/icon-trophy-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y rotate-45 ms-n3"
    //       style={{ top: "35%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-location"
    //         src="/assets/images/template/icon-location.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-location-dark"
    //         src="/assets/images/template/icon-location-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y"
    //       style={{ top: "80%", left: "8%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-globe"
    //         src="/assets/images/template/icon-globe.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-globe-dark"
    //         src="/assets/images/template/icon-globe-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y rotate-45"
    //       style={{ top: "50%", right: "18%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-crown"
    //         src="/assets/images/template/icon-crown.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-crown-dark"
    //         src="/assets/images/template/icon-crown-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y -rotate-45"
    //       style={{ top: "80%", right: "8%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-diamond"
    //         src="/assets/images/template/icon-diamond.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-diamond-dark"
    //         src="/assets/images/template/icon-diamond-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //     <div
    //       className="position-absolute translate-middle-y -rotate-12 me-n3"
    //       style={{ top: "35%" }}
    //     >
    //       <Image
    //         className="w-56px xl:w-64px d-block dark:d-none"
    //         alt="icon-chat"
    //         src="/assets/images/template/icon-chat.svg"
    //         width="100"
    //         height="100"
    //       />
    //       <Image
    //         className="w-56px xl:w-64px d-none dark:d-block"
    //         alt="icon-chat-dark"
    //         src="/assets/images/template/icon-chat-dark.svg"
    //         width="100"
    //         height="100"
    //       />
    //     </div>
    //   </div>
    //   <div className="section-outer panel pb-10 pt-9 lg:py-10">
    //     <div className="container max-w-xl">
    //       <div className="section-inner panel">
    //         <div
    //           className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center"
    //           data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
    //         >
    //           <h1 className="h2 sm:h1 lg:display-6 xl:display-4 m-0">
    //             Semplifica i flussi di lavoro{" "}
    //             <br className="d-none lg:d-block" />
    //             della tua attività
    //           </h1>
    //           <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
    //             Gestione semplice con strumenti che ottimizzano le operazioni,
    //             <br className="d-none sm:d-block" />i prezzi e l’esperienza
    //             degli ospiti.
    //           </p>
    //           <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 sm:mt-2 flex-sm-column">
    //             <Link
    //               href={`/page-pricing`}
    //               className="btn btn-md lg:btn-lg btn-primary text-white"
    //             >
    //               14 giorni di prova
    //             </Link>
    //             <a
    //               onClick={openContactModal}
    //               className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
    //               data-uc-toggle=""
    //             >
    //               Contattaci
    //             </a>
    //           </div>
    //           <p className="text-dark dark:text-white text-opacity-70 sm:mt-1 lg:mt-0">
    //             Nessuna carta richiesta
    //           </p>
    //         </div>
    //         <div
    //           className="hero-scene panel max-w-950px mx-auto"
    //           data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
    //         >
    //           <div className="panel text-center overflow-hidden rounded-3 border border-5 border-dark dark:border-white dark:border-opacity-20">
    //             <Image
    //               alt="Main hero image"
    //               src="/assets/images/template/dashboard.jpg"
    //               width="1440"
    //               height="1024"
    //             />
    //           </div>
    //           <div className="position-absolute bottom-0 ltr:end-0 rtl:start-0 ltr:me-n8 rtl:ms-n8 mb-n8">
    //             <Image
    //               className="w-200px d-block dark:d-none"
    //               alt="sitting"
    //               src="/assets/images/template/sitting.svg"
    //               width="200"
    //               height="238"
    //             />
    //             <Image
    //               className="w-200px d-none dark:d-block"
    //               alt="sitting-dark"
    //               src="/assets/images/template/sitting-dark.svg"
    //               width="200"
    //               height="239"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
