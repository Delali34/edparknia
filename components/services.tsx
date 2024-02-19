import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

function services() {
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
            Our Services
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
              At Wisdeck Oil Company, we understand the importance of a
              consistent and dependable supply of residual fuels for your
              operations. We pride ourselves on being a trusted provider of
              high-quality RFO, heavy fuel oils (HFO) that power industries,
              power plants, and heating systems. With our extensive network and
              efficient logistics, we ensure that you never face disruptions in
              your fuel supply during operations. Count on us to deliver the RFO
              you need, when you need them, enabling you to maintain seamless
              operations and meet your energy demands and production demands.
            </p>
            {/* <p className="pt-5">
              With Sea Freight professionals matching frequent sailings and
              flexible service options to your specific business objectives,
              Greenvine promises a new taste of Personal Service.
            </p>
            <p className="pt-5">
              Our freight management experts partner with you to learn your
              business first-hand. Equipped with an intimate understanding of
              your supply chain requirements, we pull from a range of standard
              Sea Freight products and supplementary options to secure the space
              allocation, timing, frequency and rates that fit your precise
              objectives.
            </p>
            <p className="pt-5">
              Whether we need to reserve an oversize container or securely
              transport your high-value cargo, experts at Greenvine treat each
              shipment with the care and attention it takes to earn your trust
            </p> */}
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
            We also supply Tyre Oil to companies based on their request. This
            oil is used as industrial fuel to substitute furnace oil. The Tyre
            Oil is mainly used as fuel in heavy industries such as ceramic
            factories, steel factories, heavy oil power plants and boiler
            factories.
          </p>
          {/* <p className="pt-5">
            its worldwide coverage has experienced, reputable cargo agents in
            most international airports throughout the world has the ability to
            move cargo of any size and nature.
          </p>
          <p className="pt-5">
            With an experienced team of Air Freight specialists delivering on
            your daily priorities for time, space, frequency and cost, you have
            a new taste of Personal Service.
          </p>
          <p className="pt-5">
            Our standard Air Freight products and their customizable options
            bring added flexibility to your supply chain.
          </p> */}
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
            At Wisdeck, we prioritize fuel quality to ensure optimal performance
            and regulatory compliance. Our laboratory is equipped with
            cutting-edge testing facilities that enable us to conduct
            comprehensive fuel testing and analysis. We rigorously examine
            critical parameters such as viscosity, flashpoint, sulfur content,
            and more, to guarantee that our residual fuels (RFO) meet the
            highest industry standards. By partnering with us, you gain access
            to our thorough quality control procedures, which instill confidence
            and trust in the fuels we supply. Rest assured that our fuels
            undergo meticulous testing to deliver consistent quality, empowering
            you to operate with peace of mind.r consistent quality, empowering
            you to operate with peace of mind.
          </p>
          <p className="pt-5">
            As a leading residual fuel company, Wisdeck is dedicated to
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

export default services;
