import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./LandingPage.module.scss";
import { headingVariants, navItemVariants } from "./landingPageVariants";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <motion.li
          initial={navItemVariants.hidden}
          animate={navItemVariants.visible({ delay: 0.6 })}
          className={styles.listItem}
        >
          <p className={styles.listItemFirstLetter}>A</p>
          bout
        </motion.li>
        <motion.li
          initial={navItemVariants.hidden}
          animate={navItemVariants.visible({ delay: 0.4 })}
          className={styles.listItem}
        >
          <p className={styles.listItemFirstLetter}>P</p>
          rojects
        </motion.li>
        <motion.li
          initial={navItemVariants.hidden}
          animate={navItemVariants.visible({ delay: 0.2 })}
          className={styles.listItem}
        >
          <p className={styles.listItemFirstLetter}>C</p>
          ontact
        </motion.li>
      </div>

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
