"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Navber from "../components/navbar";
import Map from "@/components/map";
import Footer from "@/components/footer";
import Link from "next/link";
import Type from "@/components/type";
import { GrLinkTop } from "react-icons/gr";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Menu from "../components/menu";

import bground from "../public/logo.jpeg";
import Who from "@/components/who";
import Contact from "@/components/contact";
export default function Home() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative">
        <div>
          <Carousel
            autoPlay
            showIndicators
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows
            swipeable={false}
            interval={4000}
          >
            <div className=" ">
              <Image
                className="w-full object-cover h-screen"
                src="/image3.jpg"
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </div>

            <div>
              <Image
                className="w-full object-cover h-screen"
                src="/image1.jpg"
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </div>
            <div>
              <Image
                className="w-full object-cover h-screen"
                src="/image2.jpg"
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </div>
          </Carousel>
        </div>
        <div className="inset-0 absolute bg-black/60 top-0 bottom-0 left-0 right-0"></div>
        <Type />
      </div>

      <Who />
      <Contact />
      <Map />
      <Footer />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0   md:right-3 right-0 bottom-0  md:m-5 m-2 p-3 font-font bg-red-400  shadow-md  hover:bg-white hover:border hover:border-black transition transform duration-200 ease-in-out"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}
    </div>
  );
}
