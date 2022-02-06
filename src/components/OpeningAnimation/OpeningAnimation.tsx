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
    aboutToClose: {
      width: "110px",
      height: "110px",
      transition: {
        delay: 0.8,
        duration: 0.15,
      },
    },
    closing: {
      width: "0px",
      height: "0px",
      transition: {
        duration: 0.3,
      },
    },
  };

  const borderedSquareVariants = {
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
      width: "60px",
      height: "60px",
      transition: {
        duration: 0.4,
        delay: 1.2,
        type: "spring",
      },
    }),
    aboutToClose: {
      width: "65px",
      height: "65px",
      transition: {
        duration: 0.15,
        delay: 0.8,
      },
    },
    closing: {
      opacity: 0,
      width: "0px",
      height: "0px",
      x: 0,
      y: 0,
      rotate: 180,
      transition: {
        duration: 0.4,
      },
    },
  };

  const fadedSquareVariants = {
    hidden: (custom: { startOffset: number; finishOffset: number }) => ({
      opacity: 0,
      y: -custom.startOffset,
      x: custom.startOffset,
      width: "0px",
      height: "0px",
    }),
    expanding: (custom: { startOffset: number; finishOffset: number }) => ({
      opacity: 0.5,
      y: -custom.finishOffset,
      x: custom.finishOffset,
      width: "100px",
      height: "100px",
      transition: {
        duration: 0.4,
        delay: 1.4,
        type: "spring",
      },
    }),
    aboutToClose: {
      width: "110px",
      height: "110px",
      transition: {
        duration: 0.15,
        delay: 0.8,
      },
    },
    closing: {
      opacity: 0,
      width: "0px",
      height: "0px",
      x: 0,
      y: 0,
      rotate: -180,
    },
  };

  const logoTextVariants = {
    hidden: {
      opacity: 0,
    },
    expanding: {
      opacity: 1,
    },
    closing: {
      opacity: 0,
    },
  };

  const sequence = async () => {
    await controls.start("expanding");
    await controls.start("aboutToClose");
    await controls.start("closing");
    // alert("DONE");
  };

  return (
    <motion.div
      className={styles.container}
      onViewportEnter={() => sequence()}
      initial="hidden"
      animate={controls}
    >
      <motion.div className={styles.mainSquare} variants={mainSquareVariants}>
        <motion.h1 variants={logoTextVariants} className={styles.logoText}>
          MA
        </motion.h1>
      </motion.div>
      <motion.div
        className={styles.borderedSquare}
        custom={{ startOffset: 15, finishOffset: 35 }}
        variants={borderedSquareVariants}
        transition={{
          duration: 1,
        }}
      />
      <motion.div
        className={styles.borderedSquare}
        custom={{ startOffset: -15, finishOffset: -35 }}
        variants={borderedSquareVariants}
        transition={{
          duration: 1,
        }}
      />
      <motion.div
        className={styles.fadedSquare}
        custom={{ startOffset: -15, finishOffset: -35 }}
        variants={fadedSquareVariants}
      />
      <motion.div
        className={styles.fadedSquare}
        custom={{ startOffset: 15, finishOffset: 35 }}
        variants={fadedSquareVariants}
      />
    </motion.div>
  );
};

export default OpeningAnimation;
