import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-auto"
    >
      <h3 className=" text-center pt-20 uppercase tracking-[20px] text-lime-400 text-6xl cursive">
        Order
      </h3>
      <div className="flex flex-row justify-evenly -mt-20">
        <img
          className="h-32 w-32 mt-20 xs:h-56 xs:w-56 xs:mt-36 sm:h-64 sm:w-64 sm:mt-40 md:h-96 md:w-96 md:mt-52 lg:h-96 lg:w-96 lg:mt-52 xl:h-96 xl:w-96 xl:mt-52 2xl:h-96 2xl:w-96 2xl:mt-52"
          src={require("../images/order1.png")}
          alt="logo"
        />
        <img
          className="h-32 w-32 mt-20 xs:h-56 xs:w-56 xs:mt-36 sm:h-64 sm:w-64 sm:mt-40 md:h-96 md:w-96 md:mt-52 lg:h-96 lg:w-96 lg:mt-52 xl:h-96 xl:w-96 xl:mt-52 2xl:h-96 2xl:w-96 2xl:mt-52"
          src={require("../images/order2.png")}
          alt="logo"
        />
        <img
          className="h-32 w-32 mt-20 xs:h-56 xs:w-56 xs:mt-36 sm:h-64 sm:w-64 sm:mt-40 md:h-96 md:w-96 md:mt-52 lg:h-96 lg:w-96 lg:mt-52 xl:h-96 xl:w-96 xl:mt-52 2xl:h-96 2xl:w-96 2xl:mt-52"
          src={require("../images/order3.png")}
          alt="logo"
        />
      </div>
      <div className="flex justify-center">
        <a href="https://order.tbdine.com/pickup/42732">
          <button className="button border">Order Now</button>
        </a>
      </div>
    </motion.div>
  );
};

export default Menu;
