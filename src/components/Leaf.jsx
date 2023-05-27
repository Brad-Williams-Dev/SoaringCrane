import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSushi } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Leaf = () => {
  const [randomScale, setRandomScale] = useState(1);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const scaleValue =
      screenWidth < 768 ? Math.random() * 1 + 0.5 : Math.random() * 2 + 1;
    setRandomScale(scaleValue);
    console.log(screenWidth);
  }, []);

  const randomX = Math.floor(Math.random() * 100);
  const randomDelay = Math.floor(Math.random() * 5);
  const randomDuration = Math.floor(Math.random() * 15) + 5;
  const randomRotation = Math.floor(Math.random() * 360);

  const styles = {
    position: "absolute",
    left: `${Math.floor(Math.random() * 100)}%`,
    top: 0,
    transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
    animation: `fall-${Math.floor(
      Math.random() * 100
    )} ${randomDuration}s linear ${randomDelay}s infinite`,
  };

  return (
    <motion.div
      style={styles}
      animate={{ top: "100%" }}
      transition={{
        duration: randomDuration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <FontAwesomeIcon icon={faLeaf} style={{ color: "hotpink" }} />
    </motion.div>
  );
};

export default Leaf;
