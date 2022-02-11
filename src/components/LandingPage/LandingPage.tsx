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

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.navBar}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.8 }}
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

      <motion.div className={styles.midSection}>
        <motion.h1
          className={styles.mainHeading}
          initial={headingVariants.hidden}
          animate={headingVariants.visible({ delay: 0 })}
        >
          Jake Pitman
        </motion.h1>
        <motion.h2
          initial={headingVariants.hidden}
          animate={headingVariants.visible({ delay: 0.15 })}
          className={styles.subheading1}
        >
          Web & mobile engineer
        </motion.h2>
        <motion.h2
          initial={headingVariants.hidden}
          animate={headingVariants.visible({ delay: 0.3 })}
          className={styles.subheading2}
        >
          Front-end specialist
        </motion.h2>
      </motion.div>

      <div className={styles.footer}>
        <motion.div className={styles.iconsContainer}>
          <motion.a
            initial={iconVariants.hidden}
            animate={iconVariants.visible({ delay: 0.4 })}
            className={styles.iconWrapper}
            href="https://github.com/jakePitman/"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            initial={iconVariants.hidden}
            animate={iconVariants.visible({ delay: 0.2 })}
            className={styles.iconWrapper}
            href="https://codepen.io/SyN219"
          >
            <FiCodepen />
          </motion.a>
          <motion.div
            initial={footerLineVariants.hidden}
            animate={footerLineVariants.visible}
            className={styles.footerLine}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
