import React from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./OpeningAnimation.module.scss";

const OpeningAnimation = () => {
  const controls = useAnimation();

  const mainSquareVariants = {
    hidden: {
      width: "0px",
      height: "0px",
      borderRadius: "50%",
      transform: "rotate(45deg)",
      rotate: -180,
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
        type: "spring",
      },
    },
  };
  const borderedSquare = {
    hidden: (custom: { startOffset: number; finishOffset: number }) => ({
      opacity: 0,
      y: custom.startOffset,
      x: custom.startOffset,
      width: "0px",
      height: "0px",
    }),
    expanding: (custom: { startOffset: number; finishOffset: number }) => ({
      opacity: 1,
      x: custom.finishOffset,
      y: custom.finishOffset,
      width: "50px",
      height: "50px",
      transition: {
        duration: 0.4,
        delay: 1,
        type: "spring",
      },
    }),
  };

  const sequence = async () => {
    await controls.start("expanding");
    // alert("DONE");
  };

  return (
    <motion.div
      className={styles.container}
      onViewportEnter={() => sequence()}
      initial="hidden"
      animate={controls}
    >
      <motion.div className={styles.mainSquare} variants={mainSquareVariants} />
      <motion.div
        className={styles.borderedSquare}
        custom={{ startOffset: 15, finishOffset: 35 }}
        variants={borderedSquare}
        transition={{
          duration: 1,
        }}
      />
      <motion.div
        className={styles.borderedSquare}
        custom={{ startOffset: -15, finishOffset: -35 }}
        variants={borderedSquare}
        transition={{
          duration: 1,
        }}
      />
      {/* <motion.div className={styles.fadedSquare} />
      <motion.div className={styles.fadedSquare} /> */}
    </motion.div>
  );
};

export default OpeningAnimation;