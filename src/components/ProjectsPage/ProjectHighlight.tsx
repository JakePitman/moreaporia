import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./ProjectHighlight.module.scss";
import testBrown from "./pictures/test-brown-phone.png";
import TestAppBlueprint from "./TestAppBlueprint";
import BrowserContext from "../../shared/browserContext";
import AppleStoreLogo from "./AppleStoreLogo";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  draw: { opacity: 1, x: 0 },
};

const PortraitLayout = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <div className={styles.appImageContainer}>
        <TestAppBlueprint />
        <motion.img
          src={testBrown}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </div>
    </motion.div>
  );
};

const LandscapeLayout = () => {
  return (
    <motion.div className={styles.pageContainer}>
      <div className={styles.landscapeLeftContainer}>
        <div className={styles.appImageContainer}>
          <TestAppBlueprint />
          <motion.img
            src={testBrown}
            alt=""
            className={styles.image}
            variants={imageVariants}
          />
        </div>
      </div>
      <motion.div
        className={styles.landscapeRightContainer}
        variants={{
          draw: {
            transition: { delayChildren: 0.2, staggerChildren: 0.1 },
          },
        }}
      >
        <motion.p className={styles.text} variants={textVariants}>
          In the spotlight
        </motion.p>
        <div className={styles.titleContainer}>
          <motion.h1 className={styles.title} variants={textVariants}>
            Chess
          </motion.h1>
          <motion.h1 className={styles.title} variants={textVariants}>
            Openings
          </motion.h1>
          <motion.h1 className={styles.title} variants={textVariants}>
            Trainer
          </motion.h1>
        </div>
        <motion.p className={styles.text} variants={textVariants}>
          Build your chess openings repertoire by recording and testing
          yourself!
        </motion.p>
        <motion.div variants={textVariants}>
          <AppleStoreLogo />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const { isLandscape } = useContext(BrowserContext);

  return isLandscape ? <LandscapeLayout /> : <PortraitLayout />;
};

export default ProjectsPage;
