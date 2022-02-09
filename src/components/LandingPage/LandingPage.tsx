import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./LandingPage.module.scss";
import { headingVariants } from "./landingPageVariants";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>A</p>bout
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>P</p>rojects
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemFirstLetter}>C</p>ontact
        </li>
      </div>

      <div className={styles.midSection}>
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
      </div>

      <div className={styles.footer}>
        <div className={styles.iconsContainer}>
          <a
            className={styles.iconWrapper}
            href="https://github.com/jakePitman/"
          >
            <FiGithub />
          </a>
          <a className={styles.iconWrapper} href="https://codepen.io/SyN219">
            <FiCodepen />
          </a>
          <div className={styles.footerLine} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
