import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Navigate } from "react-router-dom";

import styles from "./OpeningAnimation.module.scss";
import {
  mainSquareVariants,
  logoTextVariants,
  borderedSquareVariants,
  fadedSquareVariants,
} from "./variants";

const OpeningAnimation = () => {
  const controls = useAnimation();
  const [completed, setCompleted] = useState(false);

  const sequence = async () => {
    await controls.start("expanding");
    await controls.start("aboutToClose");
    await controls.start("closing");
    await controls.start("goingFullScreen1");
    await controls.start("goingFullScreen2");
    setCompleted(true);
  };

  return completed ? (
    <Navigate to="/home" />
  ) : (
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
