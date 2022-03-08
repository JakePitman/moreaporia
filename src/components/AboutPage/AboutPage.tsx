import React, { useState, useEffect, forwardRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./AboutPage.module.scss";
import AboutNavigationLink from "./AboutNavigationLink";
import AboutImage from "./AboutImage";
import {
  lowerLeftBackgroundVariants,
  lowerRightBackgroundVariants,
} from "./aboutPageVariants";
import useWindowDimensions from "../../shared/useWindowDimensions";
import kayak from "./pictures/kayak.png";
import beach from "./pictures/beach.png";
import saho from "./pictures/saho_jake_gardens.png";

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

  const navOptionToPictureMap = {
    work: saho,
    jake: kayak,
    tech: beach,
  };

  const changeNavOptionSequence = useCallback(async () => {
    await controls.start("shrink");
    if (selectedNavOption === "work") {
      await controls.start("workActive");
    }
    if (selectedNavOption === "jake") {
      await controls.start("jakeActive");
    }
    if (selectedNavOption === "tech") {
      await controls.start("techActive");
    }
    await controls.start("expand");
  }, [selectedNavOption, controls]);

  useEffect(() => {
    changeNavOptionSequence();
  }, [changeNavOptionSequence]);

  return (
    <motion.div
      initial="hidden"
      onViewportEnter={openingSequence}
      animate={controls}
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
        <AboutNavigationLink
          title="Work"
          variantKey="work"
          handleClick={() => setSelectedNavOption("work")}
        />
        <AboutNavigationLink
          title="Jake"
          variantKey="jake"
          handleClick={() => setSelectedNavOption("jake")}
        />
        <AboutNavigationLink
          title="Tech"
          variantKey="tech"
          handleClick={() => setSelectedNavOption("tech")}
        />
      </motion.div>
      <motion.div className={styles.mainContentContainer}>
        <motion.div className={styles.imagesLayer}>
          {selectedNavOption && (
            <AboutImage
              src={navOptionToPictureMap[selectedNavOption]}
              alt="kayak"
            />
          )}
        </motion.div>
        <motion.div className={styles.mainContentCenterColumn}></motion.div>
      </motion.div>
    </motion.div>
  );
});

export default AboutPage;
