"use client";
import React, { useState, useEffect } from "react";
import Navber from "../../components/navbar";
import Abouts from "../../components/about";
import Head from "next/head";

import Footer from "@/components/footer";
import { GrLinkTop } from "react-icons/gr";

function About() {
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
    <div className="overflow-x-hidden">
      <Head>
        <title>
          The best Residual Fuel & Tyre Oil Supplier in Ghana | Wisdeck
        </title>
        <meta
          name="description"
          content="Wisdeck is a leading residual fuel and tyre oil supplier in Ghana. We offer fuel testing and analysis services to ensure optimal performance and compliance."
        />
      </Head>

      <Abouts />

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

export default About;
