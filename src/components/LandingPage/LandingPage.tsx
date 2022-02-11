import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./LandingPage.module.scss";
import {
  headingVariants,
  navItemVariants,
  iconVariants,
  footerLineVariants,
} from "./landingPageVariants";

const secondaryAnimationsDelay = 0.5;
const secondaryAnimationsStagger = 0.1;

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.navBar}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: secondaryAnimationsStagger,
          delayChildren: secondaryAnimationsDelay,
        }}
      >
        <motion.li variants={navItemVariants} className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>A</p>
          bout
        </motion.li>
        <motion.li variants={navItemVariants} className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>P</p>
          rojects
        </motion.li>
        <motion.li variants={navItemVariants} className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>C</p>
          ontact
        </motion.li>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.15,
        }}
        className={styles.midSection}
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
          <motion.a
            variants={iconVariants}
            className={styles.iconWrapper}
            href="https://github.com/jakePitman/"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            variants={iconVariants}
            className={styles.iconWrapper}
            href="https://codepen.io/SyN219"
          >
            <FiCodepen />
          </motion.a>
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
