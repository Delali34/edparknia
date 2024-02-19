// components/Footer.js
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-red-400 font-maintext text-white p-8">
      <div className="container mx-auto flex justify-center">
        {/* First Column */}
        <div>
          <div className="flex items-center justify-center">
            {/* <Image src="/energy.png" width={250} height={250} alt="" /> */}
            <Image src="/logo.jpeg" width={100} height={100} alt="" />
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            {/* <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <FaXTwitter />
            </a> */}
          </div>
          <div>
            <h1 className="text-center pt-5 font-mont font-semibold">
              Phone number: +233 20 539 2086
            </h1>
            <h1 className="font-mont text-center font-semibold">
              edparkniaoil.co@gmail.com
            </h1>
          </div>
          <div>
            <h1 className="text-center pt-5">Greater Accra Region, Ghana</h1>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="mt-8 text-center">
        © 2024 CleanEnergyCafe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
