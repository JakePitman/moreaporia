import React, { useState, useEffect, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./AboutPage.module.scss";
import AboutNavigationLink from "./AboutNavigationLink";
import {
  lowerLeftBackgroundVariants,
  lowerRightBackgroundVariants,
} from "./aboutPageVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";
import {
  workLinkContainerVariants,
  jakeLinkContainerVariants,
  techLinkContainerVariants,
  workLinkMinorBorderVariants,
  jakeLinkMinorBorderVariants,
  techLinkMinorBorderVariants,
} from "./aboutNavigationLinkVariants";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  const { width, height } = useWindowDimensions();
  const [selectedNavOption, setSelectedNavOption] = useState<
    "work" | "jake" | "tech" | null
  >(null);
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("visible");
    setSelectedNavOption("jake");
  };

  useEffect(() => {
    if (selectedNavOption === "work") {
      controls.start("workActive");
    }
    if (selectedNavOption === "jake") {
      controls.start("jakeActive");
    }
    if (selectedNavOption === "tech") {
      controls.start("techActive");
    }
  }, [selectedNavOption, controls]);

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
          variants={{
            container: workLinkContainerVariants,
            minorBorder: workLinkMinorBorderVariants,
          }}
        />
        <AboutNavigationLink
          title="Jake"
          handleClick={() => setSelectedNavOption("jake")}
          variants={{
            container: jakeLinkContainerVariants,
            minorBorder: jakeLinkMinorBorderVariants,
          }}
        />
        <AboutNavigationLink
          title="Tech"
          handleClick={() => setSelectedNavOption("tech")}
          variants={{
            container: techLinkContainerVariants,
            minorBorder: techLinkMinorBorderVariants,
          }}
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
