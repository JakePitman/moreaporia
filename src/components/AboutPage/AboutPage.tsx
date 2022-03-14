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
import sahoGardens from "./pictures/saho_jake_gardens.png";
import sahoNeko from "./pictures/saho_jake_neko.png";
import guitar from "./pictures/guitar.png";
import tree from "./pictures/tree.png";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const { width, height } = useWindowDimensions();
  const [selectedNavOption, setSelectedNavOption] = useState<
    "work" | "jake" | "tech"
  >("jake");
  const controls = useAnimation();
  const openingSequence = async () => {
    await controls.start("visible");
    await controls.start("shrink");
    await controls.start("jakeActive");
    await controls.start("expand");
    setHasEnteredViewport(true);
  };

  const navOptionToPicture1Map = {
    work: sahoGardens,
    jake: kayak,
    tech: beach,
  };
  const navOptionToPicture2Map = {
    work: sahoNeko,
    jake: guitar,
    tech: tree,
  };

  const changeNavOptionSequence = useCallback(async () => {
    if (!hasEnteredViewport) {
      return;
    }
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
  }, [selectedNavOption, controls, hasEnteredViewport]);

  useEffect(() => {
    changeNavOptionSequence();
  }, [changeNavOptionSequence]);

  const handleNavOptionChange = async (navOption: "work" | "jake" | "tech") => {
    await controls.start("shrink");
    setSelectedNavOption(navOption);
  };

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
          handleClick={() => {
            handleNavOptionChange("work");
          }}
        />
        <AboutNavigationLink
          title="Jake"
          variantKey="jake"
          handleClick={() => handleNavOptionChange("jake")}
        />
        <AboutNavigationLink
          title="Tech"
          variantKey="tech"
          handleClick={() => {
            handleNavOptionChange("tech");
          }}
        />
      </motion.div>
      <motion.div className={styles.mainContentContainer}>
        <motion.div className={styles.imagesLayer}>
          <AboutImage
            src={navOptionToPicture1Map[selectedNavOption]}
            alt="image_1"
            type="1"
          />
          <AboutImage
            src={navOptionToPicture2Map[selectedNavOption]}
            alt="image_2"
            type="2"
          />
        </motion.div>
        <motion.div className={styles.mainContentCenterColumn}></motion.div>
      </motion.div>
    </motion.div>
  );
});

export default AboutPage;
