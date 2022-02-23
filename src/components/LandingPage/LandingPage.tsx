import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./LandingPage.module.scss";
import {
  headingVariants,
  iconVariants,
  footerLineVariants,
} from "./landingPageVariants";
import NavItem from "./NavItem";

const secondaryAnimationsDelay = 0.5;
const secondaryAnimationsStagger = 0.1;

type Props = {
  scrollToAboutPage: () => void;
};

const LandingPage = ({ scrollToAboutPage }: Props) => {
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
        <NavItem title="About" handleClick={scrollToAboutPage} />
        <NavItem title="Projects" handleClick={scrollToAboutPage} />
        <NavItem title="Contact" handleClick={scrollToAboutPage} />
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
