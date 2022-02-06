import React from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./OpeningAnimation.module.scss";

const OpeningAnimation = () => {
  const controls = useAnimation();

  const mainSquareVariants = {
    hidden: {
      width: "1px",
      height: "1px",
      borderRadius: "50%",
      transform: "rotate(45deg)",
      rotate: -100,
      opacity: 0,
      transition: {},
      y: 0,
    },
    expanding: {
      borderRadius: 0,
      opacity: 1,
      rotate: 0,
      width: "100px",
      height: "100px",
      transition: {
        duration: 0.4,
        delay: 1,
      },
    },
  };
  const borderedSquare = {
    hidden: { opacity: 0, y: 0, x: 0, width: "0px", height: "0px" },
    expanding: (custom: { x: number; y: number }) => ({
      opacity: 1,
      x: custom.x,
      y: custom.y,
      width: "50px",
      height: "50px",
      transition: {
        duration: 0.2,
        delay: 1.2,
        // delay: 2,
      },
    }),
  };

  const sequence = async () => {
    await controls.start("expanding");
    // alert("DONE");
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.mainSquare}
        variants={mainSquareVariants}
        initial="hidden"
        animate={controls}
        onViewportEnter={() => sequence()}
      >
        <motion.div
          className={styles.thing}
          custom={{ x: 70, y: 70 }}
          variants={borderedSquare}
          transition={{
            duration: 1,
          }}
        />
        <motion.div
          className={styles.thing}
          custom={{ x: -25, y: -25 }}
          variants={borderedSquare}
          transition={{
            duration: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default OpeningAnimation;
