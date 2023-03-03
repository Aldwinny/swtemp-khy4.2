import React, { useEffect } from "react";
import robot_img from "../assets/happy_robot.webp";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    document.title = "Khybots | Home";
  }, []);

  const variant = {};

  return (
    <div>
      <div className="h-screen">
        <div className="h-1/2 flex justify-center items-center">
          <motion.h1
            initial={{
              opacity: 0,
              translateY: "15px",
            }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 1 }}
            className="text-center text-2xl tablet:text-4xl mx-3 font-bold font-tiltNeon"
          >
            We take robots to the next level
          </motion.h1>
        </div>

        <img
          src={robot_img}
          alt="robot"
          className="absolute z-10 -bottom-14 right-0 robot-size"
        />
      </div>
      <div className="bg-black text-white p-10">
        <div className="ml-10">
          <motion.h1
            initial={{ opacity: 0, translateY: "15px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="my-5 mt-32 text-3xl"
          >
            IOT is the future. Let's talk about it
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, translateY: "15px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-xl text-gray-400"
          >
            The opportunity to make your home smarter is all up to you.
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.8 }}
            className="font-bold rounded-lg my-16 text-sky-400 border border-sky-400 px-5 py-2 hover:bg-sky-400 hover:text-black active:bg-white duration-300"
          >
            Know more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
