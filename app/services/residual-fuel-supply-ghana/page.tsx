"use client";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

function residualfuel() {
  return (
    <div>
      <div className="relative  ">
        <Image
          src="/image2.jpg"
          className=" w-full h-[50vh] object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div className="absolute top-[50%] right-0 left-0 bottom-0 flex justify-center">
          <h1 className="text-white md:text-7xl text-4xl font-bold">
            Our Services{" "}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl xl:px-40 2xl:px-0 mx-auto p-5 " id="services">
        <div className="mt-10 md:text-xl text-sm">
          <motion.h1
            initial={{
              y: -70,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="font-bold"
            id="sea"
          >
            RESIDUAL FUEL SUPPLY
          </motion.h1>
          <motion.div
            initial={{
              y: -90,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            {" "}
            <p className="pt-5">
              At Edparknia Oil Company, we understand the importance of a
              consistent and dependable supply of residual fuels for your
              operations. We pride ourselves on being a trusted provider of
              high-quality RFO, heavy fuel oils (HFO) that power industries,
              power plants, and heating systems. With our extensive network and
              efficient logistics, we ensure that you never face disruptions in
              your fuel supply during operations. Count on us to deliver the RFO
              you need, when you need them, enabling you to maintain seamless
              operations and meet your energy demands and production demands.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{
            y: -70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 md:text-xl text-sm"
        >
          <h1 className="font-bold" id="air">
            TYRE OIL SUPPLY
          </h1>
          <p className="pt-5">
            We also cater to companies requests by supplying Tyre Oil, an
            industrial fuel that serves as a substitute for furnace oil.
            Primarily utilized in heavy industries, Tyre Oil finds application
            in ceramic factories, steel plants, heavy oil power plants, and
            boiler factories.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: -70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 md:text-xl text-sm"
        >
          <h1 className="font-bold" id="haul">
            FUEL TESTING AND ANALYSIS
          </h1>
          <p className="pt-5">
            At Edparknia, our top priority is ensuring the quality of our fuels
            for optimal performance and compliance with regulations. Equipped
            with state-of-the-art testing facilities, our laboratory conducts
            comprehensive testing and analysis of our residual fuels (RFO). We
            rigorously examine key parameters such as viscosity, flashpoint,
            sulfur content, and more, ensuring that our fuels meet the highest
            industry standards.
            <br />
            By choosing us as your partner, you benefit from our meticulous
            quality control procedures, instilling confidence and trust in the
            fuels we supply. Rest assured, our fuels undergo thorough testing to
            consistently deliver top-notch quality, providing you with the
            assurance to operate with peace of mind.
          </p>
          <p className="pt-5">
            As a leading residual fuel company, Edparknia is dedicated to
            providing reliable supply, customized solutions, and stringent
            quality control to meet your unique energy requirements. With our
            expertise and commitment to excellence, we strive to be your trusted
            partner in fueling success.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default residualfuel;
