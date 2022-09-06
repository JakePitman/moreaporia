import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./ProjectHighlight.module.scss";
import BlueprintShape from "./BlueprintShape";
import testBrown from "./pictures/test-brown-phone.png";
import TestAppBlueprint from "./TestAppBlueprint";
import BrowserContext from "../../shared/browserContext";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
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
        {/* <motion.div className={styles.shapeContainer}>
        <BlueprintShape shape="square" color="white" />
        <motion.img
          src={listing}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </motion.div> */}
      </div>
      <div className={styles.landscapeRightContainer}>
        <p className={styles.text}>In the spotlight</p>
        <h1 className={styles.title}>Chess Openings Trainer</h1>
        <p className={styles.text}>
          Build your chess openings repertoire by recording and testing
          yourself!
        </p>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const { isLandscape } = useContext(BrowserContext);

  return isLandscape ? <LandscapeLayout /> : <PortraitLayout />;
};

export default ProjectsPage;
