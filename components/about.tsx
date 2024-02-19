import React from "react";
import Image from "next/image";
import core1 from "../public/pexels-jopwell-2422294 (1) (1).jpg";
import core2 from "../public/pexels-mica-asato-1198171 (1).jpg";
import { motion } from "framer-motion";

function about() {
  return (
    <div>
      <div className="relative  ">
        <Image
          src="/image3.jpg"
          className=" w-full h-[50vh] object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="bg-black/60 inset-0 top-0 right-0 left-0  h-[50vh] bottom-0 absolute"></div>

        <div className="absolute top-[50%] right-0 left-0 bottom-0 flex justify-center">
          <h1 className="text-white md:text-7xl text-4xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto p-5 lg:p-20 xl:px-40 2xl:px-0"
        id="#about"
      >
        <motion.h1
          initial={{
            x: -70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="bg-red-400 w-72 h-2 mt-3 "
        ></motion.h1>
        <motion.div
          initial={{
            x: 70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="pt-10"
        >
          <p className="md:text-xl text-sm ">
            At Edparknia Oil Company Limited, our dedicated team of
            professionals is devoted to delivering comprehensive energy
            solutions to our esteemed clients. With extensive expertise in the
            residual fuel industry, we are committed to offering unparalleled
            knowledge and exceptional services. Our Pledge: We are dedicated to
            supplying industries with dependable, high-quality residual fuel
            solutions. Our emphasis is on comprehending your distinct energy
            requirements and providing customized solutions to enhance your
            operations.
            <br /> <br /> Leaders in the Field: As pioneers in the industry, we
            proactively adapt to the dynamic energy landscape. Our team remains
            well-informed about the latest industry trends, regulations, and
            technological advancements, ensuring that we deliver cutting-edge
            solutions. Customer-Centric Philosophy: Our clients take precedence,
            with their needs being the focal point of all our endeavors. By
            cultivating strong partnerships and understanding your business
            objectives, we guarantee that our solutions align with your goals,
            fostering long-term success
          </p>
        </motion.div>
        <div>
          <motion.h1
            initial={{
              x: -80,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 md:text-4xl text-2xl font-medium"
          >
            OUR CORE VALUES
          </motion.h1>
          <motion.h1
            initial={{
              x: -70,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-red-400 w-16 h-2 mt-3 "
          ></motion.h1>
        </div>
        <div className="flex items-center lg:flex-row flex-col gap-5">
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10  relative"
          >
            <Image
              className="sm:w-[700px] sm:h-[400px] h-[200px] object-cover"
              src={core1}
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="bg-black/40 absolute sm:w-[100%] sm:h-[100%] h-[200px] top-0 right-0 bottom-0 left-0 "></div>
            <div className=" absolute md:text-5xl text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white font-bold">Teamwork</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="lg:mt-10 mt-5  relative"
          >
            <Image
              className="w-[700px] sm:h-[400px] h-[200px] object-cover"
              src={core2}
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="bg-black/40 absolute sm:w-[100%] sm:h-[100%] h-[200px] top-0 right-0  "></div>
            <div className=" absolute md:text-5xl text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white font-bold">Unity</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default about;
