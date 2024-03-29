import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import first from "../public/pexels-albin-berlin-906982.jpg";
import second from "../public/pexels-david-dibert-1117210.jpg";
import third from "../public/pexels-pixabay-416405.jpg";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link: string;
}> = ({ title, description, imageUrl, link }) => (
  <Link href={link}>
    <motion.div
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md hover:shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4">{title}</h1>
      <p className="text-sm mt-2">{description}</p>
      <div className="bg-red-400 p-3 rounded-md mt-4 hover:bg-red-500">
        <h1 className="text-center text-md text-white">Learn more</h1>
      </div>
    </motion.div>
  </Link>
);

function Who() {
  return (
    <div className="bg-slate-300 px-10 pb-20">
      <Head>
        <title>Residual Fuel & Tyre Oil Supplier in Ghana | Wisdeck</title>
        <meta
          name="description"
          content="Wisdeck is a leading residual fuel and tyre oil supplier in Ghana. We offer fuel testing and analysis services to ensure optimal performance and compliance."
        />
      </Head>
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
        className="pt-10 text-center"
      >
        <h1 className="text-4xl font-bold">WHO WE ARE</h1>
      </motion.div>
      <motion.div
        initial={{
          y: 70,
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
        className="max-w-2xl mx-auto mt-8 text-center text-sm md:text-xl"
      >
        <p>
          We are passionate about providing streamlined logistics solutions that
          enhance efficiency, reliability, and foster growth, we have emerged as
          a prominent industry leader with three decades of experience in the
          field
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center pt-20 pb-5">
        <ServiceCard
          title="RESIDUAL FUEL SUPPLY"
          description="At Edparknia, we recognize the significance of ensuring a reliable and consistent source of residual fuels for your operational needs. We take pride in being a reliable supplier of top-notch heavy fuel oils (HFO) that fuel various industries and marine vessels"
          imageUrl={first}
          link="/services/residual-fuel-supply-ghana"
        />
        <ServiceCard
          title="TYRE OIL SUPPLY"
          description="We also supply Tyre Oil to companies upon request, serving as an industrial fuel substitute for furnace oil. It is predominantly used in heavy industries like ceramic factories, steel plants, heavy oil power plants, and boiler factories."
          imageUrl={second}
          link="/services/tyre-oil-supply-ghana"
        />
        <ServiceCard
          title="FUEL TESTING AND ANALYSIS"
          description="At Edparknia, we uphold fuel quality to ensure optimal performance and regulatory compliance. Our laboratory is equipped with the latest  testing facilities that enable us to conduct comprehensive fuel testing and analysis services."
          imageUrl={third}
          link="/services/fuel-testing-analysis-ghana"
        />
      </div>
    </div>
  );
}

export default Who;
