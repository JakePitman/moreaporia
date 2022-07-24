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
import AboutTexts from "./AboutTexts";

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
    await controls.start("jakeActiveMove");
    await controls.start("jakeActiveExpand");
    setHasEnteredViewport(true);
  };

  const changeNavOptionSequence = useCallback(async () => {
    if (!hasEnteredViewport) {
      return;
    }
    if (selectedNavOption === "work") {
      await controls.start("workActiveMove");
      await controls.start("workActiveExpand");
    }
    if (selectedNavOption === "jake") {
      await controls.start("jakeActiveMove");
      await controls.start("jakeActiveExpand");
    }
    if (selectedNavOption === "tech") {
      await controls.start("techActiveMove");
      await controls.start("techActiveExpand");
    }
  }, [selectedNavOption, controls, hasEnteredViewport]);

  useEffect(() => {
    changeNavOptionSequence();
  }, [changeNavOptionSequence]);

  const handleNavOptionChange = async (navOption: "work" | "jake" | "tech") => {
    if (navOption === selectedNavOption) {
      return;
    }
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
      <motion.div className={styles.mainContentContainer}>
        <AboutTexts selectedNavOption={selectedNavOption} />
        <AboutImage type="1" selectedNavOption={selectedNavOption} />
        <AboutImage type="2" selectedNavOption={selectedNavOption} />
      </motion.div>
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
    </motion.div>
  );
});

export default AboutPage;
