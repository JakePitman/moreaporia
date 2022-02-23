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
    <div
      className={
        width > height ? styles.containerLandscape : styles.containerPortrait
      }
      ref={ref}
    >
      <motion.div
        variants={lowerLeftBackgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        className={styles.lowerLeftBackground}
      />
      <motion.div
        variants={lowerRightBackgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "200px" }}
        className={styles.lowerRightBackground}
      />
      <div className={styles.navigationLinksContainer}>
        <AboutNavigationLink title="My work" />
        <AboutNavigationLink title="Me" />
        <AboutNavigationLink title="My skillset" />
      </div>
      <div className={styles.mainContentContainer}>
        <div className={styles.mainContentOuterColumn}></div>
        <div className={styles.mainContentCenterColumn}></div>
        <div className={styles.mainContentOuterColumn}></div>
      </div>
    </div>
  );
});

export default AboutPage;
