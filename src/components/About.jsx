import React from "react";
import { motion } from "framer-motion";

//

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-lime-400  text-6xl cursive">
        About
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
        src={require("../images/about.png")}
        className="-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:w-[300px] xl:h-[400px] hidden md:block"
      />
      <div className="space-y-10 px-0 md:px-10 xs:scale-[75%] xs:mt-[5em]">
        <p className="text-2xl">
          Soaring Crane Sushi (est. 2021) is a locally owned and operated food
          establishment located in the beautiful community of Enfield, Nova
          Scotia. Here at Soaring Crane, we take pride in using local and
          sustainable products whenever possible and believe it is so important
          to support other local businesses whenever we can. Our menu showcases
          a variety of local products including salmon, crab, pork skins,
          vegetables and more. Everything is made fresh to order, with love,
          right here in our kitchen. Stop by and give us a try, we look forward
          to seeing you!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
