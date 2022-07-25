import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

import Icon from "../shared/Icon";
import styles from "./LandingPage.module.scss";
import { headingVariants, footerLineVariants } from "./landingPageVariants";

const secondaryAnimationsDelay = 0.5;
const secondaryAnimationsStagger = 0.1;

const LandingPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [splineStarted, setSplineStarted] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={
          splineStarted
            ? styles.splineContainerStarted
            : styles.splineContainerWaiting
        }
      >
        {animationCompleted && (
          <Spline
            scene="https://prod.spline.design/urecjewqLGNYS7lp/scene.splinecode"
            onStart={() => setSplineStarted(true)}
          />
        )}
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.15,
        }}
        className={styles.midSection}
        onAnimationComplete={() => setAnimationCompleted(true)}
      >
        <motion.h1 variants={headingVariants} className={styles.mainHeading}>
          Jake Pitman
        </motion.h1>
        <motion.h2 variants={headingVariants} className={styles.subheading1}>
          Web & mobile engineer
        </motion.h2>
        <motion.h2 variants={headingVariants} className={styles.subheading2}>
          Front-end specialist
        </motion.h2>
      </motion.div>

      <div className={styles.footer}>
        <motion.div
          className={styles.iconsContainer}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: secondaryAnimationsStagger,
            delayChildren: secondaryAnimationsDelay,
            staggerDirection: -1,
          }}
        >
          <Icon Icon={<FiGithub />} href="https://github.com/jakePitman/" />
          <Icon Icon={<FiCodepen />} href="https://codepen.io/SyN219" />
          <motion.div
            variants={footerLineVariants}
            className={styles.footerLine}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
