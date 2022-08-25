import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./ProjectsPage.module.scss";
import BlueprintShape from "./BlueprintShape";
import testBrown from "./pictures/test-brown-phone.png";
import listBlue from "./pictures/list-blue-phone.png";
import Grid from "./Grid";
import TestAppBlueprint from "./TestAppBlueprint";
import ListAppBlueprint from "./ListAppBlueprint";
import BrowserContext from "../../shared/browserContext";

const imageVariants = {
  hidden: { opacity: 0 },
  imagesAppear: { opacity: 1, transition: { duration: 1 } },
};

const ProjectsPage = () => {
  const controls = useAnimation();
  const { isLandscape } = useContext(BrowserContext);

  const openingSequence = async () => {
    await controls.start("draw");
    await controls.start("imagesAppear");
  };

  return (
    <motion.div
      className={styles.pageContainer}
      animate={controls}
      initial="hidden"
      onViewportEnter={() => openingSequence()}
    >
      <Grid />
      <div className={styles.appImageContainer}>
        <TestAppBlueprint />
        <motion.img
          src={testBrown}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </div>
      {isLandscape && (
        <div className={styles.appImageContainer}>
          <ListAppBlueprint />
          <motion.img
            src={listBlue}
            alt=""
            className={styles.image}
            variants={imageVariants}
          />
        </div>
      )}
      {/* <motion.div className={styles.shapeContainer}>
        <BlueprintShape shape="square" color="white" />
        <motion.img
          src={listing}
          alt=""
          className={styles.image}
          variants={imageVariants}
        />
      </motion.div> */}
    </motion.div>
  );
};

export default ProjectsPage;
