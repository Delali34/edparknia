import React from "react";
import Image from "next/image";
import map from "../public/pexels-pixabay-41949.jpg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <div className="relative" id="contact">
        <Image
          className="object-cover lg:h-[700px] h-[1050px]"
          src={map}
          width={2000}
          height={2000}
          alt=""
        />
        <div className="bg-black/60 lg:h-[700px] h-[1050px] absolute top-0 bottom-0 right-0 left-0  pt-10">
          <div className="flex justify-center">
            {" "}
            <div className="text-white lg:text-4xl text-2xl text-center font-bold">
              OUR EXPERTS ARE READY TO SERVE YOU
              <div className="px-32">
                {" "}
                <h1 className="w-full h-2 bg-red-400 text-center mt-5 "></h1>
              </div>
              <h1 className="text-sm font-normal pt-3">
                send us your thoughts. we would be happy to hear from you.
              </h1>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center ">
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
              className="w-[300px] xl:w-[400px] h-[400px] bg-red-400 mt-10 p-7"
            >
              <form
                action="https://getform.io/f/872b4888-7d18-47d4-800d-d2749733c3a2"
                method="POST"
              >
                <div>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                    className="border-b-black w-full border-b-2 focus:border-b-green-400 outline-none p-3"
                  />
                </div>
                <div className="pt-5">
                  <label htmlFor="name"></label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email"
                    className="border-b-black w-full  border-b-2 focus:border-b-green-400 outline-none p-3"
                  />
                </div>
                <div className="pt-5">
                  <label htmlFor="name"></label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    name="Phone Number"
                    className="border-b-black w-full border-b-2 focus:border-b-blue-400 outline-none p-3"
                  />
                </div>
                <div className="pt-5">
                  <label htmlFor="name"></label>
                  <textarea
                    className="border-b-black w-full border-b-2 focus:border-b-blue-400 outline-none p-3"
                    name="Message"
                    placeholder="Message"
                    id=""
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-800 hover:text-black hover:bg-purple-300 text-white font-normal py-2 outline-none px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
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
              className="w-[300px] xl:w-[400px] h-[300px] lg:h-[400px] bg-white lg:mt-10 p-3 flex flex-col items-center justify-center"
            >
              {" "}
              <h1 className="text-red-700 text-center font-bold lg:text-2xl text-xl">
                OUR INFORMATION
              </h1>
              <h1 className="text-center pt-3 ">Edparkniaoil Oil Company</h1>
              <h1 className="text-center pt-3 font-bold">Tema, Ghana</h1>
              <h1 className="text-center pt-2">Call: 020 539 2086 </h1>
              <h1 className="text-center pt-2 text-red-700">
                edparkniaoil.co@gmail.com
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
