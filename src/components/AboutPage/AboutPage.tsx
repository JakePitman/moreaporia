import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import styles from "./AboutPage.module.scss";
import AboutNavigationLink from "./AboutNavigationLink";
import {
  lowerLeftBackgroundVariants,
  lowerRightBackgroundVariants,
} from "./aboutPageVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  const { width, height } = useWindowDimensions();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50%" }}
      className={
        width > height ? styles.containerLandscape : styles.containerPortrait
      }
      ref={ref}
    >
      <motion.div
        variants={lowerLeftBackgroundVariants}
        className={styles.lowerLeftBackground}
      />
      <motion.div
        variants={lowerRightBackgroundVariants}
        className={styles.lowerRightBackground}
      />
      <motion.div className={styles.navigationLinksContainer}>
        <AboutNavigationLink title="Work" />
        <AboutNavigationLink title="Bio" />
        <AboutNavigationLink title="Tech" />
      </motion.div>
      <div className={styles.mainContentContainer}>
        <div className={styles.mainContentOuterColumn}></div>
        <div className={styles.mainContentCenterColumn}></div>
        <div className={styles.mainContentOuterColumn}></div>
      </div>
    </motion.div>
  );
});

export default AboutPage;
