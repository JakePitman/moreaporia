import React, { useState, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./AboutPage.module.scss";
import AboutNavigationLink from "./AboutNavigationLink";
import {
  lowerLeftBackgroundVariants,
  lowerRightBackgroundVariants,
} from "./aboutPageVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";
import {
  workLinkVariants,
  jakeLinkVariants,
  techLinkVariants,
} from "./aboutNavigationLinkVariants";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  const { width, height } = useWindowDimensions();
  const [selectedNavOption, setSelectedNavOption] = useState<
    "work" | "jake" | "tech"
  >("jake");
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("visible");
    await controls.start("jakeActive");
  };

  // await controls.start("");
  return (
    <motion.div
      initial="hidden"
      onViewportEnter={openingSequence}
      animate={controls}
      viewport={{ margin: "-50%" }}
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
        <AboutNavigationLink
          title="Work"
          handleClick={() => setSelectedNavOption("work")}
          variants={workLinkVariants}
        />
        <AboutNavigationLink
          title="Jake"
          handleClick={() => setSelectedNavOption("jake")}
          variants={jakeLinkVariants}
        />
        <AboutNavigationLink
          title="Tech"
          handleClick={() => setSelectedNavOption("tech")}
          variants={techLinkVariants}
        />
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
