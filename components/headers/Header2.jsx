"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./component/Nav";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";
import LanguageSelect2 from "../common/LanguageSelect2";
import "./style_header.css";
// uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky uc-sticky-below uc-sticky-fixed
// --uc-nav-height: 80px; position: fixed !important; width: 1205px !important; margin-top: 0px !important; top: 0px;
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function Header2() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        style={{ "--uc-nav-height": "80px !important" }}
        className={`uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${
          scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
        }`}
        data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      >
        <nav
          className={`bg-white uc-navbar-container uc-navbar-float ft-tertiary z-1 ${
            scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"
          } `}
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="container max-w-xl">
            <div
              className="nav_main_width uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left increase_width_left">
                <div className="uc-logo text-dark dark:text-white">
                  <Link
                    className="panel text-none"
                    href={`/`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="Lexend"
                      src="/assets/images/common/logo_main.png"
                      width="117"
                      height="40"
                    />
                  </Link>
                </div>
                <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                  <Nav />
                </ul>
              </div>
              <div className="uc-navbar-right">
                <div className="icon_div_main">
                  <div className="icons">
                    <CiSearch className="icon_size" />
                    <CiHeart className="icon_size" />
                  </div>
                  <div className="img_div">
                    <img
                      className="icon_size"
                      src="/assets/images/common/login.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="d-none lg:d-block">
                  <Link className="text-none fw-medium " href={`/login`}>
                    <span className="btn_black">Log in</span>
                  </Link>
                </div>

                <a
                  className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                  onClick={openMobileMenu}
                >
                  <svg width={20} height={20} viewBox="0 0 20 20">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                      }}
                    />
                    <rect className="line-1" y={3} width={20} height={2} />
                    <rect className="line-2" y={9} width={20} height={2} />
                    <rect className="line-3" y={9} width={20} height={2} />
                    <rect className="line-4" y={15} width={20} height={2} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <div
        className="uc-sticky-placeholder"
        style={{ height: 0, width: "100% !important", margin: 0 }}
      />{" "} */}
    </>
  );
}
