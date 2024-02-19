import React from "react";
import Image from "next/image";

import Link from "next/link";

function Homepage() {
  return (
    <div className="z-10">
      <div>
        <div className="max-w-7xl mx-auto  flex justify-between font-mont items-center pt-10  px-5">
          <div>
            {/* <Image src="/energy.png" width={250} height={250} alt="" /> */}
            <Image src="/logo.jpeg" width={100} height={100} alt="" />
          </div>
          <div className="lg:flex hidden text-2xl space-x-6 items-center">
            <Link href="/">
              <h1 className="hover:font-bold hover:text-red-400">Home</h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:font-bold hover:text-red-400">About</h1>
            </Link>
            <Link href="/services">
              {" "}
              <h1 className="hover:font-bold hover:text-red-400">Services</h1>
            </Link>
          </div>
          <Link href="/.#contact">
            <div className="p-2 rounded-lg bg-red-400 ">
              <h1 className="text-center text-white text-sm">Contact Us</h1>
            </div>
          </Link>
        </div>

        <hr className="mt-5" />
      </div>
    </div>
  );
}

export default Homepage;
