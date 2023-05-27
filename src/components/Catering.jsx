import React from "react";
import { motion } from "framer-motion";

const Catering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center overflow-auto"
    >
      <h3 className="absolute top-16 xs:top-24 text-3xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl uppercase tracking-[20px] cursive text-lime-400">
        Catering
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={require("../images/catering.png")}
        className="mb-10 mt-10  md:mt-20 md:mb-0 flex-shrink-0 w-40 xs:w-48 sm:w-56 h-40 xs:h-48 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:w-[400px] xl:h-[500px] hidden md:block"
      />
      <div className="space-y-6 px-0 md:px-10 sm:mt-10">
        <h4 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold">
          Did you know that we offer catering? 🍱
        </h4>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl">
          Whether it be a business meeting, social gathering, birthday, wedding
          or anything in between, we would love to chat with you and help to
          make your event a tasty and memorable experience for all of your
          guests.
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl">
          We are working on an official catering menu, but for now we are open
          to chatting and helping you pick the best options for your event!
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl">
          Feel free to reach out.
        </p>
      </div>
    </motion.div>
  );
};

export default Catering;
